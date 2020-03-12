import React, { Component } from 'react';

import Affix from 'bee-affix';

const DefaultIndex = 2019;

const defaultProps = {
  offsetTop: 0,
  offsetBottom: 0,
  target: () => window,
  onChange: (affixed) => { console.log(affixed) }
};

class AffixAdapter extends Component {
  render () {
    const {
      offsetTop,
      offsetBottom,
      children,
      target,
      onChange,
      ...others
    } = this.props;

    return (
      <Affix
        zIndex={DefaultIndex}
        offsetTop={offsetTop}
        onChange={onChange}
        target={target}
        {...others}
      >
        {children}
      </Affix>
    );
  }
}

AffixAdapter.defaultProps = defaultProps;
export default AffixAdapter;
