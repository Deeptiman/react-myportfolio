var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Projects = require("./schema");
mongoose.connect("mongodb://127.0.0.1:27017/poccoder_portfolio");

router.get("/", (req, res) => {
    Projects.find({}, function(err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;