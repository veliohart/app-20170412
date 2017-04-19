const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;

// optimize images
gulp.task('images', () =>
  gulp.src(PATHS.images.src)
    .pipe($.changed(PATHS.images.dest))
    .pipe($.imagemin())
    .pipe(gulp.dest(PATHS.images.dest))
    .pipe($.print(fp => `image: ${fp}`))
);
