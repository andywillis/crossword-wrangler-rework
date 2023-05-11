import { signal } from '@preact/signals';

import { getToday } from '../lib/date';

// --- Calendar

export const calendarHistory = signal([]);

export const currentDate = signal(getToday());

// export const selectedYear = signal('');
