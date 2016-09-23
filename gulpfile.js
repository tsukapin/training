var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var styleguide = require('sc5-styleguide');

var outputPath = 'assets/styleguide/output';//styleguideの書き出し先

//gulp-sass ===============================
//参考： http://shinespark.hatenablog.com/entry/2015/12/11/080000
// Sassコンパイルタスク
gulp.task('sass', function(){
  gulp.src('assets/scss/**/*.scss')
    .pipe(plumber()) //gulp-plumber用の記述
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(gulp.dest('assets/css/'));
});

// watchタスク(**/*.scss変更時に実行するタスク)
gulp.task('sass-watch', ['sass'], function(){
  var watcher = gulp.watch('assets/scss/**/*.scss', ['sass']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

//sc5-styleguide ===============================
//参考：http://qiita.com/tatsuyankmura/items/e1ed4c67fec602e6b33d
gulp.task('styleguide:generate', function() {
  return gulp.src(['assets/scss/*.scss', 'assets/scss/partials/*.scss'])//グロブパターン使えないので配列で一つずつ渡す
  .pipe(styleguide.generate({
    port: 4000,//デフォルトは3000. http://localhost:4000/
    title: 'styleguide',
    server: true,
    rootPath: outputPath,
    overviewPath: 'assets/styleguide/overview.md',
    sideNav: true//trueでタブがサイドメニューに変わる。
  }))
  .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src(['assets/scss/*.scss', 'assets/scss/partials/*.scss'])//グロブパターン使えないので配列で一つずつ渡す
  .pipe(sass({
    errLogToConsole: true
  }))
  .pipe(styleguide.applyStyles())
  .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

// 監視用のタスク ===============================
gulp.task('watch', ['styleguide'], function() {
  gulp.watch(['assets/scss/**/*.scss'], ['styleguide']);
});

// gulpのデフォルト動作 ===============================
gulp.task('default', ['sass-watch', 'watch', 'styleguide:generate', 'styleguide:applystyles']);
//コマンドラインで"gulp"を実行する
