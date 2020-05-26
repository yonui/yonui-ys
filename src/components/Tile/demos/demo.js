/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Tile from '../index'
import '../style';
import './demo.less';
import '../../../theme/index.less'


export default class Demo extends Component {
    
    render() {
        return (
            <Tile style={{width:200}}>
				<h4>磁贴标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>

        )
    }
}
