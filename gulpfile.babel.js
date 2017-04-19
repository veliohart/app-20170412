'use strict';

const path =            require('path');
const gulp =            require('gulp');
const plugins =         require('gulp-load-plugins');
const normalizedPath =  require("path").join(__dirname, "/tasks/");

const $ = plugins({
  pattern: ['gulp-*', 'gulp-inject', 'main-bower-files']
});

//include tasks
require("fs").readdirSync(normalizedPath).forEach(function(file) {
  if (file.indexOf('.task.js') !== -1) {
    require("./tasks/" + file);
  }
});

// show all tasks
gulp.task('tasks', $.taskListing);