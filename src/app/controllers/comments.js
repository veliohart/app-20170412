const Comments            = require('../models/').comments;

module.exports = {
  getOne: getOne,
  getAll: getAll
};

function getAll(req, res) {
  var query = {};
  var qKeys = Object.getOwnPropertyNames(req.query);

  for (var i = 0; qKeys[i]; i ++) {
    query[qKeys[i]] = Number.isNaN(+req.query[qKeys[i]]) ? req.query[qKeys[i]] : (+req.query[qKeys[i]]);
  }

  Comments.find(query)
    .then(function(result) {
      console.log('result', result);
      res.send(result);
    });
};

function getOne(req, res) {
  var query = {};

  req.params.id ? query.id = (+req.params.id) : res.send(query);

  Comments.findOne(query)
    .then(function(result) {
      res.send(result);
    });
}