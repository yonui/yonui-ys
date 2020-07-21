/* eslint-disable no-prototype-builtins */
/**
 * 深拷贝
 * @param {*} obj
 */
export function deepClone (obj) {
  const objClone = Array.isArray(obj) ? [] : {};

  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

/**
 * 对象属性合并
 * @param {*} target
 * @param {*} config
 * @param {*} copy
 */
export function simpleMerge (target, config, copy = true) {
  if (Object.prototype.toString.call(config) !== '[object Object]') return target;

  const result = copy ? deepClone(target) : target;
  Object.keys(config).forEach(key => {
    if (config[key]) {
      result[key] = config[key];
    }
  });

  return result;
}

/**
 * 判断是否为数组
 * @param {*} target
 */
export function isArray (target) {
  return Object.prototype.toString.call(target) === '[object Array]';
}

const floatRegex = /^[0-9]+\.?[0-9]+?$/;

/**
 * 判断是否为小数
 * @param {*} number
 */
export function isFloat (number) {
  return floatRegex.test(number);
}

export function findIndex (arr, item) {
  const i = arr.indexOf(item);
  return i === -1 ? '' : i;
}

/**
 * 普通字符串
 * @param
 */
export function isPlainString (target) {
  let data = target;
  try {
    data = JSON.parse(target);
  } catch (e) {
    data = target;
  }
  return Object.prototype.toString.call(data) === '[object String]';
}

/**
 * 数值类型
 * @param
 */
export function isNumericalValue (target) {
  return !isNaN(target);
}

export function isFunction (target) {
  return Object.prototype.toString.call(target) === '[object Function]';
}

function getLanguage() {
  let lang = "zh_CN";
  const globa = window.cb?.lang?.lang || window.cb?.rest.AppContext?.globalization || null;
  if (globa?.locale) {
      return globa.locale;
  }
  if (window && Url.query('locale')) { // url 配置页面语言
      lang = Url.query('locale');
  } else if (getCookie('locale')) {
      lang = getCookie('locale');
  } else if (globa?.locale) {
      lang = globa.locale;
  } else { // 系统浏览器语言
  }
  if (!lang) console.error('Please add the _lang parameter to the browser !');
  return lang;
}

// function getCookie(name) {
//   const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
//   const arr = document && document.cookie.match(reg)
//   if (arr) {
//     return unescape(arr[2]);
//   } else {
//     return null;
//   }
// }

// export function getLocale (key) {
//   let lang = getLanguage();
//   return Locale[lang]?Locale[lang][key]:Locale['zh_CN'][key];
// }
