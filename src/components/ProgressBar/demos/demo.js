/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import ProgressBar from '../index'
import '../style'
import './demo.less'
import '../../../theme/index.less'

export default class Demo extends Component {
  render () {
    return (
      <ProgressBar style={{ width: 30 }} now={40} />
    )
  }
}
