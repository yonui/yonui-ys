import React, { Component } from 'react'
import Dropdown from 'bee-dropdown'
import Button from '../Button'
import ButtonGroup from 'bee-button-group'

class DropdownBtn extends Component {
  render () {
    const { size, type, onClick, children, className, disabled, ...other } = this.props
    other.delayShow = other.mouseEnterDelay
    other.delayHide = other.mouseLeaveDelay
    const disabledClass = disabled ? 'disabled' : ''

    // 把className 放在ButtonGroup 元素上，方便外部自定义样式扩展
    return (
      <ButtonGroup className={className}>
        <Button size={size} type={type} onClick={onClick} disabled={!!disabled}>{children}</Button>
        <Dropdown animation='slide-up' placement='bottomRight' {...other}>
          <span className={`dropdown-btn-icon ${disabledClass}`}><i className='uf uf-arrow-down' /></span>
        </Dropdown>
      </ButtonGroup>
    )
  }
}

Dropdown.Button = DropdownBtn
export default Dropdown
