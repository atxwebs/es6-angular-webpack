import gulp from 'gulp';
import path from 'path';
import webpack from 'webpack-stream';
let browserSync = require('browser-sync');

let reload = () => browserSync.reload();
let root = 'public';

// helper method for resolving paths
const resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

// map of all paths
const paths = {
  js: resolveToApp('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveToApp('**/*.styl'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root
};

gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

gulp.task('reload', ['webpack'], (done) => {
  reload();
  done();
});

gulp.task('serve', () => {
  browserSync.init({
    port: process.env.PORT || 5000,
    server: { baseDir: root },
    domain: '0.0.0.0',
    open: false
 });
});

gulp.task('watch', ['serve'], () => {
  const allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['reload']);
});

gulp.task('default', ['watch']);
