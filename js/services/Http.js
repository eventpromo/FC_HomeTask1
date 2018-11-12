import config from '../config';

class Http {
    constructor(apiKey) {
        this.key = apiKey;
    }

    parseJSON = response => response.json();

    checkStatus = response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }

        return this.parseJSON(response).then((body) => {
            throw new Error(body.statusText);
        });
    }

    request = (url, options = {}) => {
        let req = new Request(url, options)
        req.headers.append('authorization', `bearer ${this.key}`);
        return fetch(req)
            .then(this.checkStatus)
            .then(this.parseJSON);
    }

    get(url) {
        return this.request(url);
    }

    post(url, data) {
        return this.request(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(data),
        });
    }

    del(url) {
        return this.request(url, { method: 'delete' });
    }

    put(url, data) {
        this.request(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'put',
            body: JSON.stringify(data),
        });
    }
}

export default new Http(config.API_KEY);
