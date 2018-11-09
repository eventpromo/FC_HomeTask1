import config from './config';

class Http {
  constructor(apiUrl, apiKey) {
    this.url = apiUrl;
    this.key = apiKey;
  }

  resource = path => `${this.url}${path}?apiKey=${this.key}`;

  parseJSON = response => response.json()

  checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    return parseJSON(response).then((body) => {
        throw new Error(body.error);
    });
  }

  request = (url, options) => fetch(this.resource(url), options).then(this.checkStatus).then(this.parseJSON);
  
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
