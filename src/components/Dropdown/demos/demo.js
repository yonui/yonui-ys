/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Dropdown from '../index'
import '../style';
import './demo.less';

const menu = (
    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
  );

export default class Demo extends Component {
    render() {
        return (
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hover me 
                    </a>
            </Dropdown>
        )
    }
}
