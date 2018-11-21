import Service from './NewsService';

class QueryNewsService extends Service {
  constructor() {
    super('everything');
  }

  async read(query) {
    return await super.read({ q: query });
  }
}

export default new QueryNewsService();
