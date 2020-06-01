function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Badge from 'bee-badge';
import { simpleMerge } from '../../utils';
/**
 * 开发说明：
 *  1. antd 的badge 标签上设置的 style、className 样式信息，暂没有实现转为tinper 的样式
 */

var propTypes = {
  count: PropTypes.number,
  overflowCount: PropTypes.number
};
var defaultProps = {
  overflowCount: 99,
  placement: 'right',
  status: 'error'
};
var ColorsMap = {
  success: 'success',
  error: 'error',
  "default": 'info',
  processing: 'primary',
  warning: 'warning'
};

var BadgeAdapter = /*#__PURE__*/function (_Component) {
  _inherits(BadgeAdapter, _Component);

  var _super = _createSuper(BadgeAdapter);

  function BadgeAdapter() {
    _classCallCheck(this, BadgeAdapter);

    return _super.apply(this, arguments);
  }

  _createClass(BadgeAdapter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          count = _this$props.count,
          showZero = _this$props.showZero,
          style = _this$props.style,
          status = _this$props.status,
          className = _this$props.className,
          overflowCount = _this$props.overflowCount,
          children = _this$props.children,
          others = _objectWithoutProperties(_this$props, ["count", "showZero", "style", "status", "className", "overflowCount", "children"]);

      var $status = ColorsMap[status];
      var dataBadge = count > overflowCount ? "".concat(overflowCount, "+") : count;
      var condition = showZero || count !== 0 && count !== '0';

      var innerClassName = _defineProperty({}, "u-badge-".concat(status), true);

      if (this.props.children) {
        innerClassName = simpleMerge(innerClassName, {
          'left-top': this.props.placement === 'left',
          'right-top': this.props.placement === 'right'
        });
      } // TODO: antd 的 Badge style 属性会传递给子元素，这里暂未做处理


      return condition ? /*#__PURE__*/React.createElement(Badge, _extends({
        dataBadge: dataBadge,
        colors: $status
      }, others, {
        className: classnames(innerClassName, className)
      }), children) : null;
    }
  }]);

  return BadgeAdapter;
}(Component);

BadgeAdapter.propTypes = propTypes;
BadgeAdapter.defaultProps = defaultProps;
export default BadgeAdapter;
//# sourceMappingURL=Badge.js.map
