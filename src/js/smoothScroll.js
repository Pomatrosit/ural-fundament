export const smoothScroll = () => {

  const technologyTop = offset(document.querySelector('.technology')) - 250
  const priceTop = offset(document.querySelector('.price')) - 250
  const stagesTop =  offset(document.querySelector('.stages')) - 150
  const portfolioTop = offset(document.querySelector('.portfolio')) - 200
  const contactsTop = offset(document.querySelector('.contacts')) - 250

  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      window.scrollTo({
        top: getScrollPosition(item.getAttribute('data-scroll')),
        behavior: "smooth"
      })
    })
  })

  function getScrollPosition (str) {
    let position = 0
    switch (str){
      case 'technology': position = technologyTop; break
      case 'price': position = priceTop; break
      case 'stages': position = stagesTop; break
      case 'portfolio': position = portfolioTop; break
      case 'contacts': position = contactsTop; break
      default: break
    }
    return position
  }

}

function offset(el) {
    const rect = el.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop
}
