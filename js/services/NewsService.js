import http from './Http';
import config from '../config';

class NewsService {
  constructor(resource) {
    this.url = `${config.API_URL}${resource}`;
  }
  
  searchUrl = (params = {}) => {
    return Object.entries(params).map(item => {
      let [key, value] = item;
      return { key, value };
    }).reduce((accumulator, { key, value }) => `${accumulator}${key}=${value}`, `${this.url}?`);
  };

  async create(model) {
    return await http.post(this.url, model);
  } 

  async read(filter) {
    return await http.get(this.searchUrl(filter));
  }

  async update(id, model) {
    return await http.put(`${this.url}/${id}`, model);
  }

  async del(id) {
    return await http.del(`${this.url}/${id}`);
  }
}

export default NewsService;