import React, { Component } from 'react'
import Checkbox from 'bee-checkbox'
import { KeyCode } from 'tinper-bee-core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import omit from 'omit.js'

import { isNumericalValue, isPlainString } from '../../utils'

class CheckboxAdapter extends Component {
  constructor (props) {
    super(props)
    const checked = this.isGroup() ? false : !!props.checked
    this.state = {
      checked
    }
  }

  componentDidMount () {
    if (this.isGroup()) { this.setState({ checked: this.contextChecked() }) }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.checked !== undefined) {
      this.setState({ checked: !!nextProps.checked })
    }
  }

  // 外部使用了 checkbox.group
  isGroup = () => {
    return this.props.checked === undefined
  }

  // react context
  contextChecked = () => {
    const { checkboxGroup = {} } = this.context
    const initialValueList = checkboxGroup.valueList
    return initialValueList && initialValueList.includes(this.props.value)
  }

  onChange = (checked) => {
    const target = Object.assign({}, omit(this.props, ['checked', 'onChange']), { checked })

    const { onChange } = this.props
    onChange && onChange({ target })

    const { checkboxGroup } = this.context
    if (checkboxGroup && checkboxGroup.onChange) {
      const value = target.value
      checkboxGroup.onChange(value, checked)

      this.setState({
        checked
      })
    }
  }

  render () {
    const checked = this.isGroup() ? this.contextChecked() : this.state.checked

    return (
      <Checkbox
        checked={checked}
        {...omit(this.props, ['checked'])}
        inverse={process.env.__THEMETYPE__ === 'ncc'}
        onChange={this.onChange}
      />
    )
  }
}

class GroupAdapter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valueList: props.value instanceof Array ? props.value : [],
      focusKey: ''
    }
    this.optionKeys = []
  }

  static childContextTypes = {
    checkboxGroup: {
      onChange: PropTypes.fun,
      valueList: PropTypes.array,
      focusKey: PropTypes.string
    }
  }

  getChildContext () {
    return {
      checkboxGroup: {
        onChange: this.handleChange,
        valueList: this.state.valueList,
        focusKey: this.state.focusKey
      }
    }
  }

  componentDidMount () {
    if (this.checkgroup) { this.checkgroup.addEventListener('keydown', this.handleKeyDown) }
  }

  componentWillReceiveProps (nextProps) {
    const newValueList = nextProps.value instanceof Array ? nextProps.value : []
    this.setState({
      valueList: newValueList
    })
    if (!(nextProps.value instanceof Array)) console.error(('Error: value should be an array.'))
  }

  componentDidUpdate (prevProps, prevState) {
    const { focusKey } = this.state
    if (!isNumericalValue(focusKey) && !isPlainString(focusKey)) return

    if (focusKey && focusKey !== prevState.focusKey) {
      const focusEle = this.checkgroup ? this.checkgroup.querySelector(`input[value="${focusKey}"]`) : null
      focusEle && focusEle.focus()
    }
  }

  handleChange = (value, checked = true) => {
    const newValueList = this.state.valueList.slice()

    if (checked) {
      newValueList.push(value)
    } else {
      if (newValueList.includes(value)) {
        newValueList.splice(newValueList.indexOf(value), 1)
      }
    }

    this.setState({
      valueList: newValueList,
      focusKey: value
    })

    const { onChange } = this.props
    if (onChange) {
      const options = this.getOptions()
      const arr = newValueList.filter(val => newValueList.indexOf(val) !== -1).sort((a, b) => {
        const indexA = options.findIndex(opt => opt.value === a)
        const indexB = options.findIndex(opt => opt.value === b)
        return indexA - indexB
      })
      onChange(arr)
    }
  }

  handleFocus = (e) => {
    const activeDom = cb.dom(e.target)
    const { optionKeys } = this
    if (!optionKeys.length) return
    if (activeDom.hasClass('s-checkgroup-wrapper')) {
      this.setState({
        focusKey: optionKeys[0]
      })
    }
  }

  handleKeyDown = (e) => {
    const activeDom = cb.dom(e.target)
    if (e.target.className.indexOf('s-checkgroup-wrapper') > 0 || activeDom.parents('.s-checkgroup-wrapper').length > 0) {
      const { focusKey } = this.state
      const { optionKeys } = this
      const focusIndex = optionKeys.indexOf(focusKey)
      const optionCount = optionKeys.length
      const st = {}
      if (focusIndex > -1 && focusIndex < optionCount) {
        let newIndex
        switch (e.keyCode) {
          case KeyCode.LEFT:
            newIndex = focusIndex - 1 < 0 ? optionCount - 1 : focusIndex - 1
            st.focusKey = optionKeys[newIndex]
            break
          case KeyCode.RIGHT:
            newIndex = focusIndex + 1 < optionCount ? focusIndex + 1 : 0
            st.focusKey = optionKeys[newIndex]
            break
          default:
            break
        }
      }
      this.setState(st)
    }
  }

  getOptions () {
    const { options = [] } = this.props
    this.optionKeys = []
    return (options).map(option => {
      if (typeof option === 'string') {
        this.optionKeys.push(option)
        return {
          label: option,
          value: option
        }
      }
      option.hasOwnProperty('value') && this.optionKeys.push(option.value)
      return option
    })
  }

  render () {
    let {
      onChange,
      value,
      className,
      children,
      options,
      ...others
    } = this.props
    if (options && options.length > 0) {
      children = this.getOptions().map(option => (
        <CheckboxAdapter
          key={option.value.toString()}
          disabled={'disabled' in option ? option.disabled : this.props.disabled}
          value={option.value}
          checked={this.state.valueList.indexOf(option.value) !== -1}
          focused={this.state.focusKey === option.value}
        >
          {option.label}
        </CheckboxAdapter>
      ))
    }

    return <div {...others} className={classnames(className, 's-checkgroup-wrapper')} ref={el => { this.checkgroup = el }} tabIndex='0' onFocus={this.handleFocus}>
      {
        React.Children.map(children, child => React.cloneElement(child, { className: classnames(child.props.className, 's-checkgroup-inner-item') }))
      }
    </div>
  }
}

CheckboxAdapter.Group = GroupAdapter
CheckboxAdapter.contextTypes = {
  checkboxGroup: PropTypes.any
}
export default CheckboxAdapter
