/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Panel from '../index'
import '../style';
import './demo.less';
import '../../../theme/index.less'

const PanelGroup = Panel.PanelGroup;

export default class Demo extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            activeKey: '1'
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(activeKey) {
        this.setState({activeKey});
    }
    render() {
        return (
            <div>
                <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                    <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
                    <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
                </PanelGroup>
            </div>

        )
    }
}
