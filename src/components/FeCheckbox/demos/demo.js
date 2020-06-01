/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Checkbox from '../index'
import '../style';
import './demo.less';
import '../../../theme/index.less'
export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedFlag: true
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log(e);
        this.setState({ checkedFlag: e.target.checked });
    }

    handleDblClick = (state) => {
        console.log(state);
    }

    render() {
        return (
            <div className="demo-checkbox">
                <Checkbox
                    // onDoubleClick={ this.handleDblClick }
                    ref="test"
                    checked={this.state.checkedFlag}
                    onChange={this.onChange}>
                    Checkbox
                </Checkbox>
            </div>
        )
    }
}
