/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Tag from '../index'
import '../../../theme/index.less'

import '../style'
import './demo.less'

export default class Demo extends Component {
  render () {
    return (
      <div>
        <Tag color='pink'>pink</Tag>
        <Tag color='red'>red</Tag>
        <Tag color='orange'>orange</Tag>
        <Tag color='green'>green</Tag>
        <Tag color='cyan'>cyan</Tag>
        <Tag color='blue'>blue</Tag>
        <Tag color='purple'>purple</Tag>
      </div>
    )
  }
}
