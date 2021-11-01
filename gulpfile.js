const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browser = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const ghPages = require('gulp-gh-pages');
const cssPath = 'htdocs/assets/styles/css/';
const sassEdit = 'htdocs/assets/styles/sass/';
const jsEdit = 'htdocs/assets/scripts/';
const htmlEdit = 'htdocs/';
const destPath = 'htdocs/assets/dist/';

//sassのコンパイル
gulp.task('sass', function () {
  return (
    gulp
      .src(sassEdit + '**/*.scss')
      // Sassのコンパイルを実行
      // .pipe(sass({outputStyle: "expanded"}))
      .pipe(
        plumber({
          errorHandler: notify.onError('Error: <%= error.message %>'),
        })
      )
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(sourcemaps.write('.'))

      // cssフォルダーに保存
      .pipe(gulp.dest(cssPath))
  );
});

//JSの最新化（パス移動）
gulp.task('js', function () {
  return gulp.src(jsEdit + '*.js');
  // .pipe(gulp.dest(destPath + 'scripts/'));
});

//jsトランスパイル
gulp.task('babel', function () {
  return gulp
    .src(jsEdit + '*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      })
    )
    .pipe(gulp.dest(destPath + 'scripts/'));
});

// gh-pagesデプロイ
gulp.task('deploy', function() {
  return gulp.src(htmlEdit)
    .pipe(ghPages());
});

///serve//////////////////////////////////////////////////
gulp.task('serve', function () {
  browser.init({
    startPath: '/',
    ui: {
      port: 3001,
    },
    server: {
      baseDir: 'htdocs/',
      directory: true,
    },
    port: 3000,
  });
});

gulp.task('bs-reload', function (done) {
  browser.reload();
  done();
});

//watch
gulp.task('watch', function (done) {
  gulp.watch(
    [sassEdit + '*.scss', sassEdit + '**/*.scss'],
    gulp.series('sass', 'bs-reload')
  );

  gulp.watch(
    [jsEdit + '*.js', jsEdit + '**/*.js'],
    gulp.series('js', 'babel', 'bs-reload')
  );
  gulp.watch(
    [htmlEdit + '*.html', htmlEdit + '**/*.html'],
    gulp.series('bs-reload')
  );
  done();
});

exports.default = gulp.series(
  // 'css',
  'js',
  'bs-reload',
  gulp.parallel('watch', 'sass', 'babel', 'serve')
);
