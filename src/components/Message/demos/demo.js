/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Message from '../index'
import Button from '../../Button'
import '../style';
import './demo.less';
import '../../../theme/index.less'
const info = () => {
    Message.info('This is a normal message');
  };
export default class Demo extends Component {
    render() {
        return (
            <Button type="primary" onClick={info}>Display normal message</Button>
        )
    }
}
