'use strict';

let models = {};

require("fs").readdirSync(__dirname).forEach(function(file) {
  if (file.indexOf('index.js') === -1) {
    models[file.replace('.js', '')] = require("./" + file);
  }
});

module.exports = models;