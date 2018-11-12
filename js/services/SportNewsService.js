import Service from './Crud';

class SportNewsService extends Service {
  constructor() {
    super('everything');
  }
  
  read() {
    return super.read({ q: 'sport' });
  }
}

export default new SportNewsService();