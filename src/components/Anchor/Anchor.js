import React, { Component } from 'react'

import Anchor from 'bee-anchor'

import AnchorLink from './AnchorLink'

class AnchorAdapter extends Component {
  constructor (props) {
    super(props)

    const { className, nested } = this.props

    this.state = {
      className,
      nested: !!nested
    }
  }

  render () {
    const { className, children, ...other } = this.props

    return (
      <Anchor selector='#my-awesome-nav a' offset='100px' nested className={className} {...other}>
        <ul id='my-awesome-nav'>
          {children}
        </ul>
      </Anchor>
    )
  }
}

AnchorAdapter.Link = AnchorLink
export default AnchorAdapter
