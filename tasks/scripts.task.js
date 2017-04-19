const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;

// transpile scripts, sourcemaps, minify
gulp.task('scripts', ['lint:scripts'], () =>
  gulp.src(PATHS.scripts.src)
    .pipe($.changed(PATHS.scripts.dest))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.scripts.dest))
    .pipe($.print(fp => `script: ${fp}`))
);