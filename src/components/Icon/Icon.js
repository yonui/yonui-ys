import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// import './Icon.less';

const propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  spin: PropTypes.bool
}
const defaultProps = {
  clsPrefix: 'yonicon',
  type: ''
}

const Icon = props => {
  const {
    clsPrefix,
    className = '',
    type,
    spin,
    ...restProps
  } = props
  // let key = clsPrefix + '-' + type
  // if (clsPrefix === 'uf' && type.indexOf('uf-') > -1) key = type
  const classString = classNames(
    'yonicon',
    `yonicon-${type}`,
    {
      [`${clsPrefix}-spin`]: !!spin || type === 'loading'
    },
    className
  )
  return (
    <i {...restProps} className={classString} />
  )
}

Icon.defaultProps = defaultProps
Icon.propTypes = propTypes
export default Icon
