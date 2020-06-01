function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
var propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  spin: PropTypes.bool
};
var defaultProps = {
  clsPrefix: 'uf'
};

var Icon = function Icon(props) {
  var _classNames;

  var clsPrefix = props.clsPrefix,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      type = props.type,
      spin = props.spin,
      restProps = _objectWithoutProperties(props, ["clsPrefix", "className", "type", "spin"]);

  var key = clsPrefix + '-' + type;
  if (clsPrefix == 'uf') key = type;
  var classString = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(clsPrefix), true), _defineProperty(_classNames, "".concat(clsPrefix, "-spin"), !!spin || type === 'loading'), _defineProperty(_classNames, "".concat(key), Boolean(type)), _classNames), className);
  return /*#__PURE__*/React.createElement("i", _extends({}, restProps, {
    className: classString
  }));
};

Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;
export default Icon;
//# sourceMappingURL=Icon.js.map
