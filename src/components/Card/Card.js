import React, { Component } from 'react';
import Tile from 'bee-tile';

class CardAdapter extends Component {
    renderTitle = (title) => {
      if (title) {
        return <div className='u-tile-title'>
          <h3 className='u-tile-title-text'>{title}</h3>
        </div>;
      }
      return null;
    }

    renderExtra = (extra) => {
      return <div className='u-tile-extra'>
        {extra}
      </div>;
    }

    render () {
      const { children, bordered, title, bodyStyle, extra, ...other } = this.props;
      const titleElement = title && this.renderTitle(title);
      const extraElement = extra && this.renderExtra(extra);
      return (
        <Tile
          {...other}
          border={bordered}
        >
          {titleElement}
          {extraElement}
          <div className='u-tile-content' style={bodyStyle}>{children}</div>
        </Tile>
      );
    }
}

export default CardAdapter;
