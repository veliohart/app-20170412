const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');
const vfs =     require('vinyl-fs');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const PATHS =     require('./tasks.constants').PATHS;
const DEST =      require('./tasks.constants').DEST;

// symlink package.json and node_modules to destination
gulp.task('ln', () =>
  vfs.src(['package.json', 'node_modules'], {
    followSymlinks: false
  })
    .pipe(vfs.symlink(DEST))
    .pipe($.print(fp => `symlink: ${fp}`))
);