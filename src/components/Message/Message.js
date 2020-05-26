import Message from 'bee-message';

const defaultDuration = 3;

function noop () {}

function notice (args) {
  const { content, type, icon, color, style } = args;

  // 避免外部异常处理时直接传入content 为对象不好定位问题
  if (typeof content === 'object') {
    throw new Error('content show be a string.');
  }

  const iconType = icon || {
    info: 'uf-i uf',
    success: 'uf-correct uf',
    error: 'uf-close uf',
    warning: 'uf-exc uf'
  }[type];

  const duration = args.duration ? args.duration : defaultDuration;
  const onClose = args.onClose ? args.onClose : noop;
  const position = process.env.__THEMETYPE === 'ncc' ? 'topRight' : 'top'

  Message.destroy();
  Message.create({ content, duration, icon: iconType, onClose, color, style, position });
}

const api = {
  config (options) {

  },
  destroy () {
    Message.destroy();
  },
  open: notice
};

['success', 'info', 'warning', 'error', 'loading'].forEach(type => {
  api[type] = (content, duration, onClose, icon, color, style = {}) => {
    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }
    return api.open({ content, duration, type, onClose, icon, color, style });
  };
});

api.create = api.open;

export default api;
