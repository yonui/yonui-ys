function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Anchor from '../index';
import '../style';
import './demo.less';

var Demo = /*#__PURE__*/function (_Component) {
  _inherits(Demo, _Component);

  var _super = _createSuper(Demo);

  function Demo(props) {
    var _this;

    _classCallCheck(this, Demo);

    _this = _super.call(this, props);
    _this.state = {
      anthors: [{
        href: "one",
        name: "国内要闻",
        content: " 戏曲进高校玩快闪 “圈粉”大学生 \n " + "长春年近六旬男子上演花样自行车绝技 \n " + "民众成都博物馆里享“餐桌上的文化之旅 \n " + "更大更好吃的海蛎子有望端上青岛市民餐桌！ \n " + "人民铁道“中央厨房”今日上线 \n " + "住宅小区的大件垃圾有望得到回收利用 \n " + "地上忽现大坑 瞬间吞掉两幢房子 \n "
      }, {
        href: "two",
        name: "国际新闻",
        content: " 一只好莱坞的 巨星猪 是怎么诞生的 \n " + "追剧听相声玩手游 “歪果仁”为了学汉语也是拼了 \n " + "一等奖得主齐现身 领奖不忘捐款献爱心 \n " + "他或是安倍唯一不敢反对的男人！ \n " + "美男摔落悬崖掉进活火山，躲过摄氏超过1000度 \n " + "苏格兰媒体：凯尔特人没有向穆里尼奥开出邀约 \n " + "青少年手机成瘾危害大 各国政府纷纷出招应对 \n "
      }, {
        href: "three",
        name: "财经",
        content: " 最低工资标准上调窗口开启 京鲁冀等多个省市 \n " + "「重磅发布」2019年欧洲十大海上风电场排行榜！ \n " + "又一80后上市公司实控人被刑拘！ \n " + "五月种菜大全来了，这些蔬菜您种了没有？ \n " + "记住这个落井之人 \n " + "测绘准入放宽在即，新玩家新规则倒逼产业转型 \n " + "回顾20年前A股那场轰轰烈烈的“519行情”"
      }, {
        href: "four",
        name: "互联网",
        content: " 光明日报头版：读懂中国经济的巨大韧性 \n " + "那些还在发朋友圈的朋友们，才是人间珍品 \n " + "电商平台不该为“代吵架服务”设摊 \n " + "《从0到1》序二——读书笔记 \n " + "投资2000万美元狂赚7000倍 \n " + "五一消费账单来了！这个小长假，你的钱花哪了？ \n " + "让数字经济更好助力高质量发展 \n " + "「评论」“小降准”的大意义"
      }, {
        href: "five",
        name: "房产",
        content: " 智慧城市建设莫一哄而上 \n " + "二手房产权纠纷有哪些？ \n " + "如何降低购房风险？ \n " + "哪些城市亮瞎眼，哪些城市很失落 \n " + "北京项目近况一览 \n " + "当初没好好装卫生间 现在后悔死了 \n " + "小户型榻榻米的制作流程 这样准没错 \n " + "如何解决室内干燥 一个加湿器是不行的 \n " + "新风系统有没有用 到底要不要装呢"
      }, {
        href: "six",
        name: "汽车",
        content: " 15万预算，适合年轻人的2台运动轿车，颜值高实力强 \n " + "牌子大口碑好销量还高，12万左右的自动挡合资轿车 \n " + "大众系SUV多到脸盲？一招教你如何选 \n " + "一季度轿车市场分析 \n " + "网友偶遇贴特大号“实习”标志的豪车 \n " + "要想涡轮坏得快，这四个错误天天犯！ \n " + "汽车保养只换机油，4个零件要是不换的 \n " + "去4S店“首保”，这3个细节要注意 \n " + "最均衡国产10万元SUV推荐"
      }]
    };
    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "demo1"
      }, /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, this.state.anthors.map(function (item) {
        return /*#__PURE__*/React.createElement("p", {
          style: {
            'paddingTop': '100px'
          },
          id: item.href
        }, /*#__PURE__*/React.createElement("pre", null, item.content));
      })), /*#__PURE__*/React.createElement(Anchor, {
        nid: "aaa",
        selector: "#my-awesome-nav a",
        offset: "100px"
      }, /*#__PURE__*/React.createElement("ul", {
        id: "my-awesome-nav"
      }, this.state.anthors.map(function (item) {
        return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
          href: "#".concat(item.href)
        }, item.name));
      }))));
    }
  }]);

  return Demo;
}(Component);

export { Demo as default };
//# sourceMappingURL=demo.js.map
