/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MobileLocale from '../index'
import Button from '../../Button'
import '../style'
import './demo.less'
import '../../../theme/index.less'

export default class Demo extends Component {
  render () {
    return (
      <div>
        <MobileLocale />
      </div>
    )
  }
}
