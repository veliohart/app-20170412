'use strict';

const path = require('path');
const Router = require('express');

// create router and set routes
const router = Router();
router.get('/', (req, res, next) => res.render('extras', {
  message: 'welcome to extras!',
  base: true
}));
router.get('/:message', (req, res, next) =>
  (!req.params.hasOwnProperty('message'))
    ? res.status(404).end()
    : res.render('extras', {
      message: `welcome to extras!
        you are currently at ${path.join('extras', req.params.message)}`,
      base: false
    })
);

// export router
module.exports = router;
