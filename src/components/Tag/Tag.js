import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import Tag from 'bee-tag';

import CheckableTag from './CheckableTag';
import { simpleMerge } from '../../utils';

const DefaultProps = {
  colors: 'light',
  closable: false
};

const propTypes = {
  color: PropTypes.oneOf(['pink', 'red', 'orange', 'cyan', 'blue', 'purple', 'green'])
};

class TagAdapter extends Component {
  constructor (props) {
    super(props);

    const config = {
      closable: this.props.closable,
      text: this.props.children
    };

    if (this.props.color && this.props.color.charAt(0) === '#') {
      config.style = {
        backgroundColor: this.props.color,
        color: '#fff'
      };
    } else {
      config.color = this.props.color;
    }

    // 不直接用Object.assign 是为了避免 undefined 覆盖默认
    this.state = simpleMerge(DefaultProps, config);
  }

  handleClose = (e) => {
    e.preventDefault();
    this.props.onClose && this.props.onClose(e);
    this.afterClose();
  }

  afterClose (tagName) {
    this.props.afterClose && this.props.afterClose(tagName);
  }

  render () {
    const { className, style } = this.props;
    const {
      closable,
      text,
      color
      // style
    } = this.state;

    const clsObj = {};
    if (color) {
      clsObj[`u-tag-color-${color}`] = true;
    }
    const classes = classnames(className, clsObj);
    return (
      <Tag
        ref='myTag'
        {...this.props}
        colors='light'
        deleted={closable}
        visible={closable}
        onClose={this.handleClose}
        className={classes}
        style={style}
        tagClick={this.props.onClick}
      >
        {text}
      </Tag>
    );
  }
}

TagAdapter.propTypes = propTypes;
TagAdapter.CheckableTag = CheckableTag;

export default TagAdapter;
