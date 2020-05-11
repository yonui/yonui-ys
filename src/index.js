import MobileLocale from './components/MobileLocale';

let component = null;

component = require('./tinper.js');

component.Locale = require('./lang').default;
component.MobileLocale = MobileLocale;
module.exports = component;
