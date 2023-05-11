import { signal } from '@preact/signals';

import api from './api';

// -- Configuration

// eslint-disable-next-line import/prefer-default-export
export const config = signal(await api('/config'));
