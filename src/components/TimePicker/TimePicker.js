import React, { Component } from 'react'
import TimePicker from 'bee-timepicker'

class TimePickerAdapter extends Component {
    addonAdapter = panel => {
      const { addon } = this.props
      if (!addon) {
        return null
      }
      const renderComponent = addon(panel)
      return <div className='u-time-picker-panel-addon'>{renderComponent}</div>
    };

    handleTimeChange = time => {
      const { format, onChange } = this.props
      let timeString = null
      if (time !== null) {
        timeString = time.format(format)
      }
      onChange && onChange(time, timeString)
    };

    handleOpenChange = ({ open }) => {
      this.props.onOpenChange && this.props.onOpenChange(open)
    };

    render () {
      const a2tProps = {
        ...this.props,
        addon: this.addonAdapter,
        onChange: this.handleTimeChange,
        onOpen: this.handleOpenChange,
        onClose: this.handleOpenChange
      }
      return <TimePicker {...a2tProps} />
    }
}

export default TimePickerAdapter
