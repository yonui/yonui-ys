/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Tooltip from '../index'
import Button from '../../Button'
import '../../../theme/index.less'
import '../style';
import './demo.less';

export default class Demo extends Component {

    render() {
        let tip = (
            <div>
                这是一个很强的提醒！
            </div>
        )
        return (<div>
            <Tooltip inverse overlay={tip}>
                <Button colors="primary">
                    鼠标滑过显示
				</Button>
            </Tooltip>
        </div>
        )
    }
}
