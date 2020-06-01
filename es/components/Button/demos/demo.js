function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Button from '../index';
import '../style';
import './demo.less';

var Demo1 = /*#__PURE__*/function (_Component) {
  _inherits(Demo1, _Component);

  var _super = _createSuper(Demo1);

  function Demo1() {
    _classCallCheck(this, Demo1);

    return _super.apply(this, arguments);
  }

  _createClass(Demo1, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "demoPadding"
      }, /*#__PURE__*/React.createElement(Button, {
        colors: "primary"
      }, "primary"), /*#__PURE__*/React.createElement(Button, {
        colors: "success"
      }, "success"), /*#__PURE__*/React.createElement(Button, {
        colors: "info"
      }, "info"), /*#__PURE__*/React.createElement(Button, {
        colors: "warning"
      }, "warning"), /*#__PURE__*/React.createElement(Button, {
        colors: "danger"
      }, "danger"), /*#__PURE__*/React.createElement(Button, {
        colors: "dark"
      }, "dark"), /*#__PURE__*/React.createElement("div", {
        className: "divider"
      }), /*#__PURE__*/React.createElement(Button, {
        shape: "border",
        colors: "primary"
      }, "primary"), /*#__PURE__*/React.createElement(Button, {
        shape: "border",
        colors: "success"
      }, "success"), /*#__PURE__*/React.createElement(Button, {
        shape: "border",
        colors: "info"
      }, "info"), /*#__PURE__*/React.createElement(Button, {
        shape: "border",
        colors: "warning"
      }, "warning"), /*#__PURE__*/React.createElement(Button, {
        shape: "border",
        colors: "danger"
      }, "danger"), /*#__PURE__*/React.createElement(Button, {
        shape: "border",
        colors: "dark"
      }, "dark"), /*#__PURE__*/React.createElement("div", {
        className: "divider"
      }), /*#__PURE__*/React.createElement(Button, {
        colors: "primary",
        disabled: true
      }, "\u72B6\u6001(disabled)"), /*#__PURE__*/React.createElement("div", {
        className: "divider"
      }), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        colors: "primary"
      }, "\u5C0F\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
        colors: "primary"
      }, "\u9ED8\u8BA4"), /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        colors: "primary"
      }, "\u5927\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
        size: "xg",
        colors: "primary"
      }, "\u5DE8\u5927\u6309\u94AE"), /*#__PURE__*/React.createElement("div", {
        className: "divider"
      }), /*#__PURE__*/React.createElement(Button, {
        colors: "primary",
        shape: "icon"
      }, /*#__PURE__*/React.createElement("i", {
        className: "uf uf-search"
      })), /*#__PURE__*/React.createElement(Button, {
        colors: "primary"
      }, /*#__PURE__*/React.createElement("i", {
        className: "uf uf-search"
      }), "Search"), /*#__PURE__*/React.createElement(Button, {
        colors: "secondary",
        shape: "icon"
      }, /*#__PURE__*/React.createElement("i", {
        className: "uf uf-del"
      })), /*#__PURE__*/React.createElement(Button, {
        colors: "secondary"
      }, /*#__PURE__*/React.createElement("i", {
        className: "uf uf-del"
      }), "Delete"), /*#__PURE__*/React.createElement(Button, {
        colors: "info",
        shape: "icon"
      }, /*#__PURE__*/React.createElement("i", {
        className: "uf uf-cloud-up"
      })), /*#__PURE__*/React.createElement(Button, {
        colors: "info"
      }, /*#__PURE__*/React.createElement("i", {
        className: "uf uf-cloud-up"
      }), "Upload"), /*#__PURE__*/React.createElement(Button, {
        shape: "icon",
        bordered: true
      }, /*#__PURE__*/React.createElement("i", {
        className: "uf uf-pencil"
      })), /*#__PURE__*/React.createElement(Button, {
        bordered: true
      }, /*#__PURE__*/React.createElement("i", {
        className: "uf uf-pencil"
      }), "Edit"));
    }
  }]);

  return Demo1;
}(Component);

export { Demo1 as default };
//# sourceMappingURL=demo.js.map
