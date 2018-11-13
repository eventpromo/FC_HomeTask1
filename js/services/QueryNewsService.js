import Service from './NewsService';

class QueryNewsService extends Service {
  constructor() {
    super('everything');
  }

  read(query) {
    return super.read({ q: query });
  }
}

export default new QueryNewsService();
