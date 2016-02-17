var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    browser = require('gulp-browser'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");
    
gulp.task('buildcss', function() {
  return gulp.src('src/less/site.less')
    .pipe(less({'sourcemap=none': true}))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('public/dist/'));
});

gulp.task('buildjs', function() {
    return gulp.src('src/js/site.js')
    .pipe(browser.browserify())
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public/dist/'));
});

gulp.task('jshint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('monitor', function() {
    gulp.watch('src/less/*.less', ['buildcss']);
    gulp.watch('includes/js/*.js', ['buildjs']);
    gulp.watch('src/js/*.js', ['jshint']);
});

gulp.task('default', ['buildcss', 'buildjs', 'jshint', 'monitor']);