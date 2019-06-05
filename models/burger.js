const orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
        console.log("select all: " + res);
      });
    },
    create: function(burger_name, cb) {
      orm.insertOne(burger_name, function(res) {
        cb(res);
      });
    },
    update: function(id, cb) {
      orm.updateOne(id, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;

  burger.all(function(data){
      console.log("data" + data);
  })