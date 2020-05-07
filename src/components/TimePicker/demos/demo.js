/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import TimePicker from '../index'
import moment from 'moment';
import '../../../theme/index.less'

import '../style';
import './demo.less';

function onChange(time, timeString) {
    console.log(time, timeString);
  }

export default class Demo extends Component {
    
    render() {
        return (
            <div>
               <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </div>
        )
    }
}
