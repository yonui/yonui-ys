import MobileLocale from './components/MobileLocale';
var component = null;
component = require('./tinper.js');
component.Locale = require('./lang')["default"];
component.MobileLocale = MobileLocale;
module.exports = component;
//# sourceMappingURL=index.js.map
