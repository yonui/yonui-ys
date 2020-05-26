/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Tabs from '../index'
import Button from '../../Button'
import '../../../theme/index.less'
import '../style';
import './demo.less';
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}

export default class Demo extends Component {

    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback} >
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }
}
