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

gulp.task( 'deploy', function() {

	var conn = ftp.create( {
		host: 		'staging.jenniferegan.com',
		user: 		'teameight',
		password: 'g3t2w0rk',
		parallel: 10,
		log: 			gutil.log
	});

	var globs = [
		'*',
		'*.php',
		'inc/**',
		'js/**',
		'layouts/**',
		'sass/**',
		'template-parts/**',
		'!.git',
		'!.txt',
		'!node_modules',
		'!node_modules/**',
	];

	return gulp.src( globs, { base: '.', buffer: false })
		.pipe( conn.newer( '/wp-content/themes/manhattan-beach'))
		.pipe( conn.dest( '/wp-content/themes/manhattan-beach'));
});