/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Affix from '../index'
import Button from '../../Button';
import '../style';
import './demo.less';
export default class Demo extends Component {
    render() {
        return (
            <div>
                <Affix>
                    <Button type="primary">Affix top</Button>
                </Affix>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}
