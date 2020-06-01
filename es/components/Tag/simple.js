function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

import React from 'react';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import classNames from 'classnames';
import omit from 'omit.js';
import Icon from 'bee-icon';
import CheckableTag from './simpleCheckableTag';

var Tag = /*#__PURE__*/function (_React$Component) {
  _inherits(Tag, _React$Component);

  var _super = _createSuper(Tag);

  function Tag(props) {
    var _this;

    _classCallCheck(this, Tag);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "close", function (e) {
      var onClose = _this.props.onClose;

      if (onClose) {
        onClose(e);
      }

      if (e.defaultPrevented) {
        return;
      }

      var dom = ReactDOM.findDOMNode(_assertThisInitialized(_this));
      dom.style.width = "".concat(dom.getBoundingClientRect().width, "px"); // It's Magic Code, don't know why

      dom.style.width = "".concat(dom.getBoundingClientRect().width, "px");

      _this.setState({
        closing: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "animationEnd", function (_, existed) {
      if (!existed && !_this.state.closed) {
        _this.setState({
          closed: true,
          closing: false
        });

        var afterClose = _this.props.afterClose;

        if (afterClose) {
          afterClose();
        }
      }
    });

    _this.state = {
      closing: false,
      closed: false
    };
    return _this;
  }

  _createClass(Tag, [{
    key: "isPresetColor",
    value: function isPresetColor(color) {
      if (!color) {
        return false;
      }

      return /^(pink|red|yellow|orange|cyan|green|blue|purple)(-inverse)?$/.test(color);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          closable = _this$props.closable,
          color = _this$props.color,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          otherProps = _objectWithoutProperties(_this$props, ["prefixCls", "closable", "color", "className", "children", "style"]);

      var closeIcon = closable ? /*#__PURE__*/React.createElement(Icon, {
        type: "uf-close",
        onClick: this.close
      }) : '';
      var isPresetColor = this.isPresetColor(color);
      var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(color), isPresetColor), _defineProperty(_classNames, "".concat(prefixCls, "-has-color"), color && !isPresetColor), _defineProperty(_classNames, "".concat(prefixCls, "-close"), this.state.closing), _classNames), className); // fix https://fb.me/react-unknown-prop

      var divProps = omit(otherProps, ['onClose', 'afterClose']);

      var tagStyle = _objectSpread({
        backgroundColor: color && !isPresetColor ? color : null
      }, style);

      var tag = this.state.closed ? null : /*#__PURE__*/React.createElement("div", _extends({
        "data-show": !this.state.closing
      }, divProps, {
        className: classString,
        style: tagStyle
      }), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-text")
      }, children), closeIcon);
      return /*#__PURE__*/React.createElement(Animate, {
        component: "",
        showProp: "data-show",
        transitionName: "".concat(prefixCls, "-zoom"),
        transitionAppear: true,
        onEnd: this.animationEnd
      }, tag);
    }
  }]);

  return Tag;
}(React.Component);

_defineProperty(Tag, "CheckableTag", CheckableTag);

_defineProperty(Tag, "defaultProps", {
  prefixCls: 'u-tag',
  closable: false
});

export { Tag as default };
//# sourceMappingURL=simple.js.map
