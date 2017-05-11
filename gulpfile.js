var gulp = require('gulp'),
	server = require('gulp-server-livereload'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');


// server
gulp.task('start', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
	  defaultFile: 'index.html',
      open: true
    }));
});

// compile sass
gulp.task('sass', function () {
  return gulp.src('styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('styles/css'));
});

//watch
gulp.task('watch', function () {
  gulp.watch('styles/sass/**/*.scss', ['sass']);
});

// default
gulp.task('default', ['start', 'watch'])
