
class CrudController {
  constructor(entity, binder = null) {
    this.entity = entity;

    if (!binder) {
      this.bind = request => ({ ...request.body });
    } else {
      this.bind = binder;
    }
  }

  async run(request, response, operation) {
    try {
      const result = await operation(this.entity);
      response.status(200).send(result);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  async create(request, response) {
    const model = this.bind(request);
    await this.run(request, response, Entity => new Entity(model).save());
  }

  async update(request, response) {
    const { id } = request.params;
    const model = this.bind(request);
    await this.run(request, response,
      Entity => Entity
        .findByIdAndUpdate(id, model)
        .exec()
        .then(() => Entity.findById(id).exec()));
  }

  async get(request, response) {
    const query = { };
    await this.run(request, response, Entity => Entity.find(query).exec());
  }

  async getById(request, response) {
    const { id } = request.params;
    await this.run(request, response, Entity => Entity.findById(id).exec());
  }

  async delete(request, response) {
    const { id } = request.params;
    await this.run(request, response, Entity => Entity.findByIdAndRemove(id).exec());
  }
}

module.exports = CrudController;
