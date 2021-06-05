import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export const stages = () => {

  let activeTab = 0;

  const swipers = new Swiper('.stages-swiper-container', {
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

  const arrows = document.querySelectorAll('.stages-swiper__arrow')

  arrows.forEach(arr => {
    arr.addEventListener('click', () => {
      swipers[activeTab].slideNext()
    })
  })

  ////// ТАБЫ /////

  const tabs = document.querySelectorAll('.stages-tab')
  const tabsAfter = document.querySelector('.stages-tabs__after')
  const contents = document.querySelectorAll('.stages-content')

  changeContent()

  for (let tab of tabs) {
    tab.addEventListener('click', function(e) {
      tabs[activeTab].classList.remove('stages-tab--active')
      activeTab = +this.dataset.id;
      tabsAfter.style.transform = `translateX(${activeTab*100}%)`
      tabs[activeTab].classList.add('stages-tab--active')
      changeContent()
    })
  }

  function changeContent() {
    contents.forEach(cont => {
      cont.style.display = 'none'
    })
    contents[activeTab].style.display = 'block'
  }

  //////  Swiper  /////

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

}
