// ModalAdapter
import React, { Component } from 'react'
import Url from '../c-url'
import Modal from 'bee-modal'
import Button from 'bee-button'
import omit from 'omit.js'
import _Locale from '../lang'

const { Header, Body, Footer, Title } = Modal

const defaultProps = {
  closable: true,
  mask: true,
  maskClosable: true,
  _innerType: ''
}

class ModalAdapter extends Component {
  constructor (props) {
    super(props)
    this.target = this.getContainerTarget()
  }

  getLanguage = () => {
    let lang = 'zh_CN'
    let global = window.cb?.lang?.lang
    if (global) return global
    global = window.cb?.rest.AppContext?.globalization || null
    if (global?.locale) {
      return global?.locale
    }
    if (window && Url.query('locale')) { // url 配置页面语言
      lang = Url.query('locale')
    } else if (this.getCookie('locale')) {
      lang = this.getCookie('locale')
    } else if (global?.locale) {
      lang = global.locale
    } else { // 系统浏览器语言
    }
    if (!lang) console.error('Please add the _lang parameter to the browser !')
    return lang
  }

  getCookie = (name) => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    const arr = document && document.cookie.match(reg)
    if (arr) {
      return unescape(arr[2])
    } else {
      return null
    }
  }

  getLocale = (key) => {
    const lang = this.getLanguage() || 'zh_CN'
    return _Locale[lang][key]
  }

  getContainerTarget () {
    const { getContainer } = this.props
    return typeof getContainer === 'function' ? getContainer() : getContainer
  }

  render () {
    const { children, visible, title, closable, onCancel, onOk, footer, afterClose, cancelText, okText, mask, maskClosable, className, enforceFocus, wrapClassName, _innerType, ...other } = this.props

    let defaultFooter = (
      <Footer className='modal-footer'>
        <span>
          <Button onClick={onCancel} colors='secondary' className='s-cancel-button'>{cancelText || this.getLocale('YS_FED_FW_YONUI_00050001') /* "取消" */}</Button>
          <Button onClick={onOk} colors='primary' className='s-ok-button'>{okText || this.getLocale('YS_FED_FW_YONUI_00050002') /* "确认" */}</Button>
        </span>
      </Footer>
    )

    if (footer === null) {
      defaultFooter = null
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
        <Header closeButton={closable} className='modal-header'>
          <Title>{title}</Title>
        </Header>
        <Body className='modal-body'>
          {children}
        </Body>
        {footer ? <Footer className='modal-footer'>{footer}</Footer> : defaultFooter}
      </Modal>
    )
  }
}

function modalMethod (methodName) {
  return (params = {}) => {
    const { iconType, maskClosable = false, width = 416, backdropStyle, _innerType, ...other } = params
    Modal[methodName]({
      ...other,
      icon: iconType,
      width,
      backdrop: true,
      backdropClosable: maskClosable,
      backdropClassName: _innerType,
      backdropStyle: { ...backdropStyle, zIndex: 1700 }
    })
  }
}

ModalAdapter.confirm = modalMethod('confirm')
ModalAdapter.success = modalMethod('success')
ModalAdapter.error = modalMethod('error')
ModalAdapter.warning = modalMethod('warning')
ModalAdapter.info = modalMethod('info')

ModalAdapter.defaultProps = defaultProps
export default ModalAdapter
