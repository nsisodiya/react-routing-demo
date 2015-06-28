var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var concat = require('gulp-concat');
var gutil = require('gulp-util');

//var browserSync = require('browser-sync');
var livereload = require('gulp-livereload');


//https://gist.github.com/mlouro/8886076
//https://gist.github.com/mtomcal/e094154865e461c387c4

livereload.listen();

gulp.task('browserify', function() {
	var bundler = browserify({
		entries: ['index.jsx'], // Only need initial file, browserify finds the deps
		transform: [babelify], // We want to convert JSX to normal javascript
		debug: true, // Gives us sourcemapping
		cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
	});
	var watcher  = watchify(bundler);
	return watcher
			.on('update', function () { // When any files update
				var updateStart = Date.now();
				console.log('Updating!');
				watcher.bundle() // Create new bundle that uses the cache for high performance
						.pipe(source('app.js'))
					// This is where you add uglifying etc.
						.pipe(gulp.dest('./dist/'))
						.pipe(livereload());
				console.log('Updated!', (Date.now() - updateStart) + 'ms');
			})
			.bundle() // Create the initial bundle when starting the task
			.pipe(source('app.js'))
			.pipe(gulp.dest('./dist/'))
});

// I added this so that you see how to run two watch tasks
gulp.task('css', function () {
	gulp.watch('styles/**/*.css', function () {
		return gulp.src('styles/**/*.css')
				.pipe(concat('main.css'))
				.pipe(gulp.dest('dist/'));
	});
});


//gulp.task('reload-js', ['browserify'], function(){
//	livereload.changed();
//});
//
//gulp.task('watch', ['browserify'], function() {
//	livereload.listen();
//	gulp.watch('**/*.js', ['reload-js']);
//	gutil.log(gutil.colors.bgGreen('Watching for changes...'));
//});

// Just running the two tasks
gulp.task('build', ['browserify', 'css']);

gulp.task('default', ['browserify']);