const gulp =        require('gulp');

const CLIENT =       require('./tasks.constants').CLIENT;

// build everything
gulp.task('build', ['build:client', 'build:server']);
// build client-side files
gulp.task('build:client', [...CLIENT].concat('bower'));
// build server-side files
gulp.task('build:server', ['transpile', 'views', 'ln']);