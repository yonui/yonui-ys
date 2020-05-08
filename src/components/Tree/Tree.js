import React, { Component } from 'react';
import Tree from 'bee-tree';

class TreeAdapter extends Component {
  render () {
    const { showIcon, children, ...other } = this.props;

    return (
      <Tree
        mustExpandable={true}
        {...other}
        // showIcon={true}
        openIcon={<i className='uf uf-reduce-s-o' />}
        closeIcon={<i className='uf uf-add-s-o' />}
      >
        {children}
      </Tree>
    );
  }
}

TreeAdapter.TreeNode = Tree.TreeNode;

export default TreeAdapter;
