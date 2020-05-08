import React, { Component } from 'react';
import Upload from 'bee-upload';
const Dragger = Upload.Dragger;

const listTypeMap = {
  text: 'text',
  picture: 'picture',
  'picture-card': 'picture-card'
};

class UploadAdapter extends Component {
  render () {
    const a2tProps = {
      ...this.props,
      listType: listTypeMap[this.props.listType]
    };
    return <Upload {...a2tProps}>{this.props.children}</Upload>;
  }
}

UploadAdapter.Dragger = Dragger;

export default UploadAdapter;
