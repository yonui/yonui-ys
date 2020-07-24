import React, { Component } from 'react'
import Tooltip from 'bee-tooltip'

class TooltipAdapter extends Component {
  render () {
    return <Tooltip {...this.props} />
  }
}

export default TooltipAdapter
