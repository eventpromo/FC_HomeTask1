const NewsService = require('../services/news');
const CrudController = require('./crud');

class NewsController extends CrudController {
  constructor() {
    super(new NewsService());
  }
}

module.exports = new NewsController();
