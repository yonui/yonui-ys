import React, { Component } from 'react';
import Button from 'bee-button';
import Popconfirm from 'bee-popconfirm';

class PopconfirmAdapter extends Component {
  render () {
    const a2tProps = {
      className: this.props.overlayClassName,
      trigger: this.props.trigger,
      placement: this.props.placement,
      secondPlacement: this.props.placement,
      content: this.props.title,
      close_btn: (
        <Button
          className='u-popconfirm-btn u-popconfirm-btn-ok'
          bordered
          colors='primary'
          size='sm'
        >
          {this.props.okText}
        </Button>
      ),
      cancel_btn: (
        <Button
          className='u-popconfirm-btn u-popconfirm-btn-cancel'
          bordered
          size='sm'
        >
          {this.props.cancelText}
        </Button>
      ),
      onClose: this.props.onConfirm,
      onCancel: this.props.onCancel
    };
    return (
      <Popconfirm rootClose animation {...a2tProps}>
        {this.props.children}
      </Popconfirm>
    );
  }
}

export default PopconfirmAdapter;
