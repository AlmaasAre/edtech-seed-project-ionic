'use strict';

var gulp = require('gulp');

var paths = gulp.$paths;

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

gulp.task('inject', ['styles', 'scripts', 'templates', 'images:tmp', 'partials'], function () {

  var templateInjectFile = gulp.src(paths.www.templates + '/templateCacheHtml.js', {read: false});
  var templateInjectOptions = {
    starttag: '<!-- inject:partials -->',
    //ignorePath: paths.tmp.serve,
    addRootSlash: false
  };

  var injectStyles = gulp.src([
    paths.www.css,
    '!' + paths.www.root + '/**/vendor.css'
  ], {read: false});

  var injectScripts = gulp.src([
    //Load scripts that others are dependent upon first.
    paths.www.root + '/config/**/*.js',
    paths.www.scripts,
    paths.www.root + '/app/**/*.js',
    paths.www.root + '/app/boot.js',
    '!' + paths.test.spec
    //'!' + paths.test.mock
  ]);

  var injectOptions = {
    ignorePath: [paths.src.root, paths.www.root],
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'www/lib',
    exclude: [/bootstrap\.css/, /foundation\.css/]
  };

  return gulp.src(paths.src.root + '/*.html')
    .pipe($.inject(templateInjectFile, templateInjectOptions))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp.serve));
});
