const mongoose = require('mongoose');
const config = require('../config/config');

class CrudController {
  constructor(entity, binder = null) {
    this.entity = entity;

    if (!binder) {
      this.bind = request => ({ ...request.body });
    } else {
      this.bind = binder;
    }
  }

  async run(operation) {
    mongoose.connect(`${config.mongo_url}${config.mongo_db}`);
    const db = mongoose.connection;
    return operation(this.entity).finally(() => {
      db.disconnect();
    });
  }

  async create(request, response) {
    const model = this.bind(request);
    try {
      const item = this.run(Entity => new Entity(model).save());
      response.status(200).send(item);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const model = this.bind(request);
    try {
      const updatedModel = this.run(Entity => Entity.findByIdAndUpdate(id, model));
      response.status(200).send(updatedModel);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  async get(request, response) {
    // const filter = { text: { search: request.query } };
    const query = { };
    try {
      const items = await this.run(Entity => Entity.find(query).exec());
      response.status(200).send(items);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  async getById(request, response) {
    const { id } = request.params;
    try {
      const item = await this.run(Entity => Entity.findById(id));
      response.status(200).send(item);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  async delete(request, response) {
    const { id } = request.params;
    try {
      await this.run(Entity => Entity.findByIdAndRemove(id));
      response.status(200).send();
    } catch (e) {
      response.status(500).send(e);
    }
  }
}

module.exports = CrudController;
