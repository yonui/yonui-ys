function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var defaultProps = {
  size: 'small',
  tip: ''
};
var propsType = {
  size: PropTypes.string,
  tip: PropTypes.string
};

var LoadingSimple = /*#__PURE__*/function (_Component) {
  _inherits(LoadingSimple, _Component);

  var _super = _createSuper(LoadingSimple);

  function LoadingSimple() {
    _classCallCheck(this, LoadingSimple);

    return _super.apply(this, arguments);
  }

  _createClass(LoadingSimple, [{
    key: "isNestedPattern",
    value: function isNestedPattern() {
      return !!(this.props && this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          tip = _this$props.tip,
          wrapperClassName = _this$props.wrapperClassName;
      var sizeArr = ['small', 'large'];

      if (!sizeArr.includes(size)) {
        console.error("".concat(size, " is not allowed in component simple-loading"));
      }

      var _class = _defineProperty({}, "s-loading-".concat(size), true);

      var spinElement = /*#__PURE__*/React.createElement("span", {
        className: "s-loading-wrapper"
      }, /*#__PURE__*/React.createElement("span", {
        className: classnames('s-loading', _class)
      }, /*#__PURE__*/React.createElement("span", {
        className: "s-loading-dot"
      }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("span", {
        className: "s-loading-tip"
      }, tip)));

      if (this.isNestedPattern()) {
        return /*#__PURE__*/React.createElement("div", {
          className: classnames('s-nested-loading', wrapperClassName)
        }, spinElement, /*#__PURE__*/React.createElement("div", {
          className: "s-container"
        }, this.props.children));
      }

      return spinElement;
    }
  }]);

  return LoadingSimple;
}(Component);

LoadingSimple.defaultProps = defaultProps;
LoadingSimple.propsType = propsType;
export default LoadingSimple;
//# sourceMappingURL=simple.js.map
