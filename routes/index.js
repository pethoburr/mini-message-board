var express = require('express');
var router = express.Router();

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

const tdaysDate = new Date();
const tdaysModified = modifyDate(tdaysDate);

const messages = [
  {
    text: 'Hi there',
    user: 'bencho',
    added: tdaysModified
  },
  {
    text: 'kidda saleya',
    user: 'kutha',
    added: tdaysModified
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.post('/new', function(req, res) {
  const currentDate = new Date();
  const modifiedDate = modifyDate(currentDate);
  const { name, message } = req.body;
  messages.push({text: message, user: name, added: modifiedDate})
  res.redirect('/');
})

module.exports = router;
