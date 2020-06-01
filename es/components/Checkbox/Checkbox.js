function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import Checkbox from 'bee-checkbox';
import { KeyCode } from 'tinper-bee-core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import omit from 'omit.js';
import { isNumericalValue, isPlainString } from '../../utils';

var CheckboxAdapter = /*#__PURE__*/function (_Component) {
  _inherits(CheckboxAdapter, _Component);

  var _super = _createSuper(CheckboxAdapter);

  function CheckboxAdapter(props) {
    var _this;

    _classCallCheck(this, CheckboxAdapter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isGroup", function () {
      return _this.props.checked === undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "contextChecked", function () {
      var _this$context$checkbo = _this.context.checkboxGroup,
          checkboxGroup = _this$context$checkbo === void 0 ? {} : _this$context$checkbo;
      var initialValueList = checkboxGroup.valueList;
      return initialValueList && initialValueList.includes(_this.props.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (checked) {
      var target = Object.assign({}, omit(_this.props, ['checked', 'onChange']), {
        checked: checked
      });
      var onChange = _this.props.onChange;
      onChange && onChange({
        target: target
      });
      var checkboxGroup = _this.context.checkboxGroup;

      if (checkboxGroup && checkboxGroup.onChange) {
        var value = target.value;
        checkboxGroup.onChange(value, checked);

        _this.setState({
          checked: checked
        });
      }
    });

    var _checked = _this.isGroup() ? false : !!props.checked;

    _this.state = {
      checked: _checked
    };
    return _this;
  }

  _createClass(CheckboxAdapter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isGroup()) this.setState({
        checked: this.contextChecked()
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.checked !== undefined) {
        this.setState({
          checked: !!nextProps.checked
        });
      }
    } // 外部使用了 checkbox.group

  }, {
    key: "render",
    value: function render() {
      var checked = this.isGroup() ? this.contextChecked() : this.state.checked;
      return /*#__PURE__*/React.createElement(Checkbox, _extends({
        checked: checked
      }, omit(this.props, ['checked']), {
        inverse: process.env.__THEMETYPE__ === 'ncc',
        onChange: this.onChange
      }));
    }
  }]);

  return CheckboxAdapter;
}(Component);

