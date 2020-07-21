import React, { Component } from 'react';
import Pagination from 'bee-pagination';

import { findIndex } from '../../utils';

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

    renderPageSizeOptions = (options) => {
      return options.map((item) => {
        return item + window.YonyouLang("YS_FED_FW_YONUI_00050000") /* "条/页" */;
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
