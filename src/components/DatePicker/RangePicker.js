import React, { Component } from 'react';
import moment from 'moment';

import DatePicker from 'bee-datepicker';
import { isArray } from '../../utils/index';

const RangePicker = DatePicker.RangePicker;

class RangePickerAdapter extends Component {
  constructor (props) {
    super(props);
    const locale = cb && cb.lang && cb.lang.langType ? cb.lang.langType.substring(0, 2) : 'zh';
    moment.locale(locale);// 设置为英文
    const _locale = cb && cb.lang ? cb.lang.lang : 'zh_CN';
    this.locale = require('bee-datepicker/build/locale/' + _locale + '.js');
  }

    /**
     * time           :  [moment, moment]
     * timeString     : "[string, string]"
     * timeStringArr  :  [string, string]
     */
    onChangeEventAdapter = (time, timeString, timeStringArr) => {
      const { onChange } = this.props;
      onChange && onChange(time, timeStringArr);
    };

    render () {
      const { placeholder, locale, renderExtraFooter, onChange, ...others } = this.props;
      const holder = isArray(placeholder) ? placeholder.join(' ~ ') : placeholder;

      const a2tProps = {
        ...others,
        placeholder: holder,
        locale: this.locale,
        renderFooter: renderExtraFooter,
        onChange: this.onChangeEventAdapter
      };
      return <RangePicker {...a2tProps} />;
    }
}

export default RangePickerAdapter;
