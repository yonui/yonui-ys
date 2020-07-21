import React, { Component } from 'react';
import Url from 'c-url';
import Pagination from 'bee-pagination';
import { findIndex } from '../../utils';
import _Locale from '../lang';

const sizeMap = {
  small: 'sm',
  large: 'lg',
  '': ''
};

const defaultProps = {
  pageSizeOptions: []
}

class PaginationAdapter extends Component {
    onPageSizeChange = (index, pageSize) => {
      if (this.singlePage()) return;
      this.props.onShowSizeChange &&
        this.props.onShowSizeChange(this.props.current, parseInt(pageSize));
    };

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
    
    renderPageSizeOptions = (options) => {
      return options.map((item) => {
        return item + getLocale("YS_FED_FW_YONUI_00050000") /* "条/页" */;
      });
    }

    singlePage = () => {
      const { pageSizeOptions, pageSize, total } = this.props;
      return !pageSizeOptions.includes(pageSize + '') && pageSize === total;
    }

    render () {
      let { current, pageSizeOptions, pageSize, size, total, onChange, ...others } = this.props;

      let dataNum = findIndex(pageSizeOptions, pageSize + '');
      const items = Math.ceil(total / pageSize);

      if (this.singlePage()) {
        pageSizeOptions = [pageSize + ''];
        dataNum = 0;
      }
      return (
        <Pagination
          showJump
          prev
          next
          ellipsis
          gap
          boundaryLinks
          maxButtons={5}
          activePage={current}
          dataNum={dataNum}
          dataNumSelect={pageSizeOptions}
          size={sizeMap[size]}
          total={isNaN(total) ? 0 : total}
          onSelect={onChange}
          onDataNumSelect={this.onPageSizeChange}
          items={items}
          {...others}
        />
      );
    }
}

PaginationAdapter.defaultProps = defaultProps;
export default PaginationAdapter;
