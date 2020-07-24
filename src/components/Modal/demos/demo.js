/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Modal from '../index'
import Button from '../../Button'
import '../style'
import './demo.less'
import '../../../theme/index.less'

export default class Demo extends Component {
    state = { visible: false }
    showModal = () => {
      this.setState({
        visible: true
      })
    }

    handleOk = (e) => {
      console.log(e)
      this.setState({
        visible: false
      })
    }

    handleCancel = (e) => {
      console.log(e)
      this.setState({
        visible: false
      })
    }

    render () {
      return (
        <div>
          <Button type='primary' onClick={this.showModal}>Open</Button>
          <Modal
            show={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Modal.Header closeButton>
              <Modal.Title>标题</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.close} colors='secondary' style={{ marginRight: 8 }}>取消</Button>
              <Button onClick={this.close} colors='primary'>确认</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
}
