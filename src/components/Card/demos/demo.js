/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Card from '../index'
import '../style'
import './demo.less'
export default class Demo extends Component {
  render () {
    return (
      <Card style={{ width: 200 }}>
        <h4>磁贴标题</h4>
        <span>进度</span>
        <h1>95%</h1>
      </Card>
    )
  }
}
