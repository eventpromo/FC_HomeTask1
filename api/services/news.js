const CrudService = require('./crud');

class NewsService extends CrudService {
  constructor() {
    super('news');
  }
}

module.exports = NewsService;
