import * as Tinper from './tinper';
import Locale from './lang';
// import _Locale from './lang/Locale';
import MobileLocale from './components/MobileLocale';

// export default {
//     ...Tinper,
//     Locale,
//     MobileLocale
// }


function getLanguage() {
    let lang = "zh_CN";
    const globa = cb?.lang?.lang || cb?.rest.AppContext?.globalization || null;
    if (globa?.locale) {
        return globa.locale;
    }
    if (window && Url.query('locale')) { // url 配置页面语言
        lang = Url.query('locale');
    } else if (this.getCookie('locale')) {
        lang = this.getCookie('locale');
    } else if (globa?.locale) {
        lang = globa.locale;
    } else { // 系统浏览器语言
        lang = this.getG_Language().replace('-', '_');
    }
    if (!lang) console.error('Please add the _lang parameter to the browser !');
    return lang;
}


let component = null;

component = {
    ...Tinper,
    Locale,
    MobileLocale
}
// window && window.YonyouLang = (key)=>{
//     return _Locale[getLanguage()][key];
// }
module.exports = component;