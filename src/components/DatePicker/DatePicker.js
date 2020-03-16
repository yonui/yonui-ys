import React, { Component } from 'react';
import DatePicker from 'bee-datepicker';
import moment from 'moment';

const dateFormats = ['YYYY-MM-DD', 'DD-MM-YYYY', 'YYYY/MM/DD', 'DD/MM/YYYY', 'YYYY.MM.DD', 'DD.MM.YYYY'];
const __THEMETYPE__ = process.env.__THEMETYPE__;

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

  // 日期图标
  renderIcon = () => {
    return <i className='anticon anticon-star-o' />;
  }

  render () {
    const { format } = this.props;
    // 日期录入按自己设置的格式录入+去掉分割符的
    // 需要支持4种输入格式（YYYYMMDD）：20191201     2019/12/01     2019.12.01    2019-12-01
    const defaultFormat = dateFormats.includes(format) ? format.replace(/[-|/|.]/g, '') : '';
    const a2tProps = {
      ...this.props,
      onChange: this.onChangeEventAdapter,
      // 未指定则传 undefined 使用默认值
      locale: this.locale,
      renderIcon: this.renderIcon,
      format: defaultFormat ? [format].concat(defaultFormat) : format,
      enterKeyDown: __THEMETYPE__ !== 'ys'
    };
    return <DatePicker showToday={false} {...a2tProps} />;
  }
}

DatePickerAdapter.YearPicker = DatePicker.YearPicker;
export default DatePickerAdapter;
