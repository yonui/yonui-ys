/**
 * getPopuocontainer 未有对应的api，是否有影响需要场景确认
 * displayRender 未有对应的api，已提issue
 * onChange 相同，但tinper的onChange会出一个error，不影响功能
 *
 * 整体替换结果未知
 */
import React, { Component } from 'react'

import Cascader from 'bee-cascader'

const defaultProps = {
  value: []
}

class CascaderAdapter extends Component {
  render () {
    const { getPopupContainer, displayRender, ...other } = this.props
    return (
      <Cascader {...other} />
    )
  }
}

CascaderAdapter.defaultProps = defaultProps
export default CascaderAdapter
