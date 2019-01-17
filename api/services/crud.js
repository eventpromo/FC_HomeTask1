const { ObjectID } = require('mongodb').ObjectID;
const client = require('../db/mongoClient');
const config = require('../config/config');

class CrudService {
  constructor(collection) {
    this.client = client;
    this.collection = collection;
  }

  static idQuery(id) {
    return { _id: new ObjectID(id) };
  }

  run(operation) {
    const promise = new Promise((resolve, reject) => {
      this.client.connect((connectionError, mongoClient) => {
        if (connectionError) {
          reject(connectionError);
        }
        const db = mongoClient.db(config.mongo_db);
        const collection = db.collection(this.collection);
        operation(collection, (operationError, result) => {
          if (operationError) {
            reject(operationError);
          } else {
            const res = result.ops;
            if (res && res.length) {
              resolve(res[0]);
            } else {
              resolve(result);
            }
          }
          // this.client.close();
        });
      });
    });
    return promise;
  }

  create(model) {
    return this.run((collection, callback) => collection.insertOne(model, callback));
  }

  get(query) {
    return this.run((collection, callback) => collection.find(query).toArray(callback));
  }

  getById(id) {
    const query = CrudService.idQuery(id);
    return this.run((collection, callback) => collection.findOne(query, callback));
  }

  update(id, model) {
    const query = CrudService.idQuery(id);
    return this.run((collection, callback) => collection.update(query, model, callback));
  }

  delete(id) {
    const query = CrudService.idQuery(id);
    return this.run((collection, callback) => collection.remove(query, callback));
  }
}

module.exports = CrudService;
