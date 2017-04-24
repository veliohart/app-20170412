const mongoose  = require('mongoose');

const PostsSchema = new mongoose.Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String
});

module.exports = mongoose.model('posts', PostsSchema);