export const header = () => {

  const burger = document.querySelector('.burger')
  const mobileMenu = document.querySelector('.mobile-menu')
  const mobileMenuContent = document.querySelector('.mobile-menu__content')
  const menuLinks = document.querySelectorAll('.mobule-menu__links .menu__item')

  mobileMenuContent.style.opacity = '0'
  let isMenuOpen = false
  let isclickAvailable = true

  burger.addEventListener('click', () => {
    if (isclickAvailable) {
      isclickAvailable = false
      setTimeout(() => {
        isclickAvailable = true
      }, 400)
      if (!isMenuOpen) {
        //setScrollUnavailable()
        mobileMenu.style.transform = 'translateX(0)'
        setTimeout(() => {
          mobileMenuContent.style.opacity = '1'
        }, 300)
      }
      else {
        //setScrollAvailable()
        mobileMenu.style.transform = 'translateX(100%)'
        mobileMenuContent.style.opacity = '0'
      }
      isMenuOpen = !isMenuOpen
    }
  })

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.transform = 'translateX(100%)'
      mobileMenuContent.style.opacity = '0'
      isMenuOpen = !isMenuOpen
    })
  })
}

function getBodyScrollTop(){
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

export function setScrollUnavailable () {
  const body = document.body;
  body.dataset.scrollY = getBodyScrollTop();
  body.style.overflowY="scroll";
  body.style.position="fixed";
  body.style.top="0";
  body.style.right="0";
  body.style.left="0";
  body.style.bottom="0";
  body.style.top = `-${document.body.dataset.scrollY}px`;
}

export function setScrollAvailable () {
  const body = document.body;
  body.style.overflow="auto";
  body.style.position="relative";
  body.style.top = `0px`;
  window.scrollTo(0, document.body.dataset.scrollY);
}
