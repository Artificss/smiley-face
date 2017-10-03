var gulp = require('gulp'),
    sass = require('gulp-sass'),
    _src = './src/',
    _sass = _src+'scss/**/*.scss',
    _output = _src+'css';

gulp.task('default', function () {
    return gulp.src(_sass)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(_output));
});

gulp.task('watch', function () {
    gulp.watch(_sass, ['default']);
});