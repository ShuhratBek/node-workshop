const Facade = require('../../lib/facade');
const moviesSchema = require('./schema');

class MoviesFacade extends Facade {
  constructor(Schema) {
    super(Schema);
  }

  find(...args) {
    return this.Schema
      .find(...args)
      .populate('_user')
      .exec();
  }

  findById(...args) {
    return this.Schema
      .findById(...args)
      .populate('_user')
      .exec();
  }
}

module.exports = new MoviesFacade(moviesSchema);
