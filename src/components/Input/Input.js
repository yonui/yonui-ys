import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormControl from 'bee-form-control'
import InputGroup from 'bee-input-group'
import omit from 'omit.js'

import TextArea from './TextArea'
import Search from './Search'

const sizeMap = {
  small: 'sm',
  large: 'lg',
  default: 'md'
}

const defaultProps = {
  size: 'default',
  type: 'text'
}

const propsType = {
  size: PropTypes.string
}

class InputAdapter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value || this.props.defaultValue || ''
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  focus = () => {
    this.inputRef.input.focus()
  }

  blur = () => {
    this.inputRef.input.blur()
  }

  handleKeyDown = (e) => {
    const { onPressEnter, onKeyDown } = this.props
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e)
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  handleFocus = (val, e) => {
    if (e?.target)
      e.target.setSelectionRange(0, e.target.value.length);
    this.props.onFocus && this.props.onFocus(e)
  }

  handleBlur = (val, e, clearOpt) => {
    this.props.onBlur && this.props.onBlur(e, clearOpt)
  }

  handleClick = (val, e) => {
    this.props.onClick && this.props.onClick(e)
  }

  handleChange = (val, e) => {
    this.props.onChange && this.props.onChange(e)
    if (val !== this.state.value) {
      this.setState({ value: val })
    }
  }

  render () {
    let { defaultValue, disabled, size, placeholder, addonBefore, addonAfter, suffix, type, ...others } = this.props
    const { value } = this.state

    // 根据withAdon 来判断是不是需要用 InputGroup
    const withAddon = addonAfter || addonBefore

    let { componentClass } = this.props
    componentClass = componentClass || 'input'

    if (type === 'textarea') {
      componentClass = type
      type = 'text'
    }

    const formControl = (
      <FormControl
        {...omit(others, ['value', 'defaultValue'])}
        type={type}
        disabled={disabled}
        autocomplete={type === 'password' ? 'new-password' : 'off'}
        ref={(e) => { this.inputRef = e }}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        size={sizeMap[size]}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        onClick={this.handleClick}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        componentClass={componentClass}
        title={type !== 'password' && (value || placeholder)}
      />
    )

    if (suffix || withAddon) {
      // 目前 suffix 主要用于处理参照的 icon
      return (
        <InputGroup simple={!!suffix} className={disabled ? 'disabled' : ''}>
          {
            withAddon && addonBefore && <InputGroup.Addon>{addonBefore}</InputGroup.Addon>
          }
          {formControl}
          {
            suffix && (
              <InputGroup.Button
                shape='border'
                onClick={this.handleClick}
              >
                {suffix}
              </InputGroup.Button>
            )
          }
          {
            withAddon && addonAfter && <InputGroup.Addon>{addonAfter}</InputGroup.Addon>
          }
        </InputGroup>
      )
    }
    return formControl
  }
}

InputAdapter.TextArea = TextArea
InputAdapter.Search = Search

InputAdapter.defaultProps = defaultProps
InputAdapter.propsType = propsType

export default InputAdapter
