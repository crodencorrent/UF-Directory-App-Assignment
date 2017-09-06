//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://spork_lift:<PASSWORD>@firstcluster-shard-00-00-oq7lf.mongodb.net:27017,firstcluster-shard-00-01-oq7lf.mongodb.net:27017,firstcluster-shard-00-02-oq7lf.mongodb.net:27017/test?ssl=true&replicaSet=FirstCluster-shard-0&authSource=admin', //place the URI of your mongo database here.
  }
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */