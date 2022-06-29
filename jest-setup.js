import regenerateRuntime from 'regenerator-runtime';
import models from './server/models/models';

module.exports = () => {
  global.testServer = require('./server')
}
