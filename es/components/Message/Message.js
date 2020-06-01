function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import Message from 'bee-message';
var defaultDuration = 3;

function noop() {}

function notice(args) {
  var content = args.content,
      type = args.type,
      icon = args.icon,
      color = args.color,
      style = args.style; // 避免外部异常处理时直接传入content 为对象不好定位问题

  if (_typeof(content) === 'object') {
    throw new Error('content show be a string.');
  }

  var iconType = icon || {
    info: 'uf-i uf',
    success: 'uf-correct uf',
    error: 'uf-close uf',
    warning: 'uf-exc uf'
  }[type];
  var duration = args.duration ? args.duration : defaultDuration;
  var onClose = args.onClose ? args.onClose : noop;
  var position = process.env.__THEMETYPE === 'ncc' ? 'topRight' : 'top';
  Message.destroy();
  Message.create({
    content: content,
    duration: duration,
    icon: iconType,
    onClose: onClose,
    color: color,
    style: style,
    position: position
  });
}

var api = {
  config: function config(options) {},
  destroy: function destroy() {
    Message.destroy();
  },
  open: notice
};
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  api[type] = function (content, duration, onClose, icon, color) {
    var style = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return api.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose,
      icon: icon,
      color: color,
      style: style
    });
  };
});
api.create = api.open;
export default api;
//# sourceMappingURL=Message.js.map
