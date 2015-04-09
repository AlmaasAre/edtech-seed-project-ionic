var gulp = require('gulp');
var paths = gulp.$paths;

var $ = require('gulp-load-plugins')();

/*
 * Add all html to templatecache.js
 * */
gulp.task('templates', function () {
  return gulp.src([
    paths.src.html
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'app.templatecache',
      standalone: true
    }))
    .pipe(gulp.dest(paths.www.root + '/'));
});
