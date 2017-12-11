var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'src'
      },
    })
})
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
gulp.task('images', function(){
    return gulp.src('src/images/**/*.+(png|jpg|gif|svg|mp4|ico)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/images'))
})
gulp.task('fonts', function() {
    return gulp.src('src/font/**/*')
    .pipe(gulp.dest('dist/font'))
})
gulp.task('clean:dist', function() {
    return del.sync('dist');
})
gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
})
gulp.task('useref', function(){
    return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload); 
    gulp.watch('src/js/**/*.js', browserSync.reload); 
})
gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'],
      callback
    )
})
gulp.task('build', function (callback) {
    runSequence('clean:dist', 'sass', 
      ['useref', 'images', 'fonts'],
      callback
    )
})