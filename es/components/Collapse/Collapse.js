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

import React, { Component } from 'react';
import Collapse from 'bee-collapse';

var CollapseAdapter = /*#__PURE__*/function (_Component) {
  _inherits(CollapseAdapter, _Component);

  var _super = _createSuper(CollapseAdapter);

  function CollapseAdapter() {
    _classCallCheck(this, CollapseAdapter);

    return _super.apply(this, arguments);
  }

  _createClass(CollapseAdapter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["className", "children"]);

      var cls = "".concat(className, " collapse");
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, other), children);
    }
  }]);

  return CollapseAdapter;
}(Component);

var PanelAdapter = /*#__PURE__*/function (_Component2) {
  _inherits(PanelAdapter, _Component2);

  var _super2 = _createSuper(PanelAdapter);

  function PanelAdapter(props) {
    var _this;

    _classCallCheck(this, PanelAdapter);

    _this = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "openCollapse", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(PanelAdapter, [{
    key: "render",
    value: function render() {
      var header = this.props.header;
      var icon = this.state.open ? 'uf-arrow-down' : 'uf-arrow-right';
      return /*#__PURE__*/React.createElement("div", {
        className: "collapse-item"
      }, /*#__PURE__*/React.createElement("div", {
        className: "collapse-item-header",
        onClick: this.openCollapse
      }, /*#__PURE__*/React.createElement("i", {
        className: "uf ".concat(icon, " collapse-item-header-icon")
      }), header), /*#__PURE__*/React.createElement(Collapse, {
        className: "collapse-item-content",
        "in": this.state.open
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "collapse-item-content-text"
      }, this.props.children))));
    }
  }]);

  return PanelAdapter;
}(Component);

CollapseAdapter.Panel = PanelAdapter;
export default CollapseAdapter;
//# sourceMappingURL=Collapse.js.map
