function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import Form from 'bee-form';

var FormAdapter = /*#__PURE__*/function (_Component) {
  _inherits(FormAdapter, _Component);

  var _super = _createSuper(FormAdapter);

  function FormAdapter() {
    _classCallCheck(this, FormAdapter);

    return _super.apply(this, arguments);
  }

  _createClass(FormAdapter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["children"]);

      return /*#__PURE__*/React.createElement(Form, other, children);
    }
  }]);

  return FormAdapter;
}(Component);

var FormItemAdapter = /*#__PURE__*/function (_Component2) {
  _inherits(FormItemAdapter, _Component2);

  var _super2 = _createSuper(FormItemAdapter);

  function FormItemAdapter() {
    _classCallCheck(this, FormItemAdapter);

    return _super2.apply(this, arguments);
  }

  _createClass(FormItemAdapter, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          label = _this$props2.label,
          labelCol = _this$props2.labelCol,
          wrapperCol = _this$props2.wrapperCol,
          className = _this$props2.className,
          other = _objectWithoutProperties(_this$props2, ["children", "label", "labelCol", "wrapperCol", "className"]);

      var cls = "".concat(className, " u-form-item-row");
      var wrapperCls = wrapperCol ? "u-form-item-content u-form-item-col-".concat(wrapperCol.span) : '';
      return /*#__PURE__*/React.createElement(Form.FormItem, _extends({
        className: cls
      }, other), /*#__PURE__*/React.createElement("div", {
        className: wrapperCls
      }, children));
    }
  }]);

  return FormItemAdapter;
}(Component);

FormAdapter.Item = FormItemAdapter;
FormAdapter.FormItem = FormItemAdapter;
FormAdapter.create = Form.createForm;
FormAdapter.createForm = Form.createForm;
FormAdapter.getFieldDecorator = Form.getFieldDecorator;
FormAdapter.getFieldValue = Form.getFieldValue;
FormAdapter.setFields = Form.setFields;
FormAdapter.validateFields = Form.validateFields;
export default FormAdapter;
//# sourceMappingURL=Form.js.map
