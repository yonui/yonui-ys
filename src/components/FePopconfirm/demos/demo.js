/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Popconfirm from '../index'
import message from '../../Message'
import '../style';
import './demo.less';
import '../../../theme/index.less'
function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
}

function cancel(e) {
    console.log(e);
    message.error('Click on No');
}
export default class Demo extends Component {

    render() {
        return (
            <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                <a href="#">Delete</a>
            </Popconfirm>
        )
    }
}
