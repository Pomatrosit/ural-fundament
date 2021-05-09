import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

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

  //////  Swiper  /////

  const swiper = new Swiper('.stages-swiper-container', {
    loop: true,
    slidesPerView: 3.4,
    spaceBetween: 26
  });

  const arrow = document.querySelector('.stages-swiper__arrow')

  arrow.addEventListener('click', () => {
    swiper.slideNext()
  })


}
