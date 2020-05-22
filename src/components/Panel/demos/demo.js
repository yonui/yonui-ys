/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Panel from '../index'
import '../style';
import './demo.less';
import '../../../theme/index.less'

export default class Demo extends Component {
    render() {
        return (
            <div>
                <Panel header="Panel header" footer='Panel footer'>
                    Panel content
                </Panel>
            </div>

        )
    }
}
