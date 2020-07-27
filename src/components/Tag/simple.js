import React from 'react'
import ReactDOM from 'react-dom'
import Animate from 'rc-animate'
import classNames from 'classnames'
import omit from 'omit.js'
import Icon from 'bee-icon'
import CheckableTag from './simpleCheckableTag'

export default class Tag extends React.Component {
  static CheckableTag = CheckableTag;
  static defaultProps = {
    prefixCls: 'u-tag',
    closable: false
  };

  constructor (props) {
    super(props)

    this.state = {
      closing: false,
      closed: false
    }
  }

  close = (e) => {
    const onClose = this.props.onClose
    if (onClose) {
      onClose(e)
    }
    if (e.defaultPrevented) {
      return
    }
    const dom = ReactDOM.findDOMNode(this)
    dom.style.width = `${dom.getBoundingClientRect().width}px`
    // It's Magic Code, don't know why
    dom.style.width = `${dom.getBoundingClientRect().width}px`
    this.setState({
      closing: true
    })
  }

  animationEnd = (_, existed) => {
    if (!existed && !this.state.closed) {
      this.setState({
        closed: true,
        closing: false
      })

      const afterClose = this.props.afterClose
      if (afterClose) {
        afterClose()
      }
    }
  }

  isPresetColor (color) {
    if (!color) { return false }
    return /^(pink|red|yellow|orange|cyan|green|blue|purple)(-inverse)?$/.test(color)
  }

  render () {
    const { prefixCls, closable, color, className, children, style, ...otherProps } = this.props
    const closeIcon = closable ? <Icon type='uf-close' onClick={this.close} /> : ''
    const isPresetColor = this.isPresetColor(color)
    const classString = classNames(prefixCls, {
      [`${prefixCls}-${color}`]: isPresetColor,
      [`${prefixCls}-has-color`]: (color && !isPresetColor),
      [`${prefixCls}-close`]: this.state.closing
    }, className)
    // fix https://fb.me/react-unknown-prop
    const divProps = omit(otherProps, [
      'onClose',
      'afterClose'
    ])
    const tagStyle = {
      backgroundColor: (color && !isPresetColor) ? color : null,
      ...style
    }
    const tag = this.state.closed ? null : (
      <div
        data-show={!this.state.closing}
        {...divProps}
        className={classString}
        style={tagStyle}
      >
        <span className={`${prefixCls}-text`}>{children}</span>
        {closeIcon}
      </div>
    )
    return (
      <Animate
        component=''
        showProp='data-show'
        transitionName={`${prefixCls}-zoom`}
        transitionAppear
        onEnd={this.animationEnd}
      >
        {tag}
      </Animate>
    )
  }
}
