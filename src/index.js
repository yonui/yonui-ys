import * as Tinper from './tinper'
import Locale from './lang'
import MobileLocale from './components/MobileLocale'

// import './theme/font.js';

let component = null

component = {
  ...Tinper,
  Locale,
  MobileLocale
}

module.exports = component
