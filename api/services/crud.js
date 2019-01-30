const mongoose = require('mongoose');
const config = require('../config/config');

class CrudService {
  constructor(entity) {
    this.entity = entity;
  }

  run(operation) {
    mongoose.connect(`${config.mongo_url}${config.mongo_db}`);
    const db = mongoose.connection;
    return operation(this.entity).finally(() => {
      db.disconnect();
    });
  }

  create(model) {
    return this.run(Entity => new Entity(model).save());
  }

  get(query) {
    return this.run(Entity => Entity.find(query).exec());
  }

  getById(id) {
    return this.run(Entity => Entity.findById(id));
  }

  update(id, model) {
    return this.run(Entity => Entity.findByIdAndUpdate(id, model));
  }

  delete(id) {
    return this.run(Entity => Entity.findByIdAndRemove(id));
  }
}

module.exports = CrudService;
