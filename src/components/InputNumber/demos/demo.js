/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import InputNumber from '../index'
import '../style'
import './demo.less'
import '../../../theme/index.less'
export default class Demo extends Component {
  render () {
    return (
      <InputNumber min={1} max={10} value={3} />
    )
  }
}
