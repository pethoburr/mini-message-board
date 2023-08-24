var express = require('express');
var router = express.Router();
const MsgModel = require("../model/db");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new', );
});

module.exports = router;
