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
        const dark1 = function () {
            Message.destroy();
            Message.config({
                top: 200,
                duration: 300,
            });
            Message.create({content: '单据状态异常，请重新提交。', color: 'warning',duration:30});
        };
        const dark2 = function () {
            Message.destroy();
            Message.config({
                width: 500
            });
            Message.create({content: '单据提交成功。', color: "dark", position: 'bottomLeft'});
        };
        
        return (
            <div>
                <Button type="primary" onClick={info}>Display normal message</Button>
                <Button
                    colors="dark"
                    onClick={dark1}>
                    自定义 top
                </Button>
                <Button
                    shape="border"
                    onClick={dark2}>
                    自定义 width
                </Button>
            </div>
            
        )
    }
}
