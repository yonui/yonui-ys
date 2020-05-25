import React, { Component } from 'react';
import Radio from 'bee-radio';
import classnames from 'classnames';

const antd2tinper = {
  small: 'sm',
  default: 'sm',
  large: 'lg'
};

class RadioAdapter extends Component {
    onChangeChecked = () => {
      const {
        checked,
        onChange
      } = this.props;
      onChange && onChange(!checked);
    }

    onChange = (val) => {
      const { onChange } = this.props;
      onChange && onChange(val);
    }

    render () {
      const {
        children,
        checked,
        onChange,
        style,
        className,
        ...other
      } = this.props;

      const cls = classnames(className, 'custom-radio-wrapper');
      if (children) {
        return <Radio checked={checked} onChange={(val) => { this.onChange(val) }} className={className} {...other}>{children}</Radio>;
      }

      const checkedRadio = (<span className='custom-radio custom-radio-checked'><span className='radio-red-circle' /></span>);
      const uncheckedRadio = (<span className='custom-radio custom-radio-unchecked' />);

      return (
        <span onClick={this.onChangeChecked} {...other} style={{ ...style, display: 'inline-block' }} className={cls}>
          {checked ? checkedRadio : uncheckedRadio}
        </span>
      );
    }
}
class RadioGroup extends Component {
    onChange = (value) => {
      const res = {
        target: {
          value: value
        }
      };
      this.props.onChange(res);
    }

    render () {
      const {
        value,
        children,
        onChange,
        size,
        ...other
      } = this.props;

      if (children.length === 0) {
        return null;
      }
      return (
        <Radio.RadioGroup
          {...other}
          size={antd2tinper[size]}
          onChange={this.onChange}
          selectedValue={value}
          onBlur={() => {}}
        >
          {children}
        </Radio.RadioGroup>
      );
    }
}

RadioAdapter.Group = RadioGroup;
RadioAdapter.RadioGroup = RadioGroup;
RadioAdapter.RadioButton = Radio.RadioButton;
RadioAdapter.Button = Radio.RadioButton;

export default RadioAdapter;
