const path = require('path');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require("gulp-babel");
const rimraf = require('rimraf');

const argvs = process.argv.splice(2, process.argv.length)
const sourcemap = argvs.includes('--sourcemap')

// 请不要直接修改 targetPath 的值，避免此文件来回修改。换成修改环境变量 MDF_DEBUG_TARGET，指定到项目路径顶层路径(不包括node_modules)
const targetPath = process.env.MDF_DEBUG_TARGET || path.join(__dirname, '../yonyou-mdf-framework/packages/mdf-app')
const targetPackage = path.join(targetPath, 'node_modules/yonui-ys/lib')
const targetLib = path.resolve('.', targetPackage);

const babelConfig = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
}

gulp.task('style', (done) => {
  gulp.src([
    'src/**/*.less',
    'src/**/*.css',
    'src/**/font.js',
    'src/**/iconfont.js',
    'src/**/index.js',
    'src/**/index.jsx',
    'src/**/filtercontainer.jsx'
  ])
    .pipe(gulp.dest('./lib'))

  done();
})

gulp.task("js", function (done) {
  const task = gulp.src("./src/**/*.js")
    .pipe(plumber());

  if (sourcemap) {
    task.pipe(sourcemaps.init())
      .pipe(babel(babelConfig))
      .on('error', () => { process.exit(1) })
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./lib'))
      .on('end', () => { })

    return task
  }

  task.pipe(babel(babelConfig))
    .on('error', () => { process.exit(1) })
    .pipe(gulp.dest("./lib/"));

  return task;
});

gulp.task('clean', (done) => {
  rimraf('./lib', done);
})

gulp.task('build', gulp.series(['style', 'js'], (done) => {
  done();
}));

gulp.task('debug', gulp.series(['style', 'js'], (done) => {
  gulp.src(['./lib/**'])
    .pipe(gulp.dest(targetLib))

  console.log('compile is finished.')
  done();
}));
