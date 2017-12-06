var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'app';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif}','app/style/fonts/*'],
    stripPrefix: rootDir
  }, callback);
});


gulp.task('sass', function () {
  return gulp.src('./app/style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/style'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/style/*.scss', ['sass']);
});
