/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Badge from '../index'
import '../style'
import './demo.less'
export default class Demo extends Component {
  render () {
    return (
      <Badge colors='primary'>8</Badge>
    )
  }
}
