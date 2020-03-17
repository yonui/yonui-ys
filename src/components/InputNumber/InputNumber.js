import React, {Component} from 'react';

import InputNumber from 'bee-input-number';

class InputNumberAdapter extends Component {
  render () {
    const { iconStyle, formatter } = this.props;
    return (
      <InputNumber
        {...this.props}
        ref={(e) => { this.inputRef = e }}
        // disabled={disabled}
        iconStyle={iconStyle || 'one'}
        format={formatter}
        // precision={precision}
        onBlur={(val, e) => { this.props.onBlur && this.props.onBlur(val, e) }}
        onFocus={(val, e) => { this.props.onFocus && this.props.onFocus(val, e) }}
      />
    );
  }
}
InputNumberAdapter.InputNumberGroup = InputNumber.InputNumberGroup;
export default InputNumberAdapter;
