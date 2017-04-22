const mongoose  = require('mongoose');

const CommentsSchema = new mongoose.Schema();

module.exports = mongoose.model('comments', CommentsSchema);