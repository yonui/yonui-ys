import React, { Component } from 'react';
import Checkbox from 'bee-checkbox';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import omit from 'omit.js';

class CheckboxAdapter extends Component {
  constructor (props) {
    super(props);
    const checked = this.isGroup() ? false : !!props.checked;
    this.state = {
      checked
    }
  }

  componentDidMount () {
    if (this.isGroup())
      this.setState({ checked: this.contextChecked() })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.checked !== undefined) {
      this.setState({ checked: !!nextProps.checked })
    }
  }

  // 外部使用了 checkbox.group
  isGroup = () => {
    return this.props.checked === undefined;
  }

  // react context
  contextChecked = () => {
    const { checkboxGroup = {} } = this.context;
    const initialValueList = checkboxGroup.valueList;
    return initialValueList && initialValueList.includes(this.props.value);
  }

  onChange = (checked) => {
    const target = Object.assign({}, omit(this.props, ['checked', 'onChange']), { checked });

    const { onChange } = this.props;
    onChange && onChange({ target });

    const { checkboxGroup } = this.context;
    if (checkboxGroup && checkboxGroup.onChange) {
      const value = target.value;
      checkboxGroup.onChange(value, checked);

      this.setState({
        checked
      });
    }
  }

  render () {
    const checked = this.isGroup() ? this.contextChecked() : this.state.checked

    return (
      <Checkbox
        checked={checked}
        {...omit(this.props, ['checked'])}
        inverse={process.env.__THEMETYPE__ === 'ncc'}
        onChange={this.onChange}
      />
    );
  }
}

class GroupAdapter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      valueList: props.value instanceof Array ? props.value : []
    }
  }

  static childContextTypes = {
    checkboxGroup: {
      onChange: PropTypes.fun,
      valueList: PropTypes.array
    }
  }

  getChildContext () {
    return {
      checkboxGroup: {
        onChange: this.handleChange,
        valueList: this.state.valueList
      }
    };
  }

  componentWillReceiveProps (nextProps) {
    const newValueList = nextProps.value instanceof Array ? nextProps.value : [];
    this.setState({
      valueList: newValueList
    });
    if (!(nextProps.value instanceof Array)) throw new Error('Error: value should be an array.');
  }

  handleChange = (value, checked = true) => {
    const newValueList = this.state.valueList.slice();

    if (checked) {
      newValueList.push(value);
    } else {
      if (newValueList.includes(value)) {
        newValueList.splice(newValueList.indexOf(value), 1);
      }
    }

    this.setState({
      valueList: newValueList
    })

    const { onChange } = this.props;
    if (onChange) {
      const options = this.getOptions();
      const arr = newValueList.filter(val => newValueList.indexOf(val) !== -1).sort((a, b) => {
        const indexA = options.findIndex(opt => opt.value === a);
        const indexB = options.findIndex(opt => opt.value === b);
        return indexA - indexB;
      });
      onChange(arr);
    }
  }

  getOptions () {
    const { options = [] } = this.props;
    return (options).map(option => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option
        }
      }
      return option;
    });
  }

  render () {
    let {
      onChange,
      value,
      className,
      children,
      options,
      ...others
    } = this.props;
    if (options && options.length > 0) {
      children = this.getOptions().map(option => (
        <CheckboxAdapter
          key={option.value.toString()}
          disabled={'disabled' in option ? option.disabled : this.props.disabled}
          value={option.value}
          checked={this.state.valueList.indexOf(option.value) !== -1}
        >
          {option.label}
        </CheckboxAdapter>
      ));
    }

    return <div {...others} className={classnames(className, 's-checkgroup-wrapper')}>
      {
        React.Children.map(children, child => React.cloneElement(child, { className: classnames(child.props.className, 's-checkgroup-inner-item') }))
      }
    </div>
  }
}

CheckboxAdapter.Group = GroupAdapter;
CheckboxAdapter.contextTypes = {
  checkboxGroup: PropTypes.any
}
export default CheckboxAdapter;
