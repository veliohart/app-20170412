const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});
const BOWER_FILES = $.mainBowerFiles({
            overrides: {
                bootstrap: {
                    main: [
                        './dist/js/bootstrap.js',
                        './dist/css/*.min.css',
                        './dist/fonts/*.*'
                    ]
                },
                'font-awesome': {
                    main: [
                        './css/*.min.css',
                        './fonts/*.*'
                    ]
                },
                angular: {
                    main: [
                        './angular.min.js'
                    ]
                }
            }
        })

const PATHS =     require('./tasks.constants').PATHS;

// move bower files to destination directory
gulp.task('bower', ['bower:js', 'bower:css', 'bower:fonts']);
// concatenate and minify bower js
gulp.task('bower:js', () =>
  gulp.src(BOWER_FILES)
    .pipe($.filter('**/*.js'))
    // ensure concat order
    .pipe($.print(fp => `bower: ${fp}`))
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest(PATHS.scripts.dest))
    .pipe($.print(fp => `bower: ${fp}`))
    .pipe($.cache($.uglify()))
    .pipe($.rename('vendor.min.js'))
    .pipe(gulp.dest(PATHS.scripts.dest))
    .pipe($.print(fp => `bower: ${fp}`))
);
// move bower css
gulp.task('bower:css', () => {
  gulp.src(BOWER_FILES)
    // .pipe($.changed(PATHS.styles.dest))
    .pipe($.filter('**/*.css'))
    .pipe($.concat('vendor.css'))
    .pipe(gulp.dest(PATHS.styles.dest))
    .pipe($.print(fp => `bower: ${fp}`))
    .pipe($.rename('vendor.min.css'))
    .pipe(gulp.dest(PATHS.styles.dest))
    .pipe($.print(fp => `bower: ${fp}`))
    // console.log("$.mainBowerFiles()", BOWER_FILES);
});

gulp.task('bower:fonts', () => {
  gulp.src(BOWER_FILES)
    // .pipe($.changed(PATHS.styles.dest))
    .pipe($.filter(['**/*.ttf', '**/*.otf', '**/*.eot', '**/*.woff', '**/*.woff2', '**/*.svg']))
    .pipe(gulp.dest(PATHS.fonts.dest))
    .pipe($.print(fp => `bower: ${fp}`))
    // console.log("$.mainBowerFiles()", BOWER_FILES);
});