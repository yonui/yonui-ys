import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  spin: PropTypes.bool
};
const defaultProps = {
  clsPrefix: 'anticon',
  type: ''
};

const Icon = props => {
  const {
    clsPrefix,
    className = '',
    type,
    spin,
    ...restProps
  } = props;
  let key = clsPrefix+'-'+type;
  if(clsPrefix === 'uf' && type.indexOf('uf-') > -1) key = type;
  const classString = classNames(
    's-icon',
    `s-icon-${type}`,
    {
      [`${clsPrefix}`]: true,
      [`${clsPrefix}-spin`]: !!spin || type === 'loading',
    },
    className
  );
  return (
    <i {...restProps} className={classString} />
  );
};

Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;
export default Icon;
