var Note = require('../models').note;

// Note.create({
//   title: 'Some title',
//   details: 'Some details about the note'
// })

module.exports = {
  getAll: function(callback) {
    Note.findAll().then(function(notes) {
      callback(notes);
    });
  }
}