import React, { Component } from 'react';
import classnames from 'classnames';
import FormControl from 'bee-form-control';
import omit from 'omit.js';

const eventList = ['onChange', 'onSearch'];
function filterNotEvent (obj) {
  const result = {};
  Object.keys(obj).map(key => {
    if (!eventList.includes(key)) {
      result[key] = obj[key];
    }
  });
  return result;
}

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      style: props.style,
      className: props.className,
      value: props.value || props.defaultValue,
      placeholder: props.placeholder,
      attrs: filterNotEvent(props)
    };
  }

  componentWillReceiveProps (nextProps) {
    const { value: newValue } = nextProps;
    const { value: oldValue } = this.props;
    if (newValue !== oldValue) {
      this.setState({
        value: newValue
      })
    }
  }

  handleEvent = (val, e, propEvent) => {
    const fn = this.props[propEvent];

    if (propEvent === 'onSearch') {
      fn && fn(val);
    } else {
      fn && fn(e);
    }

    if (propEvent === 'onChange') {
      this.setState({
        value: val
      });
    }
  }

  render () {
    const {
      value,
      className,
      attrs,
      style,
      placeholder
    } = this.state;

    return (
      <span className={classnames(className, 'u-form-control-search-container')} style={style}>
        <FormControl
          {...omit(attrs, ['style'])}
          value={value}
          placeholder={placeholder}
          ref={(e) => { this.ref = e }}
          onSearch={(val, e) => { this.handleEvent(val, e, 'onSearch') }}
          onChange={(val, e) => { this.handleEvent(val, e, 'onChange') }}
          onBlur={(val, e) => { this.handleEvent(val, e, 'onBlur') }}
          onFocus={(val, e) => { this.handleEvent(val, e, 'onFocus') }}
          type='search'
        />
      </span>
    );
  }
}

export default Search;
