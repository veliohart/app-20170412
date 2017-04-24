const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;

//process angular js app
gulp.task('ng', ['ng:js', 'ng:views', 'ng:inject']);

gulp.task('ng:inject', [], () =>
  gulp.src('./src/app/views/index.ejs')
    .pipe($.inject(gulp.src(PATHS.ng.dest + 'app.module.js', {read: true}),
      {
        name: 'head',
        transform: function (filepath) {
            return '<script src="' + filepath.replace('/build/static', '') + '"></script>';
          // Use the default transform as fallback:
          // return $.inject.transform.apply($.inject.transform, arguments);
        }
      }))
    .pipe($.inject(gulp.src([
      PATHS.ng.dest + '**/*.js',
      '!' + PATHS.ng.dest + 'app.module.js'],
      {read: true}),
      {
        name: 'body',
        transform: function (filepath) {
          return '<script src="' + filepath.replace('/build/static', '') + '"></script>';
          // Use the default transform as fallback:
          // return $.inject.transform.apply($.inject.transform, arguments);
        }
      }))
    .pipe(gulp.dest('./build/app/views/'))
    .pipe($.livereload({ start: true }))
);

gulp.task('ng:js', ['lint:scripts'], () =>
  gulp.src([PATHS.ng.src + '**/*.js', '!' + PATHS.ng.src + '**/*.spec.js'])
    .pipe($.changed(PATHS.ng.dest))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.ng.dest))
    .pipe($.livereload({ start: true }))
    .pipe($.print(fp => `script: ${fp}`))
);

gulp.task('ng:views', [], () =>
  gulp.src(PATHS.ng.src + '**/*.html')
    .pipe($.changed(PATHS.ng.dest))
    .pipe(gulp.dest(PATHS.ng.dest))
    .pipe($.livereload({ start: true }))
    .pipe($.print(fp => `view: ${fp}`))
);