module.exports = {
  get(request, response) {
    response.status(200).send('hello world');
  },
};
