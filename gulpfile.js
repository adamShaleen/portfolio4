var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var babel = require("gulp-babel");

var paths = {
  jsSource: ['./public/**/*.js', '!/public/scripts.js'],
  sassSource: ['./public/**/*.sass', '!./public/style.css']
};

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(concat('scripts.js'))
  .pipe(babel())
  .pipe(annotate())
  //.pipe(uglify()) //Uncomment when code is production ready
  .pipe(gulp.dest('./public'));
});

gulp.task('sass', function () {
  return gulp.src(paths.sassSource)
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);
});

gulp.task('default', ['watch', 'sass', 'js']);
