const Users            = require('../models/').users;

function getAll(req, res) {
  var query = {};
  var qKeys = Object.getOwnPropertyNames(req.query);

  for (var i = 0; qKeys[i]; i ++) {
    query[qKeys[i]] = Number.isNaN(+req.query[qKeys[i]]) ? req.query[qKeys[i]] : (+req.query[qKeys[i]]);
  }

  Users.find(query)
    .then(function(result) {
      console.log('result', result);
      res.send(result);
    });
};

function getOne(req, res) {
  var query = {};

  req.params.id ? query.id = (+req.params.id) : res.send(query);

  Users.findOne(query)
    .then(function(result) {
      res.send(result);
    });
}

module.exports = {
  getOne: getOne,
  getAll: getAll
};