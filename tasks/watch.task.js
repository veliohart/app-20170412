const gulp        = require('gulp');
const livereload  = require('gulp-livereload');

const PATHS       = require('./tasks.constants').PATHS;
const TRANSPILE   = require('./tasks.constants').TRANSPILE;
const ALL         = require('./tasks.constants').ALL;

// watch all source files for changes
gulp.task('watch', ['build'], () => {
  livereload.listen();
  for (const task of ALL) {
    // tanspile tasks
    if (TRANSPILE.has(task)) gulp.watch(PATHS[task].src, [`transpile:${task}`]);
    // add some delay for images
    else if (task === 'images') {
      gulp.watch(PATHS.images.src, {
        debounceDelay: 2500
      }, ['images']);
    } else gulp.watch(PATHS[task].src, [task]);
  }

  gulp.watch(PATHS.ng.src + '**/*', ['ng']);
  // also lint this gulpfile on save
  gulp.watch('gulpfile.babel.js', ['lint:gulpfile']);
});