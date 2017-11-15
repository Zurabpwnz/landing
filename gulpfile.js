'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-csso');
var concat = require('gulp-concat');

var cwd = './src/';
var html = ['*.html', '!_*.html'];
var appScss = "./src/sass/*.scss";
var appCssPath= "./css/";

gulp.task('template', function() {
    return gulp.src(html, {
            cwd: cwd
        })
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(nunjucksRender({path: cwd}))
        .pipe(gulp.dest('./'));//direction for html
});

gulp.task('app-css', function () {
    return gulp.src([appScss])
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(appCssPath));//direction for css file
});

gulp.task('build', ['template', 'app-css']);

gulp.task('default', ['build']);