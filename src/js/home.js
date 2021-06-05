import { stages } from './stages'
import { portfolio } from './portfolio'
import { smoothScroll } from './smoothScroll'
import { kinds } from './kinds'
import { header } from './header'
import { orderForm } from './order-form'
import { modal } from './modal'

export const home = () => {
  modal()
  orderForm()
  stages()
  portfolio()
  smoothScroll()
  kinds()
  header()
  AOS.init({
    disable: 'mobile',
    duration: 1000,
    once: true
  })
}
