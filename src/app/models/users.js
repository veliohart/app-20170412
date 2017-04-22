const mongoose  = require('mongoose');

const UsersSchema = new mongoose.Schema();

module.exports = mongoose.model('usersDummy', UsersSchema);