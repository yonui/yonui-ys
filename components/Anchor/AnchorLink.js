import React, { Component } from 'react';

import { isArray } from '../_utils';

class AnchorLink extends Component {
  constructor (props) {
    super(props);

    this.state = {
      // 通过hasSub 来控制有层级结构时父元素的边框
      hasSub: true,
      ref: null
    };

    this.renderChildren = this.renderChildren.bind(this);
  }

  componentDidMount () {
    if (this.ref) {
      // 根据父元素的左边距，递增计算子元素的左边距
      const { left } = this.ref.querySelector('a').getBoundingClientRect();
      console.log(left);
    }
  }

  renderChildren (childrenArr) {
    return (
      <div id='u-nav-child-wrapper' selector='#u-nav-child a' affix>
        <ul id='u-nav-child'>
          {
            childrenArr.map((item, index) => {
              return <AnchorLink {...item.props} key={index} />;
            })
          }
        </ul>
      </div>
    );
  }

  render () {
    const { href, title, children, style, ...others } = this.props;
    const { hasSub } = this.state;

    if (!children) {
      return (
        <li {...others}><a href={`${href}`}>{title}</a></li>
      );
    }
    const childrenArr = isArray(children) ? children : [children];
    return (
      <li className={hasSub ? 'has-sub' : ''} ref={(e) => { this.ref = e }} {...others}>
        <a href={`${href}`}>{title}</a>
        {this.renderChildren(childrenArr)}
      </li>
    );
  }
}

export default AnchorLink;
