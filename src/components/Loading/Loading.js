/* eslint-disable no-prototype-builtins */
import React, { Component } from 'react';
import Loading from 'bee-loading';

// 值映射
const sizeMap = {
  small: 'sm',
  default: 'sm',
  large: 'lg'
};

class LoadingAdapter extends Component {
  constructor (props, context) {
    super(props);
    this.state = {};

    this.needContainer = props.hasOwnProperty('children');
    this.textTip = props.hasOwnProperty('tip') ? props.tip : null;
  }

  getContainer = () => document.getElementById('u-loading-container');

  render () {
    const a2tProps = {
      ...this.props,
      show: this.props.hasOwnProperty('spinning') ? this.props.spinning : true,
      size: sizeMap[this.props.size] || 'sm',
      container: this.needContainer ? this.getContainer : null
    };

    if (this.needContainer) {
      return (
        <div id='u-loading-container' style={{ position: 'relative' }}>
          {this.props.children}
          <Loading {...a2tProps}>{this.textTip}</Loading>
        </div>
      );
    }

    return (
      <Loading {...a2tProps}>{this.textTip}</Loading>
    );
  }
}

export default LoadingAdapter;
