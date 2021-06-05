import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export const kinds = () => {

  const swiper = new Swiper('.kinds-swiper-container', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 0,
      }
    }
  })

  const arrowRight = document.querySelector('.kinds .slider-arrow-right')
  const arrowLeft = document.querySelector('.kinds .slider-arrow-left')

  arrowRight.onclick = () => {
    swiper.slideNext()
  }

  arrowLeft.onclick = () => {
    swiper.slidePrev()
  }

}
