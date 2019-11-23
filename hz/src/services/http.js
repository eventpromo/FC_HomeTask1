class Http {
    checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }

    get(url) {
        return fetch(url).then(this.checkStatus).then((response) => response.json());
    }

    post(url, model) {        
        const req = new Request(url, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(model),
          });
        return fetch(req).then(this.checkStatus).then((response) => response.json());        
    }
}

export default new Http();

