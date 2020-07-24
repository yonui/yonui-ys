/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Timeline from '../index'
import '../style'
import './demo.less'
import '../../../theme/index.less'

export default class Demo extends Component {
  render () {
    return (
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    )
  }
}
