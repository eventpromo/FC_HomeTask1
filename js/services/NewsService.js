import http from './Http';
import config from '../config';

class NewsService {
  constructor(resource) {
    this.url = `${config.API_URL}${resource}`;
  }
  
  searchUrl = (params = {}) => {
    const sUrl = Object.entries(params).map(item => {
      let [key, value] = item;
      return { key, value };
    }).reduce((accumulator, { key, value }) => {
      return `${accumulator}${key}=${value}`;
    }, `${this.url}?`);
    return sUrl;
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