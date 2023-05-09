import { writeFile } from 'fs/promises';
import getUriData from './process';

import rootname from '../../rootname';

// import { getXMLData } from './download';

const uri = 'https://ams.cdn.arkadiumhosted.com/assets/gamesfeed/evening-standard/daily-crossword/';
const years = [ 2017, 2018, 2019, 2020, 2021, 2022, 2023 ];

const uriData = await getUriData(uri, years);

await writeFile(`${rootname}/data/full.json`, JSON.stringify(uriData), 'utf8');
console.log('File written');

// await writeFile(`${rootname}/data/full_unpacked.json`, JSON.stringify(uriData, null, 2), 'utf8');
// console.log('Unpacked file written');

// console.dir(uriData, { depth: null });
// getXMLData(uriData);
