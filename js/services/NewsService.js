import Service from './Crud';

class NewsService extends Service {
  constructor() {
    super('everything');
  }
}

export default new NewsService();