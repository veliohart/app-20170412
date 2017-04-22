const mongoose  = require('mongoose');

const AlbumsSchema = new mongoose.Schema();

module.exports = mongoose.model('albums', AlbumsSchema);