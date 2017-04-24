const mongoose  = require('mongoose');

const AlbumsSchema = new mongoose.Schema({
  userId: Number,
  id: Number,
  title: String
});

module.exports = mongoose.model('albums', AlbumsSchema);