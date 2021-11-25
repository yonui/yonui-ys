import React, { Component } from 'react'
import Url from '../c-url'
import Switch from 'bee-switch'
import _Locale from '../lang'

const sizeAnt2tinper = {
  small: 'sm',
  default: '',
  '': ''
}
class SwitchAdapter extends Component {
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
    return _Locale[lang]?.[key]
  }

  // ncc 风格，Switch 带有符号
  switchChildren = (checked) => {
    if (process.env.__THEMETYPE__ !== 'ncc') return
    if (checked) {
      return this.getLocale('YS_FED_FW_YONUI_00050004') /* "√" */
    } else {
      return 'X'
    }
  }

  render () {
    const { size, ...other } = this.props
    return (
      <Switch
        {...other}
        size={sizeAnt2tinper[size]}
        checkedChildren={this.switchChildren(true)}
        unCheckedChildren={this.switchChildren(false)}
      />
    )
  }
}

export default SwitchAdapter
