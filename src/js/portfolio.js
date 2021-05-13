import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Pagination } from 'swiper/core'

SwiperCore.use([Pagination]);

export const portfolio = () => {

  const swiper = new Swiper('.portfolio-swiper-container', {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
     el: '.swiper-pagination',
     type: 'bullets',
     clickable: true
    }
  });


  const arrowLeft = document.querySelector('.portfolio-swiper-arrow-left')
  const arrowRight = document.querySelector('.portfolio-swiper-arrow-right')

  arrowRight.addEventListener('click', () => {
    swiper.slideNext()
  })

  arrowLeft.addEventListener('click', () => {
    swiper.slidePrev()
  })
}
