import React, { Component } from 'react';
import Menu from 'bee-menus';

class MenuAdapter extends Component {
  render () {
    const { children, onKeyDown, ...other } = this.props;
    return (
      <div>
        <Menu
          onKeyDown={typeof onKeyDown === 'function' ? onKeyDown : undefined}
          {...other}
        >
          {children}
        </Menu>
      </div>
    );
  }
}

MenuAdapter.Item = Menu.Item;
MenuAdapter.ItemGroup = Menu.ItemGroup;
MenuAdapter.SubMenu = Menu.SubMenu;
export default MenuAdapter;
