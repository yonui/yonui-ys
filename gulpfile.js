const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');
const eslint = require('gulp-eslint');
const replace = require('gulp-replace');
const exec = require('child_process').execSync;

const argvs = process.argv.splice(2, process.argv.length)
const sourcemap = argvs.includes('--sourcemap')

// 请不要直接修改 targetPath 的值，避免此文件来回修改。换成修改环境变量 MDF_DEBUG_TARGET，指定到项目路径顶层路径(不包括node_modules)
// const targetPath = process.env.MDF_DEBUG_TARGET || path.join(__dirname, '../../yonyou-mdf/yonyou-mdf-framework/packages/mdf-app')
const targetPath = '/Users/gct/work/git2019/yonyou-mdf/yonyou-mdf-framework/packages/mdf-app'
const targetPackage = path.join(targetPath, 'node_modules/yonui-ys/lib')
const targetLib = path.resolve('.', targetPackage);

// babel 配置文件
const babelConfig = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}

function log (message) {
  console.log('\x1B[32m' + message + '\x1B[39m');
}

/**
 * 编译js 文件，并输出到执行路径
 * @param source 输人路径
 * @param target 输出路径
 */
function compileJs (target = './lib', cb) {
  const task = gulp.src(['./src/**/*.js', '!./src/theme/**/*.js'])
    .pipe(plumber());

  if (sourcemap) {
    task.pipe(sourcemaps.init())
      .pipe(babel(babelConfig))
      // .on('error', () => { process.exit(1) })
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(target))
      .on('end', () => { })

    cb && cb();
    return task
  }

  task.pipe(babel(babelConfig))
    // .on('error', () => { process.exit(1) })
    .pipe(gulp.dest(target));

  cb && cb();
  return task;
}

gulp.task('style', (done) => {
  gulp.src([
    'src/**/*.less',
    'src/**/*.css'
  ])
    .pipe(gulp.dest('./lib'));

  gulp.src([
    'src/theme/**/*.js',
    'src/theme/**/*.jsx'
  ])
    .pipe(gulp.dest('./lib/theme'));

  done();
})

gulp.task('js', (done) => {
  compileJs();
  done();
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

  log('compile success');

  const cssWatch = gulp.watch([
    'src/**/*.less',
    'src/**/*.css'], function (done) {
      done();
    });

  const jsWatch = gulp.watch([
    './src/**/*.js'
  ], function (done) {
    done();
  })

  cssWatch.on('change', function (_path) {
    gulp.src(['src/**/*.less', 'src/**/*.css'], { base: 'src' })
      .pipe(gulp.dest(targetLib));
    log(`style File ${_path} was changed`, '->', targetLib);
  });

  jsWatch.on('change', function (_path) {
    compileJs(targetLib);
    log(`js File ${_path} was changed`, '->', targetLib);
  });

  done();
}));

function OctalDecode (str) {
  const matches = str.match(/(\\\d{3}){3}/g);
  if (matches) matches.forEach(match => {
    let encoded = '';
    const splits = match.split('\\');
    splits.forEach(code => !code || (encoded += '%' + parseInt(code, 8).toString(16)));
    const cChar = decodeURI(encoded);
    str = str.replace(match, cChar);
  });
  return str;
}

let cachedJsList = [];
gulp.task('pre-eslint', (done) => {
  const stdout = exec('git diff --cached --name-only', { encoding: 'utf-8' });
  cachedJsList = stdout.split('\n')
    .map(v => OctalDecode(v.replace(/^"|"$/g, '')))
    .filter(v => v.endsWith('.js') && v !== 'gulpfile.js');
  // console.log('需要eslint的文件:', cachedJsList);
  done();
});

gulp.task('eslint', () => {
  return gulp.src(['src/components/**/**.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError('failes'));
});

// tinper 样式文件去除字体引用
// TODO: 待测试
gulp.task('removeTinperFont', () => {
  return gulp.src([
    'src/static/tinper-bee/2.2.2/*.less'
  ])
    .pipe(replace(/@font-face{.*}/mg, ''))
    .pipe(gulp.dest('src/static/tinper-bee/2.2.2/'));
});
