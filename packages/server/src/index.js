import 'dotenv/config';

import { app, port, server } from './service/express';

import store from './store';
import routes from './routes/index';

import crosswordData from '../data/full_minified.json' assert { type: 'json' };

const { dispatch } = store;

dispatch({ type: 'loadData', payload: crosswordData });

app.get('/crossword/today', await routes.today());
app.get('/crossword/:type/:id', await routes.specific());
app.get('*', routes.root());

server.listen(port, () => {
  console.log(`http server running on port ${port}`);
});
