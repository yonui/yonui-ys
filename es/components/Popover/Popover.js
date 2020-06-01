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

// PopoverAdapter
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Popover from 'bee-popover';
import classnames from 'classnames';
import omit from 'omit.js';
var defaultProps = {
  placement: 'bottom',
  trigger: 'click' // fix: 智能录入弹框不显示

};

var PopoverAdapter = /*#__PURE__*/function (_Component) {
  _inherits(PopoverAdapter, _Component);

  var _super = _createSuper(PopoverAdapter);

  function PopoverAdapter(props) {
    var _this;

    _classCallCheck(this, PopoverAdapter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var onVisibleChange = _this.props.onVisibleChange;
      onVisibleChange && onVisibleChange(true);

      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onVisibleChange", function (visible) {
      if (visible) {
        return;
      }

      var onVisibleChange = _this.props.onVisibleChange;
      onVisibleChange && onVisibleChange(visible);

      _this.setState({
        visible: visible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getContainerTarget", function () {
      return typeof _this.props.getPopupContainer === 'function' ? _this.props.getPopupContainer(findDOMNode(_assertThisInitialized(_this))) : _this.props.getPopupContainer;
    });

    _this.state = {
      visible: _this.props.visible || false
    };
    return _this;
  }

  _createClass(PopoverAdapter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.target = this.getContainerTarget();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible !== this.state.visible) {
        this.setState({
          visible: nextProps.visible
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          overlayClassName = _this$props.overlayClassName,
          tinperClassName = _this$props.tinperClassName,
          className = _this$props.className,
          onVisibleChange = _this$props.onVisibleChange,
          placement = _this$props.placement,
          trigger = _this$props.trigger,
          overlayStyle = _this$props.overlayStyle,
          _innerType = _this$props._innerType,
          other = _objectWithoutProperties(_this$props, ["children", "overlayClassName", "tinperClassName", "className", "onVisibleChange", "placement", "trigger", "overlayStyle", "_innerType"]);

      var visible = this.state.visible;
      var cls = classnames(overlayClassName, tinperClassName, 'ant-popover');
      var innerSpanCls = classnames(_innerType, 's-popover-inner-span');

      if (!process.env.__CLIENT__) {
        // 修复服务端渲染 Popover 问题
        return /*#__PURE__*/React.createElement("div", null);
      }

      if (trigger === 'hover') {
        return /*#__PURE__*/React.createElement(Popover, _extends({}, omit(other, ['visible', 'getPopupContainer']), {
          placement: placement,
          className: cls,
          trigger: trigger,
          container: this.target,
          style: overlayStyle
        }), /*#__PURE__*/React.createElement("span", {
          className: innerSpanCls
        }, children));
      }

      return /*#__PURE__*/React.createElement(Popover, _extends({}, omit(other, ['getPopupContainer']), {
        placement: placement,
        show: visible,
        className: cls,
        trigger: trigger,
        container: this.target,
        onVisibleChange: this.onVisibleChange,
        style: overlayStyle
      }), /*#__PURE__*/React.createElement("span", {
        onClick: this.onClick,
        className: innerSpanCls
      }, children));
    }
  }]);

  return PopoverAdapter;
}(Component);

PopoverAdapter.defaultProps = defaultProps;
export default PopoverAdapter;
//# sourceMappingURL=Popover.js.map
