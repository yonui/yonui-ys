/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Step from '../index'
import '../style'
import './demo.less'
import '../../../theme/index.less'

export default class Demo extends Component {
  render () {
    return (
      <Step.Steps current={1}>
        <Step title='已完成' description='这是一段描述' />
        <Step title='进行中' description='这是一段描述' />
        <Step title='未开始' description='这是一段描述' />
      </Step.Steps>
    )
  }
}
