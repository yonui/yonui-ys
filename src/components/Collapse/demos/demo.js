/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Collapse from '../index'
import Button from '../../Button'
const Panel = Collapse.Panel;
import '../style';
import './demo.less';
import '../../../theme/index.less'
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default class Demo extends Component {
    constructor(props) {
		super(props);
		this.state = {
			open: true
		}
    }
    callback = (key)=> {
        console.log(key);
    }
    render() {
        return (
            (
                <div>
                    <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                        <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3" disabled>
                        <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>
            )
        )
    }
}
