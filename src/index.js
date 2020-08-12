import * as Tinper from './tinper'
import Locale from './lang'
import MobileLocale from './components/MobileLocale'

const pkg = require('../package.json')
try {
  const global = window || {}
  global.__YONUI_VERSION__ = pkg.version
} catch (err) {
  // console.log(err)
}


let component = null

component = {
  ...Tinper,
  Locale,
  MobileLocale
}

module.exports = component
