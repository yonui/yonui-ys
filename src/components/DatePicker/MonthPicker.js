import React, { Component } from 'react'
import moment from 'moment'
import DatePicker from 'bee-datepicker'
const MonthPicker = DatePicker.MonthPicker

class MonthPickerAdapter extends Component {
  constructor (props) {
    super(props)
    const locale = cb && cb.lang && cb.lang.langType ? cb.lang.langType.substring(0, 2) : 'zh'
    moment.locale(locale)// 设置为英文
    const _locale = cb && cb.lang ? cb.lang.lang : 'zh_CN'
    this.locale = require('bee-datepicker/build/locale/' + _locale + '.js')
  }

  render () {
    const a2tProps = {
      ...this.props,
      locale: this.locale

    }
    return <MonthPicker {...a2tProps} />
  }
}

export default MonthPickerAdapter
