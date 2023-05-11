import { signal } from '@preact/signals';

import api from './api';

// import { getNowDate } from '../lib/date';

export const currentDate = signal('');

export const config = signal(await api('/config'));

export const crossword = signal({});
