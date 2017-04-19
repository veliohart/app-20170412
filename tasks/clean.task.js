const gulp =      require('gulp');
const plugins =   require('gulp-load-plugins');
const del =     require('del');

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

const ALL =       require('./tasks.constants').ALL;
const PATHS =     require('./tasks.constants').PATHS;
const DEST =      require('./tasks.constants').DEST;

// create clean tasks
for (const task of ALL) {
  gulp.task(`clean:${task}`, () => del([PATHS[task].dest]));
}
// clean everything!
gulp.task('clean', () => del([DEST]));

// clear cache
gulp.task('clear', done => $.cache.clearAll(done));