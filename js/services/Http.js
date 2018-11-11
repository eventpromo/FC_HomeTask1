import config from '../config';

class Http {
  constructor(apiUrl, apiKey) {
    this.url = apiUrl;
    this.key = apiKey;
  }

  resource = (path, query = {}) => {
    const url = new URL(`${this.url}${path}`);
    const params = {
        apiKey: this.key,
        ...query,
    }
    url.search = new URLSearchParams(params);    
    return url;
  };

  parseJSON = response => response.json()

  checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    return parseJSON(response).then((body) => {
        throw new Error(body.error);
    });
  }

  request = (url, options = {}) => fetch(this.resource(url), options.params, options)
    .then(this.checkStatus)
    .then(this.parseJSON);
  
  get = url => this.request(url);

  post = (url, data) => this.request(url, {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(data),
    });

  del = url => this.request(url, { method: 'delete' });

  put = (url, data) => this.request(url, {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      method: 'put',
      body: JSON.stringify(data),
    });
}

export default new Http(config.API_URL, config.API_KEY);
