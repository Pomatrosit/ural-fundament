import IMask from 'imask'

export const orderForm = () => {
  const  element = document.getElementById('order-form__phone');
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  }

  const phone = IMask(element, maskOptions);
  const name = document.querySelector('.order-form__name')
  const error = document.querySelector('.order-form__error-message')
  const submitBtn = document.querySelector('.order-form__send-btn')
  const checkBox = document.querySelector('.privacy-checkbox')
  const checkBoxInner = checkBox.querySelector('.privacy-checkbox-inner')
  const loader = document.querySelector('.loader-wrap')
  const firstStep = document.querySelector('.order-form-first-step')
  const secondStep = document.querySelector('.order-form-second-step')
  const finalTextRef = document.querySelector('.order-form__success-title')

  let checked = true

  let finalText = 'Спасибо за доверие!'

  checkBox.addEventListener('click', () => {
    if (checked) checkBoxInner.style.opacity = '0'
    else checkBoxInner.style.opacity = '1'
    checked = !checked
  })

  submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if (name.value.length < 2 || phone.value.length < 16 || !checked) {
      error.style.display = 'block'
    }
    else {
      error.style.display = 'none'
      let quizData
      if (window.quizData) quizData = window.quizData
      else quizData = {
        type: '',
        material: '',
        width: '',
        length: '',
        name: '',
        phone: ''
      }
      quizData.name = name.value
      quizData.phone = phone.value
      loader.style.display = 'block'
      submitBtn.classList.add('btn-disabled')
      //////// Отправка
      fetch('https://ural-fundment.ru/mail.php', {
        method: 'POST',
        body: JSON.stringify(quizData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      //////
      console.log(quizData)
      setTimeout(() => {
        firstStep.style.transform = 'translateX(-50%)'
        secondStep.style.transform = 'translateX(-50%)'
        finalTextRef.innerHTML = finalText
      }, 500)
    }
  })
}
