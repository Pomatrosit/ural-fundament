export const modal = () => {
  const buttons = document.querySelectorAll('.modal-open-btn')
  const overlay = document.querySelector('.modal-overlay')
  const modal = document.querySelector('.modal')
  const cross = document.querySelector('.modal-cross')

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
    setScrollAvailable()
  })

  cross.addEventListener('click', () => {
    overlay.style.display = 'none'
    setScrollAvailable()
  })

  modal.addEventListener('click', e => {
    e.stopPropagation()
  })

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.style.display = 'flex'
      setScrollUnavailable()
    })
  })
}

function getBodyScrollTop(){
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

function setScrollUnavailable () {
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

function setScrollAvailable () {
  const body = document.body;
  body.style.overflow="auto";
  body.style.position="relative";
  body.style.top = `0px`;
  window.scrollTo(0, document.body.dataset.scrollY);
}
