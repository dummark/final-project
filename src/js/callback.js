const callbackButton = document.querySelector('.callback')
const callbackForm = document.querySelector('.callback-form')
const overlay = document.createElement('div')
const feedbackHide = document.querySelector('.feedback')
const personHide = document.querySelector('.person')

overlay.classList.add('overlay')
document.body.appendChild(overlay)

callbackButton.addEventListener('click', function () {
  callbackButton.classList.toggle('active')
  callbackForm.classList.toggle('open')

  if (callbackForm.classList.contains('open')) {
    overlay.style.display = 'block'
  } else {
    overlay.style.display = 'none'
  }

  if (callbackForm.classList.contains('open') && window.innerWidth < 768) {
    feedbackHide.style.display = 'none'
  } else {
    feedbackHide.style.display = 'flex'
  }

  if (callbackForm.classList.contains('open') && window.innerWidth < 768) {
    personHide.style.display = 'none'
  } else {
    personHide.style.display = 'flex'
  }
})

overlay.addEventListener('click', function () {
  callbackForm.classList.remove('open')
  overlay.style.display = 'none'
})

export default callbackButton
