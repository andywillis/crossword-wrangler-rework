import { signal } from '@preact/signals';

import api from './api';

import { getNowDate } from '../lib/date';

export const currentDate = signal(getNowDate());

export const crossword = signal(await api('/crossword/today'));
