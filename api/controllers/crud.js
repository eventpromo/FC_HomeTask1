class CrudController {
  constructor(service) {
    this.service = service;
  }

  async create(request, response) {
    const model = request;
    const id = await this.service.create(model);
    response.status(200).send({
      ...model,
      id,
    });
  }

  async get(request, response) {
    // const filter = { text: { search: request.query } };
    const filter = { };
    const items = await this.service.get(filter);
    response.status(200).send(items);
  }

  async getById(request, response) {
    const item = await this.service.getById(request.id);
    response.status(200).send(item);
  }

  async update(request, response) {
    const model = request;
    const updatedModel = await this.service.update(request.id, model);
    response.status(200).send(updatedModel);
  }

  async delete(request, response) {
    await this.service.delete(request.id);
    response.status(200).send();
  }
}

module.exports = CrudController;
