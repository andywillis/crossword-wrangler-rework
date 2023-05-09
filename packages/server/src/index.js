import 'dotenv/config';

import { app, port, server } from './service/express';

import routes from './routes/index';

app.get('/crossword/:type/:id', await routes.crossword());
app.get('*', routes.root());

server.listen(port, () => {
  console.log(`http server running on port ${port}`);
});
