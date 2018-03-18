var router = require('express').Router();
var NoteController = require('../controllers/NoteController');

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;