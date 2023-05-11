import { signal } from '@preact/signals';

import api from './api';

import { getToday } from '../lib/date';

// -- Configuration

export const config = signal(await api('/config'));

// --- Calendar

export const calendarHistory = signal([]);

export const currentDate = signal(getToday());

export const selectedYear = signal(0);

// --- Crossword

export const crossword = signal(await api(`/crossword/${currentDate.value}/easy`));
