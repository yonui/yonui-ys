/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Loading from '../index'
import '../style'
import './demo.less'
import '../../../theme/index.less'
export default class Demo extends Component {
  render () {
    return (
      <div className='example'>
        <Loading />
      </div>
    )
  }
}
