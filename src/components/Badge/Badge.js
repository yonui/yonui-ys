import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Badge from 'bee-badge'
import { simpleMerge } from '../../utils'

/**
 * 开发说明：
 *  1. antd 的badge 标签上设置的 style、className 样式信息，暂没有实现转为tinper 的样式
 */

const propTypes = {
  count: PropTypes.number,
  overflowCount: PropTypes.number
}

const defaultProps = {
  overflowCount: 99,
  placement: 'right',
  status: 'error'
}

const ColorsMap = {
  success: 'success',
  error: 'error',
  default: 'info',
  processing: 'primary',
  warning: 'warning'
}

class BadgeAdapter extends Component {
  render () {
    const {
      count,
      showZero,
      style,
      status,
      className,
      overflowCount,
      children,
      ...others
    } = this.props

    const $status = ColorsMap[status]

    const dataBadge = count > overflowCount ? `${overflowCount}+` : count
    const condition = showZero || (count !== 0 && count !== '0')

    let innerClassName = {
      [`u-badge-${status}`]: true
    }
    if (this.props.children) {
      innerClassName = simpleMerge(innerClassName, {
        'left-top': this.props.placement === 'left',
        'right-top': this.props.placement === 'right'
      })
    }

    // TODO: antd 的 Badge style 属性会传递给子元素，这里暂未做处理
    return (
      condition ? (
        <Badge dataBadge={dataBadge} colors={$status} {...others} className={classnames(innerClassName, className)}>
          {children}
        </Badge>
      ) : null
    )
  }
}

BadgeAdapter.propTypes = propTypes
BadgeAdapter.defaultProps = defaultProps

export default BadgeAdapter
