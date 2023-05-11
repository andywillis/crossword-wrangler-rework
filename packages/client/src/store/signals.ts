import { signal } from '@preact/signals';

import api from './api';

import { getToday } from '../lib/date';

// ---------------

export const currentDate = signal(getToday());

export const config = signal(await api('/config'));

export const crossword = signal(await api(`/crossword/${currentDate.value}/easy`));

export const selectedYear = signal(0);
