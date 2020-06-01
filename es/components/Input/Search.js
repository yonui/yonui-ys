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
import classnames from 'classnames';
import FormControl from 'bee-form-control';
import omit from 'omit.js';
var eventList = ['onChange', 'onSearch'];

function filterNotEvent(obj) {
  var result = {};
  Object.keys(obj).map(function (key) {
    if (!eventList.includes(key)) {
      result[key] = obj[key];
    }
  });
  return result;
}

var Search = /*#__PURE__*/function (_Component) {
  _inherits(Search, _Component);

  var _super = _createSuper(Search);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleEvent", function (val, e, propEvent) {
      var fn = _this.props[propEvent];

      if (propEvent === 'onSearch') {
        fn && fn(val);
      } else {
        fn && fn(e);
      }

      if (propEvent === 'onChange') {
        _this.setState({
          value: val
        });
      }
    });

    _this.state = {
      style: props.style,
      className: props.className,
      value: props.value || props.defaultValue,
      placeholder: props.placeholder,
      attrs: filterNotEvent(props)
    };
    return _this;
  }

  _createClass(Search, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var newValue = nextProps.value;
      var oldValue = this.props.value;

      if (newValue !== oldValue) {
        this.setState({
          value: newValue
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          value = _this$state.value,
          className = _this$state.className,
          attrs = _this$state.attrs,
          style = _this$state.style;
      return /*#__PURE__*/React.createElement("span", {
        className: classnames(className, 'u-form-control-search-container'),
        style: style
      }, /*#__PURE__*/React.createElement(FormControl, _extends({}, omit(attrs, ['style', 'placeholder']), {
        value: value,
        placeholder: this.props.placeholder,
        ref: function ref(e) {
          _this2.ref = e;
        },
        onSearch: function onSearch(val, e) {
          _this2.handleEvent(val, e, 'onSearch');
        },
        onChange: function onChange(val, e) {
          _this2.handleEvent(val, e, 'onChange');
        },
        onBlur: function onBlur(val, e) {
          _this2.handleEvent(val, e, 'onBlur');
        },
        onFocus: function onFocus(val, e) {
          _this2.handleEvent(val, e, 'onFocus');
        },
        type: "search"
      })));
    }
  }]);

  return Search;
}(Component);

export default Search;
//# sourceMappingURL=Search.js.map
