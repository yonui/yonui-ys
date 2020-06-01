function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import Radio from 'bee-radio';
import classnames from 'classnames';
var antd2tinper = {
  small: 'sm',
  "default": 'sm',
  large: 'lg'
};

var RadioAdapter = /*#__PURE__*/function (_Component) {
  _inherits(RadioAdapter, _Component);

  var _super = _createSuper(RadioAdapter);

  function RadioAdapter() {
    var _this;

    _classCallCheck(this, RadioAdapter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChangeChecked", function () {
      var _this$props = _this.props,
          checked = _this$props.checked,
          onChange = _this$props.onChange;
      onChange && onChange(!checked);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (val) {
      var onChange = _this.props.onChange;
      onChange && onChange(val);
    });

    return _this;
  }

  _createClass(RadioAdapter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          checked = _this$props2.checked,
          onChange = _this$props2.onChange,
          style = _this$props2.style,
          className = _this$props2.className,
          other = _objectWithoutProperties(_this$props2, ["children", "checked", "onChange", "style", "className"]);

      var cls = classnames(className, 'custom-radio-wrapper');

      if (children) {
        return /*#__PURE__*/React.createElement(Radio, _extends({
          checked: checked,
          onChange: function onChange(val) {
            _this2.onChange(val);
          },
          className: className
        }, other), children);
      }

      var checkedRadio = /*#__PURE__*/React.createElement("span", {
        className: "custom-radio custom-radio-checked"
      }, /*#__PURE__*/React.createElement("span", {
        className: "radio-red-circle"
      }));
      var uncheckedRadio = /*#__PURE__*/React.createElement("span", {
        className: "custom-radio custom-radio-unchecked"
      });
      return /*#__PURE__*/React.createElement("span", _extends({
        onClick: this.onChangeChecked
      }, other, {
        style: _objectSpread(_objectSpread({}, style), {}, {
          display: 'inline-block'
        }),
        className: cls
      }), checked ? checkedRadio : uncheckedRadio);
    }
  }]);

  return RadioAdapter;
}(Component);

var RadioGroup = /*#__PURE__*/function (_Component2) {
  _inherits(RadioGroup, _Component2);

  var _super2 = _createSuper(RadioGroup);

  function RadioGroup() {
    var _this3;

    _classCallCheck(this, RadioGroup);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "onChange", function (value) {
      var res = {
        target: {
          value: value
        }
      };

      _this3.props.onChange(value, res);
    });

    return _this3;
  }

  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          children = _this$props3.children,
          onChange = _this$props3.onChange,
          size = _this$props3.size,
          other = _objectWithoutProperties(_this$props3, ["value", "children", "onChange", "size"]);

      if (children.length === 0) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Radio.RadioGroup, _extends({}, other, {
        size: antd2tinper[size],
        onChange: this.onChange,
        selectedValue: value,
        onBlur: function onBlur() {}
      }), children);
    }
  }]);

  return RadioGroup;
}(Component);

RadioAdapter.Group = RadioGroup;
RadioAdapter.RadioGroup = RadioGroup;
RadioAdapter.RadioButton = Radio.RadioButton;
RadioAdapter.Button = Radio.RadioButton;
export default RadioAdapter;
//# sourceMappingURL=Radio.js.map
