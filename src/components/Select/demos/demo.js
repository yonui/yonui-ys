/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Select from '../index'
import Button from '../../Button'
import '../style';
import './demo.less';
import '../../../theme/index.less'

const Option = Select.Option;


function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class Demo extends Component {

    render() {
        return (
            <div>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
                    <Option value="lucy">Lucy</Option>
                </Select>
            </div>
        )
    }
}
