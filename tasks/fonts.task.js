const gulp      = require('gulp');
const plugins   = require('gulp-load-plugins');
const mkdirp    = require('mkdirp');
const fs        = require('fs');
const path      = require('path');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;

// generate webfonts and css from ttf fonts
gulp.task('fonts', done => {
  // eot
  gulp.src(PATHS.fonts.src)
    .pipe($.changed(PATHS.fonts.dest))
    .pipe($.ttf2eot())
    .pipe(gulp.dest(PATHS.fonts.dest))
    .pipe($.print(fp => `font: ${fp}`));
  // woff
  gulp.src(PATHS.fonts.src)
    .pipe($.changed(PATHS.fonts.dest))
    .pipe($.ttf2woff())
    .pipe(gulp.dest(PATHS.fonts.dest))
    .pipe($.print(fp => `font: ${fp}`));
  // woff2
  gulp.src(PATHS.fonts.src)
    .pipe($.changed(PATHS.fonts.dest))
    .pipe($.ttf2woff2())
    .pipe(gulp.dest(PATHS.fonts.dest))
    .pipe($.print(fp => `font: ${fp}`));
  // css
  gulp.src(PATHS.fonts.src)
    .pipe($.changed(PATHS.fonts.dest))
    .pipe($.tap(file => {
      mkdirp(PATHS.fonts.dest, err => {
        if (err) $.util.log(err);
        const fname = path.basename(file.path, '.ttf');
        const fp = path.join(PATHS.fonts.dest, `${fname}.css`);
        const css = `@font-face {
    font-family: "${fname}";
    src: url("${fname}.eot");
    src: url("${fname}.eot?#iefix") format("embedded-opentype"),
         url("${fname}.woff2") format("woff2"),
         url("${fname}.woff") format("woff"),
         url("${fname}.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
}`;
        fs.writeFileSync(fp, css);
      });
    }))
    .pipe(gulp.dest(PATHS.fonts.dest))
    .pipe($.print(fp => `font: ${fp}`));
    done();
});