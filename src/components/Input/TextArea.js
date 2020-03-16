import React, { Component } from 'react';

import FormControl from 'bee-form-control';

const DefaultProps = {
  size: 'md'
};

const sizeMap = {
  small: 'sm',
  large: 'lg',
  default: 'md'
};

class TextArea extends Component {
  constructor (props) {
    super(props);

    const {
      size,
      autosize,
      placeholder,
      value,
      ...others
    } = this.props;

    this.state = {
      size: sizeMap[size] || DefaultProps.size,
      value,
      placeholder,
      others
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  handleChange (val, e) {
    this.setState({
      value: val
    });
    this.props.onChange && this.props.onChange(val, e);
  }

  render () {
    const componentClass = 'textarea';
    return (
      <FormControl
        placeholder={this.state.placeholder}
        value={this.props.value}
        size={this.state.size}
        onChange={(val, e) => this.handleChange(val, e)}
        componentClass={componentClass}
        {...this.state.others}
      />
    );
  }
}

export default TextArea;
