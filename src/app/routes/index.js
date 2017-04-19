'use strict';
let routes = {};

require("fs").readdirSync(__dirname).forEach(function(file) {
  if (file.indexOf('index.js') === -1) {
    routes[file.replace('.js', '')] = require("./" + file);
  }
});

module.exports = routes;