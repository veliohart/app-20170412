const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;
const TRANSPILE =      require('./tasks.constants').TRANSPILE;

// create transpile tasks for server scripts
for (const task of TRANSPILE) {
  gulp.task(`transpile:${task}`, [`lint:${task}`], () =>
    gulp.src(PATHS[task].src)
      .pipe($.changed(PATHS[task].dest))
      .pipe($.babel())
      .pipe(gulp.dest(PATHS[task].dest))
      .pipe($.print(fp => `transpiled: ${fp}`))
  );
}
// transpile everything!
gulp.task('transpile', [...TRANSPILE].map(el => `transpile:${el}`));