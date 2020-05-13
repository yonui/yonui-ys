const glob = require('glob');
const path = require('path');
const chalk = require('chalk');
const fse = require('fs-extra');

const BASEUI_PATH = path.resolve('../../', 'yonyou-mdf-framework/packages/mdf-baseui/src/adapter');
const YONUI_PATH = path.resolve(__dirname, '../', 'src/components');
let num = 0;

glob(`*${path.sep}*.js`, { cwd: BASEUI_PATH }, (err, allpath) => {
    // console.log('allpath => ', allpath);
    allpath.forEach((_path, _index) => {
        if (_path.indexOf('index.js') > -1) {
            num++;
            // 组件入口
            // 复制到yonui并改名
            let _scompname = _path.replace(/\/index.js/g, ``);
            let _soursepath = path.resolve(BASEUI_PATH, _path);
            let _objcomppath = path.resolve(YONUI_PATH, `${_scompname}${path.sep}${_scompname}.js`);
            // console.log('源文件：', chalk.green(_soursepath));
            // console.log('目  标：', chalk.blue(_objcomppath));
            fse.copy(_soursepath, _objcomppath, err => {
                if (err) {
                    console.log(` error ${_scompname}`, err)
                } else {
                    console.log(` success ${_scompname}`)
                }
            })
        } else {
            // 其他附加组件
            let _soursepath = path.resolve(BASEUI_PATH, _path);
            let _objcomppath = path.resolve(YONUI_PATH, _path);
            // console.log('源文件：', chalk.green(_soursepath));
            // console.log('目  标：', chalk.blue(_objcomppath));
            fse.copy(_soursepath, _objcomppath, err => {
                if (err) {
                    console.log(` error ${_path}`, err)
                } else {
                    console.log(` success >> ${_path}`)
                }
            })
        }

    });
    // console.log('YONUI_PATH', YONUI_PATH);
});