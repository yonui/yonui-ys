import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const defaultProps = {
  size: 'small',
  tip: ''
};

const propsType = {
  size: PropTypes.string,
  tip: PropTypes.string
};

class LoadingSimple extends Component {
  isNestedPattern () {
    return !!(this.props && this.props.children);
  }

  render () {
    const { size, tip, wrapperClassName } = this.props;

    const sizeArr = ['small', 'large'];
    if (!sizeArr.includes(size)) {
      console.error(`${size} is not allowed in component simple-loading`);
    }

    const _class = {
      [`s-loading-${size}`]: true
    };

    const spinElement = (
      <span className='s-loading-wrapper'>
        <span className={classnames('s-loading', _class)}>
          <span className='s-loading-dot'>
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className='s-loading-tip'>{tip}</span>
        </span>
      </span>
    );

    if (this.isNestedPattern()) {
      return (
        <div className={classnames('s-nested-loading', wrapperClassName)}>
          {spinElement}
          <div className='s-container'>{this.props.children}</div>
        </div>
      );
    }

    return spinElement;
  }
}

LoadingSimple.defaultProps = defaultProps;
LoadingSimple.propsType = propsType;

export default LoadingSimple;
