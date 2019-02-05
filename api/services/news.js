const CrudService = require('./crud');
const News = require('../db/news');

class NewsService extends CrudService {
  constructor() {
    super(News);
  }
}

module.exports = NewsService;
