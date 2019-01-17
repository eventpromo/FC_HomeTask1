const NewsService = require('../services/news');
const CrudController = require('./crud');

class NewsController extends CrudController {
  constructor() {
    super(new NewsService(), (request) => {
      const {
        title,
        subTitle,
        description,
        author,
        date,
        image,
      } = request.body;
      return {
        title,
        subTitle,
        description,
        author,
        image,
        date: new Date(date),
      };
    });
  }
}

module.exports = new NewsController();
