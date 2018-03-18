module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define('note', {
    title: DataTypes.STRING,
    details: DataTypes.TEXT
  });

  return Note;
};