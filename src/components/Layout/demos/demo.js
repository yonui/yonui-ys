/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import {Col,Row} from '../index'
import '../style';
import './demo.less';
export default class Demo extends Component {
    render() {
        return (
            <Row>
                <Col>Col 1</Col>
                <Col>Col 2</Col>
                <Col>Col 3</Col>
            </Row>
        )
    }
}
