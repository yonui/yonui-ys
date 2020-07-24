/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import AutoComplete from '../index'
import '../style'
import './demo.less'
export default class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      options: ['10000', '10001', '10002', '11000', '12010'],
      placeholder: '查找关键字,请输入1',
      disabled: false
    }
  }

    onFormChange = value => {
      console.log(value)
      this.setState({
        value: value
      })
    };

    render () {
      const { value, options, placeholder, disabled } = this.state
      return (
        <div className='demo' style={{ marginBottom: '90px' }}>
          <AutoComplete
            value={value}
            disabled={disabled}
            options={options}
            placeholder={placeholder}
            onValueChange={value => this.onFormChange(value)}
          />
        </div>
      )
    }
}
