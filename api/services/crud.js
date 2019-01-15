const { ObjectID } = require('mongodb').ObjectID;
const client = require('db/mongoClient');

class Service {
  constructor(collection) {
    this.client = client;
    this.collection = collection;
  }

  static idQuery(id) {
    return { _id: new ObjectID(id) };
  }

  run(operation) {
    const promise = new Promise((resolve, reject) => {
      this.client.connect((connectionError, db) => {
        if (connectionError) {
          reject(connectionError);
        }
        operation(db.collection(this.collection, (operationError, result) => {
          if (operationError) {
            reject(operationError);
          } else {
            resolve(result);
          }
        }));
      });
    });
    return promise;
  }

  create(model) {
    return this.run((collection, callback) => collection.insert(model, callback));
  }

  read(query) {
    return this.run((collection, callback) => collection.find(query, callback));
  }

  update(id, model) {
    const query = Service.idQuery(id);
    return this.run((collection, callback) => collection.update(query, model, callback));
  }

  delete(id) {
    const query = Service.idQuery(id);
    return this.run((collection, callback) => collection.remove(query, callback));
  }
}

module.export = Service;
