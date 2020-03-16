import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormControl from 'bee-form-control';
import InputGroup from 'bee-input-group';

import TextArea from './TextArea';
import Search from './Search';

const sizeMap = {
  small: 'sm',
  large: 'lg',
  default: 'md'
};

const defaultProps = {
  size: 'default'
};

const propsType = {
  size: PropTypes.string
};

class InputAdapter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

    focus = () => {
      this.inputRef.input.focus();
    }

    blur = () => {
      this.inputRef.input.blur();
    }

    handleKeyDown = (e) => {
      const { onPressEnter, onKeyDown } = this.props;
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    }

    handleEvent = (val, e, propEvent) => {
      const fn = this.props[propEvent];
      fn && fn(e);

      if (propEvent === 'onChange') {
        this.setState({
          value: val
        });
      }
    }

    render () {
      const {
        defaultValue,
        disabled,
        size,
        placeholder,
        addonBefore,
        addonAfter,
        suffix,
        type,
        ...others
      } = this.props;

      const { value } = this.state;
      // 根据withAdon 来判断是不是需要用 InputGroup
      const withAddon = addonAfter || addonBefore;

      let { componentClass } = this.props;
      componentClass = componentClass || 'input';

      if (type === 'textarea') {
        componentClass = type;
      }

      const formControl = <FormControl
        {...others}
        type='text'
        disabled={disabled}
        ref={(e) => { this.inputRef = e }}
        placeholder={placeholder}
        value={value === null ? '' : value}
        defaultValue={defaultValue}
        size={sizeMap[size]}
        onKeyDown={this.handleKeyDown}
        onChange={(val, e) => { this.handleEvent(val, e, 'onChange') }}
        onClick={(val, e) => { this.handleEvent(val, e, 'onClick') }}
        onBlur={(val, e) => { this.handleEvent(val, e, 'onBlur') }}
        onFocus={(val, e) => { this.handleEvent(val, e, 'onFocus') }}
        componentClass={componentClass}
        title={value || placeholder}
      />;

      if (suffix || withAddon) {
        // 目前 suffix 主要用于处理参照的 icon
        return (
          <InputGroup simple={!!suffix}>
            {
              withAddon && addonBefore && <InputGroup.Addon>{addonBefore}</InputGroup.Addon>
            }
            {formControl}
            {
              suffix && <InputGroup.Button
                shape='border'
                onClick={(val, e) => { this.handleEvent(val, e, 'onClick') }}
              >
                {suffix}
              </InputGroup.Button>
            }
            {
              withAddon && addonAfter && <InputGroup.Addon>{addonAfter}</InputGroup.Addon>
            }
          </InputGroup>
        );
      }
      return formControl;
    }
}

InputAdapter.TextArea = TextArea;
InputAdapter.Search = Search;

InputAdapter.defaultProps = defaultProps;
InputAdapter.propsType = propsType;

export default InputAdapter;
