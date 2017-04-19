const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;
const LINT =      require('./tasks.constants').LINT;

// returns a function that lints the files in src
const lintTask = src =>
  () =>
    gulp.src(src)
      .pipe($.eslint())
      .pipe($.eslint.formatEach())
      .pipe($.eslint.failAfterError());
// create lint tasks for client and server scripts
for (const task of LINT) gulp.task(`lint:${task}`, lintTask(PATHS[task].src));
// lint this gulpfile
gulp.task('lint:gulpfile', lintTask('gulpfile.babel.js'));
// lint everything!
gulp.task('lint', [...LINT].map(el => `lint:${el}`).concat('lint:gulpfile'));