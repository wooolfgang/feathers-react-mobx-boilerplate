import feathers from 'feathers';
import path from 'path';
import bodyParser from 'body-parser';
import rest from 'feathers-rest';
import hooks from 'feathers-hooks';
import { MongoClient } from 'mongodb';
import socketio from 'feathers-socketio';
import config from 'feathers-configuration';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import services from './services';
import webpackConfig from '../../webpack.config';

const app = feathers();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.configure(config(path.join(process.cwd())));

app.use(feathers.static(path.join(process.cwd(), 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.configure(rest());
app.configure(hooks());
app.configure(socketio({ wsEngine: 'uws' }));

const setupApp = async () => {
  const db = await MongoClient.connect(app.get('mongoURI'));
  console.log('Connected to db');

  app.configure(services(db));

  return app;
};

export default setupApp;
