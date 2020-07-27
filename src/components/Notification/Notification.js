import React from 'react'
import Notification from 'bee-notification'
import Icon from 'bee-icon'

const defaultDuration = 4.5

function noop () {}

function unDefined (target) {
  return target === undefined
}

const instance = {}

function notice (args) {
  const { description, position, duration, icon, container, serviceCode, className } = args
  let message = args.message

  if (instance[serviceCode] == null) {
    Notification.newInstance({ position, container, className }, n => {
      if (icon) {
        message = <div className='notification-icon-title'>
          {icon}
          <span>{message}</span>
        </div>
      }
      instance[serviceCode] = n
      instance[serviceCode].notice({
        title: message,
        content: description,
        color: 'light',
        duration: duration,
        onClose: args.onClose ? args.onClose : noop
      })
    })
  } else {
    instance[serviceCode].notice({
      title: message,
      content: description,
      color: 'light',
      duration: duration,
      onClose: args.onClose ? args.onClose : noop
    })
  }
}

const api = {
  config (options) {

  },
  close (key) {
    instance[serviceCode] && instance[serviceCode].remove(key)
  },
  notice
};

['open', 'success', 'info', 'warning', 'error'].forEach(type => {
  api[type] = ({ duration, message, description, placement, icon, style, container, serviceCode = 'notification', className }) => {
    switch (type) {
      case 'info':
        icon = <Icon type='uf-i' />
        break
      case 'error':
        icon = <Icon type='uf-close' />
        break
      case 'warning':
        icon = <Icon type='uf-exc' />
        break
      case 'success':
        icon = <Icon type='uf-correct' />
        break
      default:
        break
    }

    return api.notice({
      duration: unDefined(duration) ? defaultDuration : duration,
      position: placement || 'topRight',
      message,
      icon,
      description,
      container,
      serviceCode,
      className
    })
  }
})

export default api
