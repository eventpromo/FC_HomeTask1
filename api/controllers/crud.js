class CrudController {
  constructor(service) {
    this.service = service;
  }

  create(request, response) {
    const model = request;
    this.service.create(model).then((item) => {
      response.status(200).send(item);
    });
  }

  get(request, response) {
    const filter = { $text: { $search: request.query } };
    this.service.get(filter).then((items) => {
      response.status(200).send(items);
    });
  }

  getById(request, response) {
    this.service.getById(request.id).then((item) => {
      response.status(200).send(item);
    });
  }

  update(request, response) {
    const model = request;
    this.service
      .update(request.id, model)
      .then((item) => {
        response.status(200).send(item);
      });
  }

  delete(request, response) {
    this.service.delete(request.id).then(() => {
      response.status(200).send();
    });
  }
}

module.exports = CrudController;
