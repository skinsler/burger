const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log("hbsObject" + JSON.stringify(hbsObject));
      res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.create(req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/", function(req, res) {
    burger.update(req.body.id, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      });
});

module.exports = router;