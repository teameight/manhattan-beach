var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var ftp = require('vinyl-ftp');

gulp.task('sass', function() {
	return gulp.src('sass/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['sass']);
});