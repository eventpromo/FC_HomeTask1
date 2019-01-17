class CrudController {
  constructor(service, binder = null) {
    this.service = service;

    if (!binder) {
      this.bind = request => ({ ...request.body });
    } else {
      this.bind = binder;
    }
  }

  async create(request, response) {
    const model = this.bind(request);
    try {
      const item = await this.service.create(model);
      response.status(200).send(item);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const model = this.bind(request);
    try {
      const updatedModel = await this.service.update(id, model);
      response.status(200).send(updatedModel);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  async get(request, response) {
    // const filter = { text: { search: request.query } };
    const filter = { };
    try {
      const items = await this.service.get(filter);
      response.status(200).send(items);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  async getById(request, response) {
    const { id } = request.params;
    try {
      const item = await this.service.getById(id);
      response.status(200).send(item);
    } catch (e) {
      response.status(500).send(e);
    }
  }

  async delete(request, response) {
    const { id } = request.params;
    try {
      await this.service.delete(id);
      response.status(200).send();
    } catch (e) {
      response.status(500).send(e);
    }
  }
}

module.exports = CrudController;
