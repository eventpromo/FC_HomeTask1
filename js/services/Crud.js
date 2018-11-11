import http from './Http';

class Service {
  constructor(url) {
    this.url = url;
  }

  create = model => http.post(this.url, model);

  read = filter => http.get(this.url, filter);

  update = (id, model) => http.put(`${this.url}/${id}`, model);

  del = id => http.del(`${this.url}/${id}`);
}

export default Service;