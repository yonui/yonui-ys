/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Carousel from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
    render() {
        return (
            <Carousel>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }
}
