var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const MsgModel = require("../model/db");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = [];
  const msgs = await MsgModel.find().exec();
  msgs.forEach(msg => messages.push(msg));
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = router;
