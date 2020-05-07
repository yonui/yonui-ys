/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import DatePicker from '../index'
import '../style';
import './demo.less';
import '../../../theme/index.less'
function onChange(date, dateString) {
    console.log(date, dateString);
  }
export default class Demo extends Component {
    render() {
        return (
            <DatePicker onChange={onChange} />
        )
    }
}
