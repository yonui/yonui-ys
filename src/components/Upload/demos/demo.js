/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Upload from '../index'
import Button from '../../Button'
import message from '../../Message'
import Icon from '../../Icon'

import '../../../theme/index.less'

import '../style'
import './demo.less'

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text'
  },
  onChange (info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}

export default class Demo extends Component {
  render () {
    return (
      <Upload {...props}>
        <Button>
          <Icon type='upload' /> Click to Upload
        </Button>
      </Upload>
    )
  }
}
