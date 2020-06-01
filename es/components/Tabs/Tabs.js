function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import Tabs from 'bee-tabs';
var tabBarStyleTypeMap = {
  line: 'simple',
  card: 'upborder',
  'editable-card': 'editable-card'
};
var defaultProps = {
  tabBarStyle: 'upborder'
};

var TabsAdapter = /*#__PURE__*/function (_Component) {
  _inherits(TabsAdapter, _Component);

  var _super = _createSuper(TabsAdapter);

  function TabsAdapter() {
    var _this;

    _classCallCheck(this, TabsAdapter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (key) {
      // 疑点：这里的change 事件参数key 有时会是 Proxy 对象，导致页面出错，暂未找到原因，通过下面判断条件临时解决
      if (_typeof(key) !== 'object') {
        _this.props.onChange && _this.props.onChange(key);
      }
    });

    return _this;
  }

  _createClass(TabsAdapter, [{
    key: "render",
    value: function render() {
      // Todo：单独把 change 事件抽取出来，而不直接使用 props，因为onchange 会被其他组件（如radio ）触发
      var _this$props = this.props,
          onChange = _this$props.onChange,
          style = _this$props.style,
          tabPosition = _this$props.tabPosition,
          tabBarExtraContent = _this$props.tabBarExtraContent,
          type = _this$props.type,
          others = _objectWithoutProperties(_this$props, ["onChange", "style", "tabPosition", "tabBarExtraContent", "type"]); //tinper写法全放到other里


      var newProps = _objectSpread({
        extraContent: this.props.tabBarExtraContent,
        tabBarPosition: this.props.tabPosition,
        tabBarStyle: tabBarStyleTypeMap[this.props.type]
      }, others);

      if (this.props.tabBarStyle) {
        if (typeof this.props.tabBarStyle == 'string') {
          //tinper写法
          newProps.style = _objectSpread({}, style);
        } else if (_typeof(this.props.tabBarStyle) == 'object') {
          //antd写法
          newProps.style = _objectSpread(_objectSpread({}, style), this.props.tabBarStyle);
        }
      }

      return /*#__PURE__*/React.createElement(Tabs, _extends({}, newProps, {
        onChange: this.handleChange
      }), this.props.children);
    }
  }]);

  return TabsAdapter;
}(Component);

TabsAdapter.defaultProps = defaultProps;
TabsAdapter.TabPane = Tabs.TabPane;
TabsAdapter.SearchTabs = Tabs.SearchTabs;
export default TabsAdapter;
//# sourceMappingURL=Tabs.js.map
