/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Radio from '../index'
import Button from '../../Button'
import '../style'
import './demo.less'
import '../../../theme/index.less'
const RadioGroup = Radio.Group
export default class Demo extends Component {
    state = {
      value: 1
    }

    onChange = (e) => {
      console.log('radio checked', e.target.value)
      this.setState({
        value: e.target.value
      })
    }

    render () {
      return (
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      )
    }
}
