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
  clsPrefix: 'anticon'
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
  if(clsPrefix=='uf')key=type;
  const classString = classNames(
    {
      [`${clsPrefix}`]: true,
      [`${clsPrefix}-spin`]: !!spin || type === 'loading',
      [`${key}`]: Boolean(type)
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
