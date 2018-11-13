import http from './Http';
import config from '../config';

class NewsService {
  constructor(resource) {
    this.url = `${config.API_URL}${resource}`;
  }
  
  searchUrl = (params = {}) => {
    const url = new URL(this.url);
    url.search = new URLSearchParams(params);    
    return url;
  };

  create(model) {
    return http.post(this.url, model);
  } 

  read(filter) {
    return http.get(this.searchUrl(filter));
  }

  update(id, model) {
    return http.put(`${this.url}/${id}`, model);
  }

  del(id) {
    return http.del(`${this.url}/${id}`);
  }
}

export default NewsService;