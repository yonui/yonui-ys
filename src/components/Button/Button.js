import React, { Component } from 'react';
import Button from 'bee-button';
import classnames from 'classnames';

const ant2tinper = {
  '': '',
  small: 'sm',
  large: 'lg',
  default: 'md',
  down: 'uf uf-arrow-down'
};

class ButtonAdapter extends Component {
    getProps = (props) => {
      const { size, type, children } = props;
      const res = {};
      res.className = props.className;

      if (!children) {
        res.className = classnames(res.className, 'u-button-icon');
        res.shape = 'icon';
      }
      res.size = ant2tinper[size];

      switch (type) {
        case 'primary': {
          res.colors = 'primary';
          break;
        }
        case 'danger': {
          res.colors = 'danger';
          res.bordered = true;
          break;
        }
        case 'dashed': {
          res.className = classnames(res.className, 'u-button-dashed');
          res.bordered = true;
          break;
        }
        case 'ghost': {
          res.className = classnames(res.className, 'u-button-ghost');
          break;
        }
        case 'uppage': {
          res.className = classnames(res.className, 'u-button-uppage');
          res.bordered = true;
          break;
        }
        case 'downpage': {
          res.className = classnames(res.className, 'u-button-downpage');
          res.bordered = true;
          break;
        }
        case 'default': {
          res.className = classnames(res.className, 'u-button-default');
          break;
        }
        default: {
          res.bordered = true;
        }
      }
      return res;
    }

    renderChilren = (children, index = 0) => {
      if (typeof children === 'string') {
        return <span key={index}>{children}</span>;
      }

      if (children instanceof Array) {
        return children.map((item, i) => {
          return this.renderChilren(item, i);
        });
      }

      return children;
    }

    renderIcon = () => {
      const { icon, iconType } = this.props;

      if (!icon) return null;

      if (ant2tinper[icon]) {
        return <i className={ant2tinper[icon]} />;
      }
      const cls = iconType === 'iconfont' ? `icon iconfont icon-${icon}` : `yonicon yonicon-${icon}`;
      return <i className={cls} />;
    }

    render () {
      const props = this.getProps(this.props);
      const { delay, children, ...other } = this.props;
      return (
        <Button
          {...other}
          {...props}
        >
          {this.renderIcon()}
          {this.renderChilren(children)}
        </Button>
      );
    }
}

export default ButtonAdapter;
