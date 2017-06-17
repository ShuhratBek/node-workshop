const Controller = require('../../lib/controller');
const moviesFacade = require('./facade');

class MoviesController extends Controller {}

module.exports = new MoviesController(moviesFacade);
