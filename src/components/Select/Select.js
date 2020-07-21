import React, { Component } from 'react';
import Select from 'bee-select';
import omit from 'omit.js';

const { Option, OptGroup } = Select;
const __THEMETYPE__ = process.env.__THEMETYPE__;

class SelectAdapter extends Component {
    static Option = Option;
    static OptGroup = OptGroup;

    render () {
      const { onInputKeyDown, mode, ...other } = this.props;
      const selectProps = ('value' in other && typeof other.value === 'undefined' && 'defaultValue' in other) ? {...omit(other, ['value'])} : {...other};
      return <Select
        {...selectProps}
        notFoundContent={window.YonyouLang("YS_FED_FW_YONUI_00050006") /* "暂无数据~" */}
        dropdownMatchSelectWidth // 传进来的是false，但不明白有什么意义
        combobox={mode === 'combobox'}
        onKeyDown={onInputKeyDown}
        enterKeyDown={__THEMETYPE__ !== 'ys'}
      >
        {this.props.children}
      </Select>;
    }
}

export default SelectAdapter;
