var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');

gulp.$paths = require('./gulp-config.js');

/**
 * Log a message or series of messages using chalk.
 * Can pass in a string, object or array.
 */
function log(msg, color) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        util.log(color(msg[item]));
      }
    }
  }
  else {
    util.log(color(msg));
  }
}

//Decorate gulp with log function
gulp.$log = {
  error: function (msg) {
    log(msg, util.colors.red);
  },
  log: function (msg) {
    log(msg, util.colors.blue);
  },
  success: function (msg) {
    log(msg, util.colors.green);
  }
};

require('require-dir')('./gulp-tasks');

gulp.task('default', ['sass']);
