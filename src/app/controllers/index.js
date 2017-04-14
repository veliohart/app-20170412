'use strict';
// this controller is meant to set up routes from all other controllers
// it also sets up basic express routes

const viewController = require('./view');

// export controlles
module.exports = {
    view: viewController
};
