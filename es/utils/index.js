function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-prototype-builtins */

/**
 * 深拷贝
 * @param {*} obj
 */
export function deepClone(obj) {
  var objClone = Array.isArray(obj) ? [] : {};

  if (obj && _typeof(obj) === 'object') {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && _typeof(obj[key]) === 'object') {
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

export function simpleMerge(target, config) {
  var copy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (Object.prototype.toString.call(config) !== '[object Object]') return target;
  var result = copy ? deepClone(target) : target;
  Object.keys(config).forEach(function (key) {
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

export function isArray(target) {
  return Object.prototype.toString.call(target) === '[object Array]';
}
var floatRegex = /^[0-9]+\.?[0-9]+?$/;
/**
 * 判断是否为小数
 * @param {*} number
 */

export function isFloat(number) {
  return floatRegex.test(number);
}
export function findIndex(arr, item) {
  var i = arr.indexOf(item);
  return i === -1 ? '' : i;
}
/**
 * 普通字符串
 * @param
 */

export function isPlainString(target) {
  var data = target;

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

export function isNumericalValue(target) {
  return !isNaN(target);
}
export function isFunction(target) {
  return Object.prototype.toString.call(target) === '[object Function]';
}
//# sourceMappingURL=index.js.map
