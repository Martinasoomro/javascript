const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//Tasks are functions. The name of the function is the task name.
function sassTask() {
  //We call the gulp package
  return (
    gulp
      //The src method reads files from the path
      .src("./src/scss/main.scss")
      //It takes the main.scss file and processit to css
      .pipe(sass())
      //Gulp takes the processed file and puts it in a folder
      .pipe(gulp.dest("./css"))
  );
}

function watchTask(done) {
  //The watch method accepts two arguments
  //1) path to the file(-s) that you want to watch
  //2) a task or tasks that will be executed
  //when these files are changed
  gulp.watch("./src/scss/*.scss", gulp.series(sassTask, reload));
  gulp.watch("./index.html, reload");
  done();
}

//It creates a local server using the browser-sync package
function localServer(done) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  done();
}

//This task will reload the local server
function reload(done) {
  browserSync.reload();
  done();
}

//To use a task using gulp we need to export it
exports.sass = sassTask;
//Exported the watch task as a default task
//It means that we can run gulp without any parameters
//exports.default = watchTask;

//When running the deafult  task, we want to:
//1) run a local server
//2) we want to watch files
exports.default = gulp.series(localServer, watchTask);
