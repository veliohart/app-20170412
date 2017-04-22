const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;

// copy views over to destination
gulp.task('views', () =>
  gulp.src(PATHS.views.src)
    .pipe($.changed(PATHS.views.dest))
    .pipe(gulp.dest(PATHS.views.dest))
    .pipe($.livereload())
    .pipe($.print(fp => `view: ${fp}`))
);