const { src, prependListener } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const imagemin = require("gulp-imagemin");
 
function images(){
  return src('./src/images/*.png')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 7}),
    ]))
    .pipe(gulp.dest('./src/images/'));
}


function styles(){
  return gulp.src('./src/styles/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'))
    .pipe(browserSync.stream());
}


function serve(){
  browserSync.init({
    server: {
        baseDir: "./src"
    }
  })
  gulp.watch("./src/images/*.png", gulp.series(images))
  gulp.watch("./src/styles/**/*.sass",gulp.series(styles));
  gulp.watch("./src/*.html").on('change', browserSync.reload)
  gulp.watch("./src/js/*.js").on('change', browserSync.reload)
}

function test (cb){
  console.log('test')
  cb()
}

exports.serve = serve
exports.default = gulp.series(styles)
exports.images = gulp.series(images)