/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import Tree from '../index'
import Button from '../../Button'
import '../../../theme/index.less'

import '../style';
import './demo.less';

const TreeNode = Tree.TreeNode;

export default class Demo extends Component {

    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    }

    render() {
        return (
            <Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
            >
                <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0" disabled>
                        <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                        <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        )
    }
}
