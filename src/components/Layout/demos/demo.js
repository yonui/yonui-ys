/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import {Col,Row} from '../index'
import '../style';
import './demo.less';
import '../../../theme/index.less'
export default class Demo extends Component {
    render() {
        return (
            <Row className='demo'>
                <Col md={12} xs={12} sm={12}>
                    <div className='grayDeep'>12</div>
                </Col>
                <Col md={6} xs={6} sm={6}>
                    <div className='gray'>6</div>
                </Col>
                <Col md={6} xs={6} sm={6}>
                    <div className='grayLight'>6</div>
                </Col>
                <Col md={4} xs={4} sm={4}>
                    <div className='grayDeep'>4</div>
                </Col>
                <Col md={4} xs={4} sm={4}>
                    <div className='gray'>4</div>
                </Col>
                <Col md={4} xs={4} sm={4}>
                    <div className='grayLight'>4</div>
                </Col>
                <Col md={3} xs={3} sm={3}>
                    <div className='grayDeep'>3</div>
                </Col>
                <Col md={3} xs={3} sm={3}>
                    <div className='gray'>3</div>
                </Col>
                <Col md={3} xs={3} sm={3}>
                    <div className='grayLight'>3</div>
                </Col>
                <Col md={3} xs={3} sm={3}>
                    <div className='grayDeep'>3</div>
                </Col>
                <Col md={2} xs={2} sm={2}>
                    <div className='gray'>2</div>
                </Col>
                <Col md={2} xs={2} sm={2}>
                    <div className='grayLight'>2</div>
                </Col>
                <Col md={2} xs={2} sm={2}>
                    <div className='grayDeep'>2</div>
                </Col>
                <Col md={2} xs={2} sm={2}>
                    <div className='gray'>2</div>
                </Col>
                <Col md={2} xs={2} sm={2}>
                    <div className='grayLight'>2</div>
                </Col>
                <Col md={2} xs={2} sm={2}>
                    <div className='grayDeep'>2</div>
                </Col>
            </Row>

        )
    }
}
