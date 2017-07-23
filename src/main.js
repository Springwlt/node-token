import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import routes from 'routes';
import cors from 'cors';
import config from 'config';
import { db } from 'utils';

db.init();

// error handle
process.on('unhandledRejection', err => {
  throw err;
});

process.on('uncaughtException', err => {
  console.log('uncaughtException:', err);
});

const app = express();

app.use(cors());
app.use(bodyParser.json({
  limit: '50mb'
}));

app.use('/', routes);


const port = config.port;
app.listen(port, () => {
  console.log(`App is listening on ${port}.`);
});

export default app;

