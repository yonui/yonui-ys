/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Popover from '../index'
import Button from '../../Button'
import '../style'
import './demo.less'
import '../../../theme/index.less'
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

export default class Demo extends Component {
  render () {
    return (<div>
      <Popover content={content} title='Title' trigger='hover'>
        <Button type='primary'>Hover me</Button>
      </Popover>
    </div>
    )
  }
}
