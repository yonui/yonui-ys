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

/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Collapse from '../index';
import Button from '../../Button';
var Panel = Collapse.Panel;
import '../style';
import './demo.less';
import '../../../theme/index.less';
var text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";

var Demo = /*#__PURE__*/function (_Component) {
  _inherits(Demo, _Component);

  var _super = _createSuper(Demo);

  function Demo(props) {
    var _this;

    _classCallCheck(this, Demo);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "callback", function (key) {
      console.log(key);
    });

    _this.state = {
      open: true
    };
    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Collapse, {
        defaultActiveKey: ['1'],
        onChange: this.callback
      }, /*#__PURE__*/React.createElement(Panel, {
        header: "This is panel header 1",
        key: "1"
      }, /*#__PURE__*/React.createElement("p", null, text)), /*#__PURE__*/React.createElement(Panel, {
        header: "This is panel header 2",
        key: "2"
      }, /*#__PURE__*/React.createElement("p", null, text)), /*#__PURE__*/React.createElement(Panel, {
        header: "This is panel header 3",
        key: "3",
        disabled: true
      }, /*#__PURE__*/React.createElement("p", null, text))), /*#__PURE__*/React.createElement(Button, {
        colors: "primary",
        onClick: function onClick() {
          return _this2.setState({
            open: !_this2.state.open
          });
        }
      }, "\u70B9\u6211\u5566"), /*#__PURE__*/React.createElement(Collapse, {
        "in": this.state.open
      }, /*#__PURE__*/React.createElement("div", null, "\u6211\u662F\u6298\u53E0\u533A\u57DF\u7684\u5185\u5BB9\uFF0C\u70B9\u51FB\u6309\u94AE\u6211\u5C31\u663E\u793A\uFF0C\u518D\u6B21\u70B9\u51FB\u5C31\u4F1A\u9690\u85CF\u3002\u5FEB\u6765\u70B9\u51FB\u6309\u94AE\u4F53\u9A8C\u6211\u7684\u4EA4\u4E92\u6548\u679C\u5427\uFF0C\u662F\u4E0D\u662F\u5F88\u68D2\uFF01\u8D76\u5FEB\u4F7F\u7528\u5427~~~")));
    }
  }]);

  return Demo;
}(Component);

export { Demo as default };
//# sourceMappingURL=demo.js.map
