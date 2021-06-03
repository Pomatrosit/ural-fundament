import { stages } from './stages'
import { portfolio } from './portfolio'
import { smoothScroll } from './smoothScroll'
import { kinds } from './kinds'
import { header } from './header'

export const home = () => {
  AOS.init();
  stages()
  portfolio()
  smoothScroll()
  kinds()
  header()
}
