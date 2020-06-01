function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// ModalAdapter
import React, { Component, Fragment } from 'react';
import Modal from 'bee-modal';
import Button from 'bee-button';
import omit from 'omit.js';
var Header = Modal.Header,
    Body = Modal.Body,
    Footer = Modal.Footer,
    Title = Modal.Title,
    Dialog = Modal.Dialog;
var defaultProps = {
  closable: true,
  mask: true,
  maskClosable: true,
  _innerType: '',
  onHide: function onHide() {},
  onCancel: function onCancel() {}
};

var ModalAdapter = /*#__PURE__*/function (_Component) {
  _inherits(ModalAdapter, _Component);

  var _super = _createSuper(ModalAdapter);

  function ModalAdapter(props) {
    var _this;

    _classCallCheck(this, ModalAdapter);

    _this = _super.call(this, props);
    _this.target = _this.getContainerTarget();
    return _this;
  }

  _createClass(ModalAdapter, [{
    key: "getContainerTarget",
    value: function getContainerTarget() {
      var getContainer = this.props.getContainer;
      return typeof getContainer === 'function' ? getContainer() : getContainer;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          visible = _this$props.visible,
          show = _this$props.show,
          title = _this$props.title,
          closable = _this$props.closable,
          onCancel = _this$props.onCancel,
          onOk = _this$props.onOk,
          footer = _this$props.footer,
          afterClose = _this$props.afterClose,
          cancelText = _this$props.cancelText,
          okText = _this$props.okText,
          mask = _this$props.mask,
          maskClosable = _this$props.maskClosable,
          className = _this$props.className,
          wrapClassName = _this$props.wrapClassName,
          _innerType = _this$props._innerType,
          onHide = _this$props.onHide,
          other = _objectWithoutProperties(_this$props, ["children", "visible", "show", "title", "closable", "onCancel", "onOk", "footer", "afterClose", "cancelText", "okText", "mask", "maskClosable", "className", "wrapClassName", "_innerType", "onHide"]);

      if (visible == undefined) visible = show;
      var defaultFooter = /*#__PURE__*/React.createElement(Footer, {
        className: "modal-footer"
      }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Button, {
        onClick: onCancel,
        colors: "secondary",
        className: "s-cancel-button"
      }, cancelText || '取消'), /*#__PURE__*/React.createElement(Button, {
        onClick: onOk,
        colors: "primary",
        className: "s-ok-button"
      }, okText || '确认')));

      if (footer === null || footer === undefined) {
        defaultFooter = null;
      } // const backdropClassName = this.props.backdropClassName || `${className}-backdrop`;


      return /*#__PURE__*/React.createElement(Modal, _extends({}, omit(other, ['getContainer']), {
        className: wrapClassName,
        dialogClassName: className,
        show: visible,
        onHide: onCancel,
        onExited: afterClose,
        container: this.target,
        backdrop: mask,
        enforceFocus: enforceFocus,
        backdropClassName: _innerType,
        backdropClosable: maskClosable
      }), /*#__PURE__*/React.createElement(Header, {
        closeButton: closable,
        className: "modal-header"
      }, /*#__PURE__*/React.createElement(Title, null, title)), /*#__PURE__*/React.createElement(Body, {
        className: "modal-body"
      }, children), footer ? /*#__PURE__*/React.createElement(Footer, {
        className: "modal-footer"
      }, footer) : defaultFooter);
    }
  }]);

  return ModalAdapter;
}(Component);

function modalMethod(methodName) {
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var iconType = params.iconType,
        _params$maskClosable = params.maskClosable,
        maskClosable = _params$maskClosable === void 0 ? false : _params$maskClosable,
        _params$width = params.width,
        width = _params$width === void 0 ? 416 : _params$width,
        backdropStyle = params.backdropStyle,
        _innerType = params._innerType,
        other = _objectWithoutProperties(params, ["iconType", "maskClosable", "width", "backdropStyle", "_innerType"]);

    Modal[methodName](_objectSpread(_objectSpread({}, other), {}, {
      icon: iconType,
      width: width,
      backdrop: true,
      backdropClosable: maskClosable,
      backdropClassName: _innerType,
      backdropStyle: _objectSpread(_objectSpread({}, backdropStyle), {}, {
        zIndex: 1700
      })
    }));
  };
}

ModalAdapter.confirm = modalMethod('confirm');
ModalAdapter.success = modalMethod('success');
ModalAdapter.error = modalMethod('error');
ModalAdapter.warning = modalMethod('warning');
ModalAdapter.info = modalMethod('info');
ModalAdapter.Header = Header;
ModalAdapter.Body = Body;
ModalAdapter.Footer = Footer;
ModalAdapter.Title = Title;
ModalAdapter.Dialog = Dialog;
ModalAdapter.defaultProps = defaultProps;
export default ModalAdapter;
//# sourceMappingURL=Modal.js.map
