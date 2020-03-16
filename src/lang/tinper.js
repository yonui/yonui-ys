import React, { Component } from 'react';
import LocaleTinper from 'bee-locale';

class Locale extends Component {
  constructor (props) {
    super(props);
    const locale = cb.lang.lang;
    try {
      this.pack = require('bee-locale/build/' + locale + '.js');
    } catch (error) {
      this.pack = null;
    }
  }

  render () {
    const { children } = this.props;
    return this.pack ? <LocaleTinper locale={this.pack}>{children}</LocaleTinper> : children;
  }
}

export default Locale;
