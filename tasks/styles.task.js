const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;

// compile sass, sourcemaps, autoprefix, minify
gulp.task('styles', () =>
  gulp.src(PATHS.styles.src)
    .pipe($.changed(PATHS.styles.dest, {
      extension: '.css'
    }))
    .pipe($.plumber({
      errorHandler: function(err) {
        $.util.log(err);
        this.emit('end');
      }
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.cssnano())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.styles.dest))
    .pipe($.print(fp => `style: ${fp}`))
);