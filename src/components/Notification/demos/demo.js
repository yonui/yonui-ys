/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import notification from '../index'
import Button from '../../Button'
import '../style';
import './demo.less';
import '../../../theme/index.less'
const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
export default class Demo extends Component {
    
    render() {
        return (
            <div>
                <Button type="primary" onClick={openNotification}>Open the notification box</Button>
            </div>
        )
    }
}
