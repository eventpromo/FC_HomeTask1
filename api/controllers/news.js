const News = require('../models/news');
const CrudController = require('./crud');

class NewsController extends CrudController {
  constructor() {
    super(News, (request) => {
      const {
        title,
        subTitle,
        description,
        date,
        image,
      } = request.body;
      return {
        title,
        subTitle,
        description,
        author: request.user.id,
        image,
        date: new Date(date),
      };
    });
  }

  async update(request, response) {
    const { id } = request.params;
    const { body } = request;
    const model = {
      title: body.title,
      subTitle: body.subTitle,
      description: body.description,
      image: body.image,
    };
    await this.run(request, response,
      Entity => Entity
        .findByIdAndUpdate(id, model)
        .exec()
        .then(() => Entity.findById(id).exec()));
  }
}

module.exports = new NewsController();
