const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('css'));
});

gulp.watch('sass/**/*.scss', ['sass']);