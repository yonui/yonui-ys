// PopoverAdapter
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import Popover from 'bee-popover'
import classnames from 'classnames'
import omit from 'omit.js'

const defaultProps = {
  placement: 'bottom',
  trigger: 'click' // fix: 智能录入弹框不显示
}

class PopoverAdapter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: this.props.visible || false
    }
  }

  componentDidMount () {
    this.target = this.getContainerTarget()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({
        visible: nextProps.visible
      })
    }
  }

  onClick = () => {
    const { onVisibleChange } = this.props
    onVisibleChange && onVisibleChange(true)
    this.setState({
      visible: true
    })
  }

  onVisibleChange = (visible) => {
    if (visible) {
      return
    }
    const { onVisibleChange } = this.props
    onVisibleChange && onVisibleChange(visible)
    this.setState({ visible })
  }

  getContainerTarget = () => {
    return typeof this.props.getPopupContainer === 'function' ? this.props.getPopupContainer(findDOMNode(this)) : this.props.getPopupContainer
  }

  render () {
    const { children, overlayClassName, tinperClassName, className, onVisibleChange, placement, trigger, overlayStyle, _innerType, ...other } = this.props
    const { visible } = this.state

    const cls = classnames(overlayClassName, tinperClassName, 'ant-popover')
    const innerSpanCls = classnames(_innerType, 's-popover-inner-span')

    // if (!process.env.__CLIENT__) {
    //   // 修复服务端渲染 Popover 问题
    //   return <div />;
    // }
    if (trigger === 'hover') {
      if (onVisibleChange) {
        return (
          <Popover
            {...omit(other, ['getPopupContainer'])}
            placement={placement}
            show={visible}
            className={cls}
            trigger={trigger}
            container={this.target}
            onVisibleChange={this.onVisibleChange}
            style={overlayStyle}
          >
            <span className={innerSpanCls}>
              {children}
            </span>
          </Popover>
        )
      } else {
        return (
          <Popover
            {...omit(other, ['visible', 'getPopupContainer'])}
            placement={placement}
            className={cls}
            trigger={trigger}
            container={this.target}
            style={overlayStyle}
          >
            <span className={innerSpanCls}>
              {children}
            </span>
          </Popover>
        )
      }
    }

    return (
      <Popover
        {...omit(other, ['getPopupContainer'])}
        placement={placement}
        show={visible}
        className={cls}
        trigger={trigger}
        container={this.target}
        onVisibleChange={this.onVisibleChange}
        style={overlayStyle}
      >
        <span onClick={this.onClick} className={innerSpanCls}>
          {children}
        </span>
      </Popover>
    )
  }
}

PopoverAdapter.defaultProps = defaultProps
export default PopoverAdapter
