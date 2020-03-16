/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Button from '../index';
import '../style';
import './demo.less';
export default class Demo1 extends Component {
    render() {
        return (
            <Button colors="primary" isSubmit={true}>Default</Button>
        )
    }
}