var GroupAdapter = /*#__PURE__*/function (_Component2) {
  _inherits(GroupAdapter, _Component2);

  var _super2 = _createSuper(GroupAdapter);

  function GroupAdapter(props) {
    var _this2;

    _classCallCheck(this, GroupAdapter);

    _this2 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this2), "handleChange", function (value) {
      var checked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var newValueList = _this2.state.valueList.slice();

      if (checked) {
        newValueList.push(value);
      } else {
        if (newValueList.includes(value)) {
          newValueList.splice(newValueList.indexOf(value), 1);
        }
      }

      _this2.setState({
        valueList: newValueList,
        focusKey: value
      });

      var onChange = _this2.props.onChange;

      if (onChange) {
        var options = _this2.getOptions();

        var arr = newValueList.filter(function (val) {
          return newValueList.indexOf(val) !== -1;
        }).sort(function (a, b) {
          var indexA = options.findIndex(function (opt) {
            return opt.value === a;
          });
          var indexB = options.findIndex(function (opt) {
            return opt.value === b;
          });
          return indexA - indexB;
        });
        onChange(arr);
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "handleFocus", function (e) {
      var activeDom = cb.dom(e.target);

      var _assertThisInitialize = _assertThisInitialized(_this2),
          optionKeys = _assertThisInitialize.optionKeys;

      if (!optionKeys.length) return;

      if (activeDom.hasClass('s-checkgroup-wrapper')) {
        _this2.setState({
          focusKey: optionKeys[0]
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "handleKeyDown", function (e) {
      var activeDom = cb.dom(e.target);

      if (e.target.className.indexOf('s-checkgroup-wrapper') > 0 || activeDom.parents('.s-checkgroup-wrapper').length > 0) {
        var focusKey = _this2.state.focusKey;

        var _assertThisInitialize2 = _assertThisInitialized(_this2),
            optionKeys = _assertThisInitialize2.optionKeys;

        var focusIndex = optionKeys.indexOf(focusKey);
        var optionCount = optionKeys.length;
        var st = {};

        if (focusIndex > -1 && focusIndex < optionCount) {
          var newIndex;

          switch (e.keyCode) {
            case KeyCode.LEFT:
              newIndex = focusIndex - 1 < 0 ? optionCount - 1 : focusIndex - 1;
              st.focusKey = optionKeys[newIndex];
              break;

            case KeyCode.RIGHT:
              newIndex = focusIndex + 1 < optionCount ? focusIndex + 1 : 0;
              st.focusKey = optionKeys[newIndex];
              break;

            default:
              break;
          }
        }

        _this2.setState(st);
      }
    });

    _this2.state = {
      valueList: props.value instanceof Array ? props.value : [],
      focusKey: ''
    };
    _this2.optionKeys = [];
    return _this2;
  }

  _createClass(GroupAdapter, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        checkboxGroup: {
          onChange: this.handleChange,
          valueList: this.state.valueList,
          focusKey: this.state.focusKey
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.checkgroup) this.checkgroup.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var newValueList = nextProps.value instanceof Array ? nextProps.value : [];
      this.setState({
        valueList: newValueList
      });
      if (!(nextProps.value instanceof Array)) console.error('Error: value should be an array.');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var focusKey = this.state.focusKey;
      if (!isNumericalValue(focusKey) && !isPlainString(focusKey)) return;

      if (focusKey && focusKey !== prevState.focusKey) {
        var focusEle = this.checkgroup ? this.checkgroup.querySelector("input[value=\"".concat(focusKey, "\"]")) : null;
        focusEle && focusEle.focus();
      }
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this3 = this;

      var _this$props$options = this.props.options,
          options = _this$props$options === void 0 ? [] : _this$props$options;
      this.optionKeys = [];
      return options.map(function (option) {
        if (typeof option === 'string') {
          _this3.optionKeys.push(option);

          return {
            label: option,
            value: option
          };
        }

        option.hasOwnProperty('value') && _this3.optionKeys.push(option.value);
        return option;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          className = _this$props.className,
          children = _this$props.children,
          options = _this$props.options,
          others = _objectWithoutProperties(_this$props, ["onChange", "value", "className", "children", "options"]);

      if (options && options.length > 0) {
        children = this.getOptions().map(function (option) {
          return /*#__PURE__*/React.createElement(CheckboxAdapter, {
            key: option.value.toString(),
            disabled: 'disabled' in option ? option.disabled : _this4.props.disabled,
            value: option.value,
            checked: _this4.state.valueList.indexOf(option.value) !== -1,
            focused: _this4.state.focusKey === option.value
          }, option.label);
        });
      }

      return /*#__PURE__*/React.createElement("div", _extends({}, others, {
        className: classnames(className, 's-checkgroup-wrapper'),
        ref: function ref(el) {
          _this4.checkgroup = el;
        },
        tabIndex: "0",
        onFocus: this.handleFocus
      }), React.Children.map(children, function (child) {
        return /*#__PURE__*/React.cloneElement(child, {
          className: classnames(child.props.className, 's-checkgroup-inner-item')
        });
      }));
    }
  }]);

  return GroupAdapter;
}(Component);

_defineProperty(GroupAdapter, "childContextTypes", {
  checkboxGroup: {
    onChange: PropTypes.fun,
    valueList: PropTypes.array,
    focusKey: PropTypes.string
  }
});

CheckboxAdapter.Group = GroupAdapter;
CheckboxAdapter.contextTypes = {
  checkboxGroup: PropTypes.any
};
export default CheckboxAdapter;
//# sourceMappingURL=Checkbox.js.map
