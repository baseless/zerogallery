var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    browser = require('gulp-browser'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    jsx = require('gulp-jsx'),
    babelify = require('gulp-babel'),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    react = require('react'),
    merge2 = require('merge2');
    
gulp.task('build:bundle_css', function() {
  return gulp.src('src/less/site.less')
    .pipe(less({'sourcemap=none': true}))
    .pipe(autoprefixer())
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('public/dist/'));
});

gulp.task('build:bundle_js', function() {
    return merge2(
        gulp.src('src/js/vendors.js'),
        gulp.src('src/jsx/**/*.jsx').pipe(babelify({ presets: ['react'] })).pipe(concat('components.js'))
    )
    .pipe(concat('bundle.js'))
    .pipe(browser.browserify())
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/'));
});

gulp.task('jshint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    gulp.watch('src/less/site.less', ['build:bundle_css']);
    gulp.watch('src/js/*.js', ['build:bundle_js', 'jshint']);
    gulp.watch('src/jsx/*.jsx', ['build:bundle_js']);
});

gulp.task('default', ['build:bundle_css', 'build:bundle_js', 'jshint', 'watch']);