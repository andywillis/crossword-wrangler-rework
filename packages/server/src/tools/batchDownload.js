import { downloadUriData } from '../lib/process';

const uri = 'https://ams.cdn.arkadiumhosted.com/assets/gamesfeed/evening-standard/daily-crossword/';
const years = [ 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 ];

downloadUriData(uri, years);
