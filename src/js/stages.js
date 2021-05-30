import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export const stages = () => {
  ////// ТАБЫ /////

  let activeTab = 0;
  const tabs = document.querySelectorAll('.stages-tab')
  const tabsAfter = document.querySelector('.stages-tabs__after')

  for (let tab of tabs) {
    tab.addEventListener('click', function(e) {
      tabs[activeTab].classList.remove('stages-tab--active')
      activeTab = +this.dataset.id;
      tabsAfter.style.transform = `translateX(${activeTab*100}%)`
      tabs[activeTab].classList.add('stages-tab--active')
    })
  }

  //////  Swipers  /////

  const swiper = new Swiper('.stages-swiper-container', {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 15,
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 26,
      },
      900: {
        slidesPerView: 3.4
      }
    }
  });

  const arrow = document.querySelector('.stages-swiper__arrow')

  arrow.addEventListener('click', () => {
    swiper.slideNext()
  })

  const tabSwiper = new Swiper('.stages-tabs-swiper-container', {
    loop: false,
    slidesPerView: 0.6,
    spaceBetween: 0,
    autoHeight:true,
    resistanceRatio:0.5,
    breakpoints: {
      600: {
        slidesPerView: 1
      }
    }
  });

  //stages-tabs-swiper-container


}
