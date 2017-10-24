// 
//
// moffettcraft.controller('blogController', function($scope, $rootScope) {
//
//   var crypto = require("crypto"),
//   type = "mongodb",
//   client = require('mongodb').MongoClient,
//   mongodb_host = "127.0.0.1",
//   mongodb_port = "27017",
//   collection;
//   module.exports = function() {
//     if(type == "mongodb") {
//       return {
//         add: function(data, callback) { ... },
//         update: function(data, callback) { ... },
//         get: function(callback) { ... },
//         remove: function(id, callback) { ... }
//       }
//     } else {
//       return {
//         add: function(data, callback) { ... },
//         update: function(data, callback) { ... },
//         get: function(callback) { ... },
//         remove: function(id, callback) { ... }
//       }
//     }
//   }
//
//   connection = 'mongodb://';
//   connection += mongodb_host + ':' + mongodb_port;
//   connection += '/blog-application';
//   client.connect(connection, function(err, database) {
//     if(err) {
//       throw new Error("Can't connect");
//     } else {
//       console.log("Connection to MongoDB server successful.");
//       collection = database.collection('articles');
//     }
//   });
//
// });
