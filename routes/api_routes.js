var router = require('express').Router();
var NoteController = require('../controllers/NoteController');

// localhost:5000/api
// localhost:5000/api/notes
router.get('/notes', function (req, res) {
  NoteController.getAll(function (notes) {
    console.log(notes);
    res.send(notes);
  });
});

module.exports = router;