import { signal } from '@preact/signals';

import api from './api';

import { currentDate } from './calendar';

// eslint-disable-next-line import/prefer-default-export
export const crossword = signal(await api(`/crossword/${currentDate.value}/easy`));
