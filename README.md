# yonui-ys
YonSuite交互风格主题包
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