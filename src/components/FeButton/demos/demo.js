/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Button from '../index';
import '../style';
import './demo.less';
export default class Demo1 extends Component {
    render() {
        return (
            <div className="demoPadding">
                <Button colors="primary">primary</Button>
                <Button colors="success">success</Button>
                <Button colors="info">info</Button>
                <Button colors="warning">warning</Button>
                <Button colors="danger">danger</Button>
                <Button colors="dark">dark</Button>
                <div className="divider"></div>
                <Button shape="border" colors="primary">primary</Button>
                <Button shape="border" colors="success">success</Button>
                <Button shape="border" colors="info">info</Button>
                <Button shape="border" colors="warning">warning</Button>
                <Button shape="border" colors="danger">danger</Button>
                <Button shape="border" colors="dark">dark</Button>
                <div className="divider"></div>
                <Button colors="primary" disabled>状态(disabled)</Button>
                <div className="divider"></div>
                <Button size="sm" colors="primary">小按钮</Button>
                <Button colors="primary">默认</Button>
                <Button size="lg" colors="primary">大按钮</Button>
                <Button size="xg" colors="primary">巨大按钮</Button>
                <div className="divider"></div>
                <Button colors="primary" shape="icon"><i className='uf uf-search' /></Button>
                <Button colors="primary"><i className='uf uf-search' />Search</Button>
                <Button colors="secondary" shape="icon"><i className='uf uf-del' /></Button>
                <Button colors="secondary"><i className='uf uf-del' />Delete</Button>
                <Button colors="info" shape="icon"><i className='uf uf-cloud-up' /></Button>
                <Button colors="info"><i className='uf uf-cloud-up' />Upload</Button>
                <Button shape="icon" bordered><i className='uf uf-pencil' /></Button>
                <Button bordered><i className='uf uf-pencil' />Edit</Button>
            </div>
        )
    }
}
