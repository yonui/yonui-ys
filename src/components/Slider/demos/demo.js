/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Slider from '../index'
import '../../../theme/index.less'
import '../style'
import './demo.less'

const style = { width: 600, margin: 50, marginBottom: 60 }

export default class Demo extends Component {
    log = (value) => {
        console.log(value); //eslint-disable-line
    }

    render () {
      return (
        <div style={style}>
          <p>Basic Slider，`step默认1`</p>
          <Slider defaultValue={20} onAfterChange={this.log} />
        </div>
      )
    }
}
