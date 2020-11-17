// Jall Profesor 2020 - https://github.com/joseantoniolopezlorenzo
var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
var rename = require("gulp-rename");
var htmlmin = require("gulp-html-minifier");
var gulpexec = require("gulp-exec");
var path = require("path");
var browserSync = require("browser-sync").create();

const reload = browserSync.reload;
const github = process.argv[4];

gulp.task("convert-md", function () {
  var options = {
    continueOnError: false,
    pipeStdout: true,
  };

  var reportOptions = {
    err: true,
    stderr: true,
    stdout: false,
  };

  function html(file) {
    var parsePath = path.parse(file);
    const docsPath = parsePath.dir.replace("src", "docs");
    return path.join(docsPath, parsePath.name) + ".html";
  }

  return gulp
    .src("./src/**/*.md")
    .pipe(
      gulpexec(
        (file) =>`pandoc -d slide -M github=${github} -s ${file.path} -o ${html(file.path)}`,
        options
      )
    )
    .pipe(gulpexec.reporter(reportOptions));
});

gulp.task("minify-css", function () {
  return gulp
    .src(["./assets/**/*.css"])
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./docs/assets"));
});

gulp.task("cp-images", function () {
  return gulp
     .src(["./assets/images/*.*", "./assets/images/**/*.png", "./assets/images/**/*.svg"])
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("cp-javascript", function () {
  return gulp
    .src(["./assets/**/*.js"])
    .pipe(gulp.dest("./docs/assets"));
});

gulp.task("minify-html", function () {
  return gulp
    .src("./docs/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest("./docs"));
});

gulp.task(
  "server",
  gulp.series("convert-md","cp-javascript", "minify-css", "cp-images", function () {
    browserSync.init({
      server: "./docs",
    });
    gulp.watch("./src/**/*.md", gulp.series("convert-md"));
    gulp.watch("./templates/*.*", gulp.series("convert-md"));
    gulp.watch("./assets/*.css", gulp.series("minify-css"));
    gulp.watch("./assets/images/**/*.*", gulp.series("cp-images"));
    gulp.watch("./docs/**/*.html").on("change", reload);
    gulp.watch("./docs/assets/*.css").on("change", reload);
  })
);

gulp.task("default", gulp.series("server"));
gulp.task("build", gulp.series("convert-md", "minify-html"));
