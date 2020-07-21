import React, { Component } from 'react';
import Switch from 'bee-switch';

const sizeAnt2tinper = {
  small: 'sm',
  default: '',
  '': ''
};
class SwitchAdapter extends Component {
    // ncc 风格，Switch 带有符号
    switchChildren = (checked) => {
      if (process.env.__THEMETYPE__ !== 'ncc') return;
      if (checked) {
        return window.YonyouLang("YS_FED_FW_YONUI_00050004") /* "√" */
      } else {
        return 'X'
      }
    }

    render () {
      const { size, ...other } = this.props;
      return (
        <Switch
          {...other}
          size={sizeAnt2tinper[size]}
          checkedChildren={this.switchChildren(true)}
          unCheckedChildren={this.switchChildren(false)}
        />
      );
    }
}

export default SwitchAdapter;
