function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import React, { Component } from 'react';
import { isArray } from '../../utils';

var AnchorLink = /*#__PURE__*/function (_Component) {
  _inherits(AnchorLink, _Component);

  var _super = _createSuper(AnchorLink);

  function AnchorLink(props) {
    var _this;

    _classCallCheck(this, AnchorLink);

    _this = _super.call(this, props);
    _this.state = {
      // 通过hasSub 来控制有层级结构时父元素的边框
      hasSub: true,
      ref: null
    };
    _this.renderChildren = _this.renderChildren.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AnchorLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref) {
        // 根据父元素的左边距，递增计算子元素的左边距
        var _this$ref$querySelect = this.ref.querySelector('a').getBoundingClientRect(),
            left = _this$ref$querySelect.left;

        console.log(left);
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(childrenArr) {
      return /*#__PURE__*/React.createElement("div", {
        id: "u-nav-child-wrapper",
        selector: "#u-nav-child a",
        affix: true
      }, /*#__PURE__*/React.createElement("ul", {
        id: "u-nav-child"
      }, childrenArr.map(function (item, index) {
        return /*#__PURE__*/React.createElement(AnchorLink, _extends({}, item.props, {
          key: index
        }));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          href = _this$props.href,
          title = _this$props.title,
          children = _this$props.children,
          style = _this$props.style,
          others = _objectWithoutProperties(_this$props, ["href", "title", "children", "style"]);

      var hasSub = this.state.hasSub;

      if (!children) {
        return /*#__PURE__*/React.createElement("li", others, /*#__PURE__*/React.createElement("a", {
          href: "".concat(href)
        }, title));
      }

      var childrenArr = isArray(children) ? children : [children];
      return /*#__PURE__*/React.createElement("li", _extends({
        className: hasSub ? 'has-sub' : '',
        ref: function ref(e) {
          _this2.ref = e;
        }
      }, others), /*#__PURE__*/React.createElement("a", {
        href: "".concat(href)
      }, title), this.renderChildren(childrenArr));
    }
  }]);

  return AnchorLink;
}(Component);

export default AnchorLink;
//# sourceMappingURL=AnchorLink.js.map
