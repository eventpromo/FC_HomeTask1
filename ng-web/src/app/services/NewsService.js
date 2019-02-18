import http from './Http';
import config from '../config';

class NewsService {
  constructor(resource) {
    this.url = `${config.API_URL}${resource}`;
  }

  // searchUrl = (params = {}) => Object.entries(params).map((item) => {
  //   const [key, value] = item;
  //   return { key, value };
  // }).reduce((accumulator, { key, value }) => `${accumulator}${key}=${value}`, `${this.url}?`);

  async create(model) {
    return http.post(this.url, model);
  }

  async get(filter) {
    return http.get(this.searchUrl(filter));
  }

  async getById(filter) {
    return http.get(this.searchUrl(filter));
  }

  async update(id, model) {
    return http.put(`${this.url}/${id}`, model);
  }

  async del(id) {
    return http.del(`${this.url}/${id}`);
  }
}

export default NewsService;
