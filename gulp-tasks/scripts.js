'use strict';

var gulp = require('gulp');
var paths = gulp.$paths;
var $ = require('gulp-load-plugins')();

gulp.task('scripts', /*['ref-ts'],*/ function () {

  return gulp.src(paths.src.scripts)
    .pipe($.typescript({removeComments: false}))
    .on('error', gulp.$handleError)
    .pipe(gulp.dest(paths.www.root + '/'))
    .pipe($.size());
});
