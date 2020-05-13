import React, {Component} from 'react';
import classnames from 'classnames';
import InputNumber from 'bee-input-number';

class InputNumberAdapter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      focused: false
    }
  }

  handleFocus = (val, e) => {
    this.setState({
      focused: true
    })
    this.props.onFocus && this.props.onFocus(val, e);
  }

  handleBlur = (val, e) => {
    this.setState({
      focused: false
    })
    this.props.onBlur && this.props.onBlur(val, e);
  }

  render () {
    const { iconStyle, formatter, className } = this.props;
    const cls = classnames(className, {
      'u-input-number-focused': this.state.focused,
    });
    return (
      <InputNumber
        {...this.props}
        className={cls}
        ref={(e) => { this.inputRef = e }}
        // disabled={disabled}
        iconStyle={iconStyle || 'one'}
        format={formatter}
        // precision={precision}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
      />
    );
  }
}

InputNumberAdapter.InputNumberGroup = InputNumber.InputNumberGroup;
export default InputNumberAdapter;
