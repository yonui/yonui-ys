function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import PropTypes from 'prop-types';
import FormControl from 'bee-form-control';
import InputGroup from 'bee-input-group';
import omit from 'omit.js';
import TextArea from './TextArea';
import Search from './Search';
var sizeMap = {
  small: 'sm',
  large: 'lg',
  "default": 'md'
};
var defaultProps = {
  size: 'default',
  type: 'text'
};
var propsType = {
  size: PropTypes.string
};

var InputAdapter = /*#__PURE__*/function (_Component) {
  _inherits(InputAdapter, _Component);

  var _super = _createSuper(InputAdapter);

  function InputAdapter(props) {
    var _this;

    _classCallCheck(this, InputAdapter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      _this.inputRef.input.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "blur", function () {
      _this.inputRef.input.blur();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (val, e) {
      _this.props.onFocus && _this.props.onFocus(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (val, e, clearOpt) {
      _this.props.onBlur && _this.props.onBlur(e, clearOpt);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (val, e) {
      _this.props.onClick && _this.props.onClick(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (val, e) {
      _this.props.onChange && _this.props.onChange(e);

      if (val !== _this.state.value) {
        _this.setState({
          value: val
        });
      }
    });

    _this.state = {
      value: _this.props.value || _this.props.defaultValue || ''
    };
    return _this;
  }

  _createClass(InputAdapter, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          defaultValue = _this$props2.defaultValue,
          disabled = _this$props2.disabled,
          size = _this$props2.size,
          placeholder = _this$props2.placeholder,
          addonBefore = _this$props2.addonBefore,
          addonAfter = _this$props2.addonAfter,
          suffix = _this$props2.suffix,
          type = _this$props2.type,
          others = _objectWithoutProperties(_this$props2, ["defaultValue", "disabled", "size", "placeholder", "addonBefore", "addonAfter", "suffix", "type"]);

      var value = this.state.value; // 根据withAdon 来判断是不是需要用 InputGroup

      var withAddon = addonAfter || addonBefore;
      var componentClass = this.props.componentClass;
      componentClass = componentClass || 'input';

      if (type === 'textarea') {
        componentClass = type;
        type = 'text';
      }

      var formControl = /*#__PURE__*/React.createElement(FormControl, _extends({}, omit(others, ['value', 'defaultValue']), {
        type: type,
        disabled: disabled,
        ref: function ref(e) {
          _this2.inputRef = e;
        },
        placeholder: placeholder,
        value: value,
        defaultValue: defaultValue,
        size: sizeMap[size],
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        onClick: this.handleClick,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        componentClass: componentClass,
        title: type !== 'password' && (value || placeholder)
      }));

      if (suffix || withAddon) {
        // 目前 suffix 主要用于处理参照的 icon
        return /*#__PURE__*/React.createElement(InputGroup, {
          simple: !!suffix,
          className: disabled ? 'disabled' : ''
        }, withAddon && addonBefore && /*#__PURE__*/React.createElement(InputGroup.Addon, null, addonBefore), formControl, suffix && /*#__PURE__*/React.createElement(InputGroup.Button, {
          shape: "border",
          onClick: this.handleClick
        }, suffix), withAddon && addonAfter && /*#__PURE__*/React.createElement(InputGroup.Addon, null, addonAfter));
      }

      return formControl;
    }
  }]);

  return InputAdapter;
}(Component);

InputAdapter.TextArea = TextArea;
InputAdapter.Search = Search;
InputAdapter.defaultProps = defaultProps;
InputAdapter.propsType = propsType;
export default InputAdapter;
//# sourceMappingURL=Input.js.map
