const gulp =    require('gulp');
const path =    require('path');
const plugins = require('gulp-load-plugins');

const DEST =   require('./tasks.constants.js').DEST;

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

// start express server and reload when server-side files change
gulp.task('serve', ['watch'], () =>
  $.nodemon({
    script: path.join(DEST, 'app.js'),
    watch: path.join(DEST, '**/*.js'),
    ignore: path.join(DEST, 'static')
  })
);