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
                    <Button
                        colors="primary"
                        onClick={ ()=> this.setState({ open: !this.state.open })}>
                    点我啦
                    </Button>
                    <Collapse in={this.state.open}>
                        <div>
                            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~
                        </div>
                    </Collapse>
                </div>
            )
        )
    }
}
