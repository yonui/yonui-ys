import * as Tinper from './tinper'
import Locale from './lang'
import MobileLocale from './components/MobileLocale'

// export default {
//     ...Tinper,
//     Locale,
//     MobileLocale
// }

let component = null

component = {
  ...Tinper,
  Locale,
  MobileLocale
}

module.exports = component
