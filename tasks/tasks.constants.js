const path = require('path');

const SRC = 'src';
const DEST = 'build';
const PATHS = {
    // client
    styles: {
      src: path.join(SRC, 'styles/**/*.scss'),
      dest: path.join(DEST, 'static/css')
    },
    images: {
      src: path.join(SRC, 'images/**/*'),
      dest: path.join(DEST, 'static/img')
    },
    scripts: {
      src: path.join(SRC, 'scripts/**/*.js'),
      dest: path.join(DEST, 'static/js')
    },
    files: {
      src: path.join(SRC, 'files/**/*'),
      dest: path.join(DEST, 'static/files')
    },
    fonts: {
      src: path.join(SRC, 'fonts/**/*.ttf'),
      dest: path.join(DEST, 'static/fonts')
    },
    ng: {
      src: path.join(SRC, 'angular_app/'),
      dest: path.join(DEST, 'static/angular_app/')
    },
    // server
    app: {
      src: path.join(SRC, 'app.js'),
      dest: DEST
    },
    config: {
      src: path.join(SRC, 'config.js'),
      dest: DEST
    },
    models: {
      src: path.join(SRC, 'app/models/**/*.js'),
      dest: path.join(DEST, 'app/models')
    },
    views: {
      src: path.join(SRC, 'app/views/**/*.ejs'),
      dest: path.join(DEST, 'app/views')
    },
    controllers: {
      src: path.join(SRC, 'app/controllers/**/*.js'),
      dest: path.join(DEST, 'app/controllers')
    },
    routes: {
        src: path.join(SRC, 'app/routes/**/*.js'),
        dest: path.join(DEST, 'app/routes')
    },
    helpers: {
      src: path.join(SRC, 'app/helpers/**/*.js'),
      dest: path.join(DEST, 'app/helpers')
    },
    services: {
      src: path.join(SRC, 'app/services/**/*.js'),
      dest: path.join(DEST, 'app/services')
    }
  };
// commonly used sets pertaining to tasks
// set of all keys of PATHS
const ALL = new Set(Object.keys(PATHS));
// client-related set
const CLIENT = new Set(['styles', 'images', 'scripts', 'files', 'fonts', 'ng']);
// server-related set, i.e. ALL - CLIENT
const SERVER = new Set([...ALL].filter(el => !CLIENT.has(el)));
// set of things that need to be transpiled, i.e. SERVER - {'views'}
const TRANSPILE = new Set([...SERVER].filter(el => el !== 'views'));
// set of things that need to be linted, i.e. TRANSPILE ∪ {'scripts'}
const LINT = new Set([...TRANSPILE, 'scripts']);

module.exports = {
  SRC: SRC,
  DEST: DEST,
  PATHS: PATHS,
  ALL: ALL,
  CLIENT: CLIENT,
  SERVER: SERVER,
  TRANSPILE: TRANSPILE,
  LINT: LINT
}