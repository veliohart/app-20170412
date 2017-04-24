const mongoose  = require('mongoose');

const UsersSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  phone: String,
  website: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode:String,
    geo: {
      lat: String,
      lng: String
    }
  },
  company: {
    name: String,
    catchPhrase: String,
    bs: String
  }
});

module.exports = mongoose.model('usersDummy', UsersSchema);