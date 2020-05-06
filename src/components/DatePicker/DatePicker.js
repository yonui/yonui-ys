import React, { Component } from 'react';
import DatePicker from 'bee-datepicker';
import moment from 'moment';

class DatePickerAdapter extends Component {
  constructor (props) {
    super(props);
    const locale = window.cb && cb.lang && cb.lang.langType ? cb.lang.langType.substring(0, 2) : 'zh';
    moment.locale(locale);// 设置为英文
    const _locale = window.cb && cb.lang ? cb.lang.lang : 'zh_CN';
    this.locale = require('bee-datepicker/build/locale/' + _locale + '.js');
  }

  onChangeEventAdapter = time => {
    const { format, onChange } = this.props;
    let timeString = null;
    if (time !== null) {
      timeString = time.format(format);
    }
    onChange && onChange(time, timeString);
  };

  // handleFocus = (e) => {
  //   const target = e.target;
  //   const { outInputFocus } = this.props;
  //   if (__THEMETYPE__ === 'ys') {
  //     if (target && target.tagName === 'INPUT') {
  //       target.click();
  //     }
  //   }
  //   outInputFocus && outInputFocus(e);
  // }

  // 日期图标
  renderIcon = () => {
    return <i className='anticon anticon-star-o' />;
  }

  render () {
    const {dateTimeType} = this.props;
    // 支持首选项中的所有格式
    const dateFormats = window.cb && cb.format.getDefaultDateFormats(dateTimeType);
    const a2tProps = {
      ...this.props,
      onChange: this.onChangeEventAdapter,
      // 未指定则传 undefined 使用默认值
      locale: this.locale,
      renderIcon: this.renderIcon,
      format: dateFormats,
      enterKeyDown: false
    };
    return <DatePicker showToday={false} {...a2tProps} />;
  }
}

DatePickerAdapter.YearPicker = DatePicker.YearPicker;
export default DatePickerAdapter;
