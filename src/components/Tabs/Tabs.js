import React, { Component } from 'react'
import Tabs from 'bee-tabs'

const tabBarStyleTypeMap = {
  line: 'simple',
  card: 'upborder',
  'editable-card': 'editable-card'
}

class TabsAdapter extends Component {
    handleChange = (key) => {
      // 疑点：这里的change 事件参数key 有时会是 Proxy 对象，导致页面出错，暂未找到原因，通过下面判断条件临时解决
      if (typeof key !== 'object') {
        this.props.onChange && this.props.onChange(key)
      }
    }

    render () {
      // Todo：单独把 change 事件抽取出来，而不直接使用 props，因为onchange 会被其他组件（如radio ）触发
      const {
        onChange,
        className,
        ...others
      } = this.props

      const newProps = {
        ...others,
        extraContent: this.props.tabBarExtraContent,
        style: {
          ...this.props.style,
          ...this.props.tabBarStyle
        },
        tabBarPosition: this.props.tabPosition,
        tabBarStyle: tabBarStyleTypeMap[this.props.type],
        className: 'ys-tabs ' + className
      }
      return <Tabs {...newProps} onChange={this.handleChange}>{this.props.children}</Tabs>
    }
}

TabsAdapter.TabPane = Tabs.TabPane
TabsAdapter.SearchTabs = Tabs.SearchTabs
export default TabsAdapter
