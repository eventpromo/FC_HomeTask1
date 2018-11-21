import config from '../config';

class Http {
    constructor(apiKey) {
        this.key = apiKey;
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText)
            error.response = response;
            throw error
        }
    }     

    request = async (url, options = {}) => {
        let req = new Request(url, options)
        req.headers.append('authorization', `bearer ${this.key}`);
        let response = await fetch(req);
        this.checkStatus(response);
        let json = await response.json();
        return json;
    }

    async get(url) {
        return await this.request(url);
    }

    async post(url, data) {
        return await this.request(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(data),
        });
    }

    async del(url) {
        return await this.request(url, { method: 'delete' });
    }

    async put(url, data) {
        return await this.request(url, {
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
