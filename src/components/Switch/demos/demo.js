/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Switch from '../index'
import '../style'
import './demo.less'
import '../../../theme/index.less'

function onChange (checked) {
  console.log(`switch to ${checked}`)
}
export default class Demo extends Component {
  render () {
    return (
      <div>
        <Switch defaultChecked={false} onChange={onChange} />
      </div>
    )
  }
}
