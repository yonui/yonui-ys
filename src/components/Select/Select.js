import React, { Component } from 'react';
import Url from '../c-url';
import Select from 'bee-select';
import omit from 'omit.js';
import _Locale from '../lang';

const { Option, OptGroup } = Select;
const __THEMETYPE__ = process.env.__THEMETYPE__;

class SelectAdapter extends Component {
    static Option = Option;
    static OptGroup = OptGroup;

    getLanguage = () => {
      let lang = "zh_CN";
      let global = window.cb?.lang?.lang;
      if (global) return global;
      global = window.cb?.rest.AppContext?.globalization || null;
      if (global?.locale) {
        return global?.locale;
      }
      if (window && Url.query('locale')) { // url 配置页面语言
        lang = Url.query('locale');
      } else if (this.getCookie('locale')) {
        lang = this.getCookie('locale');
      } else if (global?.locale) {
        lang = global.locale;
      } else { // 系统浏览器语言
      }
      if (!lang) console.error('Please add the _lang parameter to the browser !');
      return lang;
    }
  
    getCookie = (name) => {
      const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
      const arr = document && document.cookie.match(reg)
      if (arr) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    }
  
    getLocale = (key) => {
      let lang = this.getLanguage() || "zh_CN";
      return _Locale[lang][key];
    }

    render () {
      const { onInputKeyDown, mode, ...other } = this.props;
      const selectProps = ('value' in other && typeof other.value === 'undefined' && 'defaultValue' in other) ? {...omit(other, ['value'])} : {...other};
      return <Select
        {...selectProps}
        notFoundContent={this.getLocale("YS_FED_FW_YONUI_00050006") /* "暂无数据~" */}
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
