import 'styled-components'
import * as colors from './colors'
import * as fonts from './fonts'
declare module 'styled-components' {
 export interface DefaultTheme {
  colors: typeof colors
  fonts: typeof fonts
 }
}
