import React from 'react';
import classNames from 'classnames';

class CheckableTag extends React.Component {
  handleClick = () => {
    const { checked, onChange } = this.props;
    if (onChange) {
      onChange(!checked);
    }
  }

  render () {
    const { prefixCls = 'u-tag', className, checked, ...restProps } = this.props;
    const cls = classNames(prefixCls, {
      [`${prefixCls}-checkable`]: true,
      [`${prefixCls}-checkable-checked`]: checked
    }, className);

    delete (restProps).onChange;
    return <div {...restProps} className={cls} onClick={this.handleClick} />;
  }
}

export default CheckableTag;
