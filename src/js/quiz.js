import CustomSelect from 'vanilla-js-dropdown'
import { orderForm } from './order-form'
import { header } from './header'

export const quiz = () => {

  const typeSelect = new CustomSelect({
    elem: 'type-select'
  })

  const materialSelect = new CustomSelect({
    elem: 'meterial-select'
  })

  window.quizData = {
    type: 'Баня',
    material: 'Sip-панель',
    width: '',
    length: '',
    name: '',
    phone: ''
  }

  const quizBody = document.querySelector('.quiz-body')
  const quizFinishBtn = document.querySelector('.quiz-finish-btn')
  const orderFormRef = document.querySelector('.order-form')
  const orderFormBackBtn = document.querySelector('.order-form__back-btn')
  const typeSelectRef = document.querySelector('.quiz__type-select-wrapper .js-Dropdown-title')
  const typeMaterialRef = document.querySelector('.quiz__material-select-wrapper .js-Dropdown-title')
  const error = document.querySelector('.quiz-body__error')

  const inputWidth = document.querySelector('.quiz-input-width')
  const inputLength = document.querySelector('.quiz-input-length')

  inputWidth.addEventListener('input', () => {
    if (inputWidth.value.length > 0) inputWidth.style.border = '1px solid #9B9B9B'
  })

  inputLength.addEventListener('input', () => {
    if (inputLength.value.length > 0) inputLength.style.border = '1px solid #9B9B9B'
  })

  quizFinishBtn.addEventListener('click', () => {
    if (inputLength.value.length > 0 && inputWidth.value.length > 0){
      quizBody.style.transform = 'translateX(-200px)'
      quizBody.style.opacity = '0'
      setTimeout(() => {
        quizBody.style.display = 'none'
      }, 400)
      setTimeout(() => {
        orderFormRef.style.display = 'flex'
      }, 200)
      setTimeout(() => {
        orderFormRef.style.transform = 'translateX(0)'
        orderFormRef.style.opacity = '1'
      }, 250)

      quizData.type = typeSelectRef.innerHTML
      quizData.material = typeMaterialRef.innerHTML
      quizData.width = inputWidth.value
      quizData.length = inputLength.value
    }
    else {
      error.style.display = 'block'
      if (inputLength.value.length === 0) inputLength.style.border = '1px solid #ED1818'
      if (inputWidth.value.length === 0) inputWidth.style.border = '1px solid #ED1818'
    }
  })

  orderFormBackBtn.addEventListener('click', () => {
    orderFormRef.style.transform = 'translateX(200px)'
    orderFormRef.style.opacity = '0'
    setTimeout(() => {
      orderFormRef.style.display = 'none'
    }, 400)
    setTimeout(() => {
      quizBody.style.display = 'block'
    }, 200)
    setTimeout(() => {
      quizBody.style.transform = 'translateX(0)'
      quizBody.style.opacity = '1'
    }, 250)
  })

  orderForm()
  header()
  AOS.init({
    disable: 'mobile',
    duration: 1000,
    once: true
  })

}
