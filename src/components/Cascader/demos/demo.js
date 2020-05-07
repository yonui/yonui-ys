/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Cascader from '../index'
import '../style';
import './demo.less';
import '../../../theme/index.less'
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }];
  function onChange(value) {
    console.log(value);
  }
export default class Demo extends Component {
    render() {
        return (
            <Cascader options={options} onChange={onChange} placeholder="Please select" />
        )
    }
}
