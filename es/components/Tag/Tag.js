function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tag from 'bee-tag';
import CheckableTag from './CheckableTag';
import { simpleMerge } from '../../utils';
var DefaultProps = {
  colors: 'light',
  closable: false
};
var propTypes = {
  color: PropTypes.oneOf(['pink', 'red', 'orange', 'cyan', 'blue', 'purple', 'green'])
};

var TagAdapter = /*#__PURE__*/function (_Component) {
  _inherits(TagAdapter, _Component);

  var _super = _createSuper(TagAdapter);

  function TagAdapter(props) {
    var _this;

    _classCallCheck(this, TagAdapter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (e) {
      e.preventDefault();
      _this.props.onClose && _this.props.onClose(e);

      _this.afterClose();
    });

    var config = {
      closable: _this.props.closable,
      text: _this.props.children
    };

    if (_this.props.color && _this.props.color.charAt(0) === '#') {
      config.style = {
        backgroundColor: _this.props.color,
        color: '#fff'
      };
    } else {
      config.color = _this.props.color;
    } // 不直接用Object.assign 是为了避免 undefined 覆盖默认


    _this.state = simpleMerge(DefaultProps, config);
    return _this;
  }

  _createClass(TagAdapter, [{
    key: "afterClose",
    value: function afterClose(tagName) {
      this.props.afterClose && this.props.afterClose(tagName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style;
      var _this$state = this.state,
          closable = _this$state.closable,
          text = _this$state.text,
          color = _this$state.color;
      var clsObj = {};

      if (color) {
        clsObj["u-tag-color-".concat(color)] = true;
      }

      var classes = classnames(className, clsObj);
      return /*#__PURE__*/React.createElement(Tag, _extends({
        ref: "myTag"
      }, this.props, {
        colors: "light",
        deleted: closable,
        visible: closable,
        onClose: this.handleClose,
        className: classes,
        style: style,
        tagClick: this.props.onClick
      }), text);
    }
  }]);

  return TagAdapter;
}(Component);

TagAdapter.propTypes = propTypes;
TagAdapter.CheckableTag = CheckableTag;
export default TagAdapter;
//# sourceMappingURL=Tag.js.map
