var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
  
    insertOne: function(name, cb) {
      var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE);";
      connection.query(queryString, name, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(err, result);
      });
    
      },
    updateOne: function(id, cb) {
      var queryString = "UPDATE burgers SET devoured = TRUE WHERE id = ?;";
      connection.query(queryString, id, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(err, result);
      });
    
      }
}; 





// orm.insertOne("Double Stack", function cb (){});
// orm.updateOne("1", function cb (){});
orm.selectAll(function (cb){
    console.log("cb" + cb);
});

module.exports = orm;


