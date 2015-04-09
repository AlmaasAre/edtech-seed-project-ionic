var gulp = require('gulp');
var bower = require('bower');
var sh = require('shelljs');
var util = require('gulp-util');

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    gulp.$log.error(
      '  Git is not installed.' +
      '\n  Git, the version control system, is required to download Ionic.' +
      '\n  Download git here: http://git-scm.com/downloads.' +
      '\n  Once git is installed, run \'' + util.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gulp.$log.success('bower ID: ' + data.id + ' ' + data.message);
    });
});
