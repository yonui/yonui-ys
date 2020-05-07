/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Menu from '../index'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import '../style';
import './demo.less';
import '../../../theme/index.less'
export default class Demo extends Component {
    state = {
        current: 'mail',
      }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="inline"
            >
                <Menu.Item key="mail">
                    Navigation One
        </Menu.Item>
                <Menu.Item key="app" disabled>
                    Navigation Two
        </Menu.Item>
                <SubMenu title={<span>Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </Menu.Item>
            </Menu>
        )
    }
}
