/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Progress from '../index'
import Button from '../../Button'
import '../style'
import './demo.less'
import '../../../theme/index.less'

export default class Demo extends Component {
  render () {
    return (
      <div>
        <Progress type='circle' percent={75} />
      </div>
    )
  }
}
