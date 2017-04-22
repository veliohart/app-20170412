const mongoose  = require('mongoose');

const PostsSchema = new mongoose.Schema();

module.exports = mongoose.model('posts', PostsSchema);