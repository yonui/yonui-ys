# yonui-ys
YonSuite交互风格主题包
---
[![npm version](https://img.shields.io/npm/v/yonui-ys.svg)](https://www.npmjs.com/package/yonui-ys)
[![devDependency Status](https://img.shields.io/david/dev/yonui/yonui-ys.svg)](https://david-dm.org/yonui/yonui-ys#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dt/yonui-ys.svg?style=flat)](https://npmjs.org/package/yonui-ys)

---

[![NPM](https://nodei.co/npm/yonui-ys.png)](https://nodei.co/npm/yonui-ys/)
---

### 安装

`npm install yonui-ys -S`

### 使用

```js
import { Button } from 'yonui-ys';
import 'yonui/lib/theme/index.less';
...

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>
, mountNode);
```

使用CDN的方式使用，页面加载`yonui-ys/dist/index.css` 和 `yonui-ys/dist/index.js`后，设置
```json
  // 构建排除指定包
  externals: {
      "yonui-ys": "YonuiYs"
  }
```


### tinper项目升级指南

- 新增以下配置文件，即可兼容

```js
export {
  Affix,
  Anchor,
  AutoComplete,
  Button,
  Badge,
  Carousel as CarouselFigure,
  Col,
  Con,
  Checkbox,
  Card,
  Collapse,
  Cascader,
  Calendar,
  Dropdown,
  DatePicker,
  Grid,
  Form,
  Input,
  InputNumber,
  Menu,
  notification as Notification,
  Popconfirm,
  Popover,
  Pagination,
  Progress,
  Radio,
  Row,
  Switch,
  Select,
  Slider,
  Steps,
  Tag,
  Tabs,
  TimePicker,
  Tree,
  TreeSelect,
  Transfer,
  Upload,
  Tooltip,
  ProgressBar,
  Timeline,
  Panel,
  Loading,
  Message,
  ButtonGroup,
  Label,
  SearchPanel,
  Tile,
  FormControl,
  FeCheckbox as Checkbox,
  FeRadio as Radio,
  FeCollapse as Collapse,
  FeLoading as Loading,
  PageLayout,
  Clipboard,
  ColorPicker,
  LoadingState,
  Viewer,
  Breadcrumb,
  Navbar,
  Backtop,
  Alert,
  Drawer,
  InputGroup,
  FormGroup,
  Rate,
  Table,
  FeModal as Modal,
  FeIcon as Icon
} from 'yonui-ys';

```