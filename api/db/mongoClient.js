const { MongoClient } = require('mongodb');
const config = require('../config/config.js');

const url = config.mongo_url;
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

module.exports = mongoClient;
