'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-csso');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify-es').default;
var gutil = require('gulp-util');

var jsFiles = [
    'js/jquery-3.2.1.min.js',
    'js/jquery.flipster.js',
    'js/bootstrap3.3.7.min.js',
    'js/jquery.svg3dtagcloud.min.js',
    'js/jquery.countdown.min.js',
    'js/lazyload.min.js',
    'js/slick.min.js',
    'js/Chart.min.js',
    'js/script-cloud.js',
    'js/script.js'
    ],
    jsDest = 'dist';

var cwd_en = './src/en/';
var cwd_ru = './src/ru/';
var cwd_kr = './src/kr/';

var html = ['*.html', '!_*.html'];
var appScss = "./src/sass/*.scss";
var appCssPath= "./css/";

gulp.task('template-en', function() {
    return gulp.src(html, {
        cwd: cwd_en
    })
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(nunjucksRender({path: cwd_en}))
        .pipe(gulp.dest('./'));//direction for html
});
gulp.task('template-ru', function() {
    return gulp.src(html, {
        cwd: cwd_ru
    })
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(nunjucksRender({path: cwd_ru})).pipe(rename('index.html'))
        .pipe(gulp.dest('./ru'));//direction for html
});

gulp.task('template-kr', function() {
  return gulp.src(html, {
    cwd: cwd_kr
  })
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(nunjucksRender({path: cwd_kr})).pipe(rename('index.html'))
    .pipe(gulp.dest('./kr'));//direction for html
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

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(jsDest));
});

gulp.task('build', ['template-en','template-ru','template-kr',  'app-css','scripts']);

gulp.task('default', ['build']);