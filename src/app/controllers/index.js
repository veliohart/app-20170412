'use strict';
let controllers = {};

require("fs").readdirSync(__dirname).forEach(function(file) {
  if (file.indexOf('index.js') === -1) {
    controllers[file.replace('.js', '')] = require("./" + file);
  }
});

// export controlles
module.exports = controllers;
