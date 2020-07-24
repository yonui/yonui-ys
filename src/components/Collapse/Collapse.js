import React, { Component } from 'react'
import Collapse from 'bee-collapse'

class CollapseAdapter extends Component {
  render () {
    const { className, children, ...other } = this.props
    const cls = `${className} collapse`
    return (
      <div className={cls} {...other}>
        {children}
      </div>
    )
  }
}

class PanelAdapter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

    openCollapse = () => {
      this.setState({
        open: !this.state.open
      })
    }

    render () {
      const { header } = this.props
      const icon = this.state.open ? 'uf-arrow-down' : 'uf-arrow-right'
      return (
        <div className='collapse-item'>
          <div className='collapse-item-header' onClick={this.openCollapse}>
            <i className={`uf ${icon} collapse-item-header-icon`} />
            {header}
          </div>
          <Collapse className='collapse-item-content' in={this.state.open}>
            <div>
              <div className='collapse-item-content-text'>
                {this.props.children}
              </div>
            </div>
          </Collapse>

        </div>

      )
    }
}

CollapseAdapter.Panel = PanelAdapter
export default CollapseAdapter
