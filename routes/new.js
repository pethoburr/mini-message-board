var express = require('express');
var router = express.Router();
const MsgModel = require("../model/db");


const modifyDate = (date) => {
  const currentDate = date;
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  
  let amOrPm = 'AM';
  let hours12 = hours;
  if (hours >= 12) {
    amOrPm = 'PM';
    hours12 = hours === 12 ? 12 : hours - 12;
  }
  hours12 = String(hours12).padStart(2, '0');
  const modifiedDate = `${hours12}:${minutes} ${amOrPm} - ${day}/${month}/${year}`;
  return modifiedDate;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new', );
});

router.post('/new', async function(req, res) {
  const currentDate = new Date();
  const modifiedDate = modifyDate(currentDate);
  const { name, message } = req.body;
  console.log(name, message);
  const instance = new MsgModel({
    name: name,
    message: message,
    date: modifiedDate
  })

  await instance.save();
  res.redirect('/');
})

module.exports = router;
