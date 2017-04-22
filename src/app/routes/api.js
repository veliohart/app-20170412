const express             = require('express');
const router              = express.Router();
const PostsController     = require('../controllers').posts;
const UsersController     = require('../controllers').users;
const AlbumsController    = require('../controllers').albums;
const CommentsController  = require('../controllers').comments;

/* posts start */
router.get('/posts', PostsController.getAll);
router.get('/posts/:id', PostsController.getOne);
/* posts end */

/* users start */
router.get('/users', UsersController.getAll);
router.get('/users/:id', UsersController.getOne);
/* users end */

/* albums start */
router.get('/albums', AlbumsController.getAll);
router.get('/albums/:id', AlbumsController.getOne);
/* albums end */

/* comments start */
router.get('/comments', CommentsController.getAll);
router.get('/comments/:id', CommentsController.getOne);
/* comments end */

/* export router */
module.exports = router;