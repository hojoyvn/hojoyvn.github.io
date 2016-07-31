'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./**/*.scss", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src([
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-contentful/dist/angular-contentful.min.js',
      'bower_components/foundation-sites/dist/foundation.min.js',
      'app/app.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['serve']);