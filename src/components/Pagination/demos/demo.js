/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Pagination from '../index'
import '../style'
import './demo.less'
import '../../../theme/index.less'

export default class Demo extends Component {
  render () {
    return (
      <Pagination defaultCurrent={6} total={500} />
    )
  }
}
