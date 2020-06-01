function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import classnames from 'classnames';
import InputNumber from 'bee-input-number';

var InputNumberAdapter = /*#__PURE__*/function (_Component) {
  _inherits(InputNumberAdapter, _Component);

  var _super = _createSuper(InputNumberAdapter);

  function InputNumberAdapter(props) {
    var _this;

    _classCallCheck(this, InputNumberAdapter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (val, e) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus && _this.props.onFocus(val, e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (val, e) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur && _this.props.onBlur(val, e);
    });

    _this.state = {
      focused: false
    };
    return _this;
  }

  _createClass(InputNumberAdapter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          iconStyle = _this$props.iconStyle,
          formatter = _this$props.formatter,
          className = _this$props.className;
      var cls = classnames(className, {
        'u-input-number-focused': this.state.focused
      });
      return /*#__PURE__*/React.createElement(InputNumber, _extends({}, this.props, {
        className: cls,
        ref: function ref(e) {
          _this2.inputRef = e;
        } // disabled={disabled}
        ,
        iconStyle: iconStyle || 'one',
        format: formatter // precision={precision}
        ,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus
      }));
    }
  }]);

  return InputNumberAdapter;
}(Component);

InputNumberAdapter.InputNumberGroup = InputNumber.InputNumberGroup;
export default InputNumberAdapter;
//# sourceMappingURL=InputNumber.js.map
