const gulp = require('gulp');
const paths = require('./paths');
const connect = require('gulp-connect');

gulp.task('html:copy', () => {
  gulp.src([paths.htmlSrc])
    .pipe(gulp.dest(paths.dest))
    .pipe(connect.reload());
});
