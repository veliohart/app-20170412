const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;

// copy files over to destination
gulp.task('files', () =>
  gulp.src(PATHS.files.src)
    .pipe($.changed(PATHS.files.dest))
    .pipe(gulp.dest(PATHS.files.dest))
    .pipe($.print(fp => `file: ${fp}`))
);