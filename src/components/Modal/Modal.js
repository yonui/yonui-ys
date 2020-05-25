// ModalAdapter
import React, { Component,Fragment } from 'react';
import Modal from 'bee-modal';
import Button from 'bee-button';
import omit from 'omit.js';

const { Header, Body, Footer, Title, Dialog } = Modal;

const defaultProps = {
  closable: true,
  mask: true,
  maskClosable: true,
  _innerType: ''
};

class ModalAdapter extends Component {
  constructor (props) {
    super(props);
    this.target = this.getContainerTarget();
  }

  getContainerTarget () {
    const { getContainer } = this.props;
    return typeof getContainer === 'function' ? getContainer() : getContainer
  }

  render () {
    let { children, visible, show, title, closable, onCancel, onOk, footer, afterClose, cancelText, okText, mask, maskClosable, className, wrapClassName, _innerType, ...other } = this.props;
    if(visible==undefined)visible=show;
    let defaultFooter = (
      <Footer className='modal-footer'>
        <span>
          <Button onClick={onCancel} colors='secondary' className='s-cancel-button'>{cancelText || '取消'}</Button>
          <Button onClick={onOk} colors='primary' className='s-ok-button'>{okText || '确认'}</Button>
        </span>
      </Footer>
    );

    if (footer === null || footer === undefined) {
      defaultFooter = null;
    }

    // const backdropClassName = this.props.backdropClassName || `${className}-backdrop`;
    return (
      <Modal
        {...omit(other, ['getContainer'])}
        className={wrapClassName}
        dialogClassName={className}
        show={visible}
        onHide={onCancel}
        onExited={afterClose}
        container={this.target}
        backdrop={mask}
        enforceFocus={false}
        backdropClassName={_innerType}
        backdropClosable={maskClosable}
      >
        {
          //通过title判断是否antd的用法
          title?<Fragment>
              <Header closeButton={closable} className='u-modal-header'>
                <Title>{title}</Title>
              </Header>
              <Body className='u-modal-body'>
                {children}
              </Body>
              {footer ? <Footer className='u-modal-footer'>{footer}</Footer> : defaultFooter}
          </Fragment>:<Fragment>{children}</Fragment>
        }
      </Modal>
    );
  }
}

function modalMethod (methodName) {
  return (params = {}) => {
    const { iconType, maskClosable = false, width = 416, backdropStyle, _innerType, ...other } = params;
    Modal[methodName]({
      ...other,
      icon: iconType,
      width,
      backdrop: true,
      backdropClosable: maskClosable,
      backdropClassName: _innerType,
      backdropStyle: { ...backdropStyle, zIndex: 1700 }
    });
  };
}

ModalAdapter.confirm = modalMethod('confirm');
ModalAdapter.success = modalMethod('success');
ModalAdapter.error = modalMethod('error');
ModalAdapter.warning = modalMethod('warning');
ModalAdapter.info = modalMethod('info');
ModalAdapter.Header = Header;
ModalAdapter.Body = Body;
ModalAdapter.Footer = Footer; 
ModalAdapter.Title = Title;
ModalAdapter.Dialog = Dialog;

ModalAdapter.defaultProps = defaultProps;
export default ModalAdapter;
