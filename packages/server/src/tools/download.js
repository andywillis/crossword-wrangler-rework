import path from 'path';
import fs from 'fs/promises';
import { createRequire } from 'module';
import createThrottle from 'async-throttle';
import { parseString } from 'xml2js';
import { promisify } from 'util';

import rootname from '../../rootname';

const throttle = createThrottle(2);
const require = createRequire(import.meta.url);
const xmlParseString = promisify(parseString);

require('colors');
require('draftlog').into(console);

export async function createFolder(path) {
  try {
    await fs.stat(path);
  } catch (err) {
    await fs.mkdir(path);
    console.log(`${path} created`.green);
  }
}

export async function saveFile(path, data, type) {
  try {
    await fs.writeFile(path, data, type);
  } catch (err) {
    console.log(`Write file error: ${path}`.red);
  }
}

function stringify(data, indent) {
  if (indent) return JSON.stringify(data, null, indent);
  return JSON.stringify(data);
}

async function saveData(output) {
  const { date, easy, quick } = output;
  const dataPath = path.join(rootname, 'data');
  try {
    await fs.writeFile(`${dataPath}/${date}-easy.json`, stringify(easy), 'utf8');
    await fs.writeFile(`${dataPath}/${date}-quick.json`, stringify(quick), 'utf8');
  } catch (err) {
    console.log(err);
  }
}

function getClues(obj) {
  const { title, clue: cluesArr } = obj;
  const label = title[0].b[0];
  const clues = cluesArr.map((o) => {
    const { _: clue, $: meta } = o;
    return { clue, meta };
  });
  return { label, clues };
}

function restructureData(data) {
  try {

    const { crossword } = data['crossword-compiler']['rectangular-puzzle'][0];
    const { grid, word, clues: cluesArr } = crossword[0];
    const { $: { width, height }, cell } = grid[0];

    const squares = cell.map(o => o.$);
    const words = word.map(o => o.$);

    const clues = {};
    const clueSet1 = getClues(cluesArr[0]);
    const clueSet2 = getClues(cluesArr[1]);
    clues[clueSet1.label.toLowerCase()] = clueSet1.clues;
    clues[clueSet2.label.toLowerCase()] = clueSet2.clues;

    return { ok: true, width, height, squares, words, clues };

  } catch (err) {
    return { ok: false };
  }
}

export async function getXMLData(uriArr) {

  const dataPath = path.join(rootname, 'data');

  await createFolder(dataPath);

  console.log('Iterating over dataset'.green);

  uriArr.forEach(({ year, data }) => {

    const status = console.draft();

    status(`${year}`.yellow);

    data.forEach(async obj => {

      const { date, easy, quick } = obj;

      status(`Gathering ${date} promises`.gray);

      const promises = [ easy, quick ].map(async uri => {
        try {
          const res = await throttle(() => fetch(uri));
          return res.text();
        } catch (err) {
          console.error(`${uri}: ${err}`);
        }
      });

      const [ easyXML, quickXML ] = await Promise.all(promises);

      const output = {
        date,
        easy: restructureData(await xmlParseString(easyXML)),
        quick: restructureData(await xmlParseString(quickXML))
      };

      console.log(`Saving ${date} data`.green);

      saveData(output);

    });

  });

}
