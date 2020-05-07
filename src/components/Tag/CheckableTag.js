import React, { Component } from 'react';
import classnames from 'classnames';
class CheckableTag extends Component {
  constructor (props) {
    super(props);
    this.state = {
      key: this.props.key,
      checked: this.props.checked
    };
  }

  handleClick = () => {
    this.props.onChange && this.props.onChange.call(null, !this.props.checked);
  }

  render () {
    const { children, checked, className, ...other } = this.props;
    const cls = classnames('u-tag-checkable', { 'u-tag-checkable_checked': checked }, className);
    return (
      <span className={cls} onClick={this.handleClick} {...other}>{this.props.children}</span>
    );
  }
}

export default CheckableTag;
