import { writeFile } from 'fs/promises';
import { bundleUriData } from '../lib/process';

import rootname from '../../rootname';

const uri = 'https://ams.cdn.arkadiumhosted.com/assets/gamesfeed/evening-standard/daily-crossword/';
const years = [ 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 ];

const store = await bundleUriData(uri, years);

await writeFile(`${rootname}/data/full_minified.json`, JSON.stringify(store), 'utf8');
await writeFile(`${rootname}/data/full.json`, JSON.stringify(store, null, 2), 'utf8');
console.log('Files written');
