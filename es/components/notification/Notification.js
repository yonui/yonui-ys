import React from 'react';
import Notification from 'bee-notification';
import Icon from 'bee-icon';
var defaultDuration = 4.5;

function noop() {}

function unDefined(target) {
  return target === undefined;
}

var instance = null;

function notice(args) {
  var description = args.description,
      position = args.position,
      duration = args.duration,
      icon = args.icon;
  var message = args.message;

  if (instance == null) {
    Notification.newInstance({
      position: position
    }, function (n) {
      if (icon) {
        message = /*#__PURE__*/React.createElement("div", {
          className: "notification-icon-title"
        }, icon, /*#__PURE__*/React.createElement("span", null, message));
      }

      instance = n;
      instance.notice({
        title: message,
        content: description,
        color: 'light',
        duration: duration,
        onClose: args.onClose ? args.onClose : noop
      });
    });
  } else {
    instance.notice({
      title: message,
      content: description,
      color: 'light',
      duration: duration,
      onClose: args.onClose ? args.onClose : noop
    });
  }
}

var api = {
  config: function config(options) {},
  close: function close(key) {
    instance && instance.remove(key);
  },
  notice: notice
};
['open', 'success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (_ref) {
    var duration = _ref.duration,
        message = _ref.message,
        description = _ref.description,
        placement = _ref.placement,
        icon = _ref.icon,
        style = _ref.style;

    switch (type) {
      case 'info':
        icon = /*#__PURE__*/React.createElement(Icon, {
          type: "uf-i"
        });
        break;

      case 'error':
        icon = /*#__PURE__*/React.createElement(Icon, {
          type: "uf-close"
        });
        break;

      case 'warning':
        icon = /*#__PURE__*/React.createElement(Icon, {
          type: "uf-exc"
        });
        break;

      case 'success':
        icon = /*#__PURE__*/React.createElement(Icon, {
          type: "uf-correct"
        });
        break;

      default:
        break;
    }

    return api.notice({
      duration: unDefined(duration) ? defaultDuration : duration,
      position: placement || 'topRight',
      message: message,
      icon: icon,
      description: description
    });
  };
});
export default api;
//# sourceMappingURL=Notification.js.map
