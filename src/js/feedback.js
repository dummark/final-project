const feedbackButton = document.querySelector('.feedback')
const feedbackForm = document.querySelector('.feedback-form')
const overlay = document.createElement('div')
const callbackHide = document.querySelector('.callback')
const personHide = document.querySelector('.person')

overlay.classList.add('overlay')
document.body.appendChild(overlay)

feedbackButton.addEventListener('click', function () {
  feedbackButton.classList.toggle('active')
  feedbackForm.classList.toggle('open')

  if (feedbackForm.classList.contains('open')) {
    overlay.style.display = 'block'
  } else {
    overlay.style.display = 'none'
  }

  if (feedbackForm.classList.contains('open') && window.innerWidth < 768) {
    callbackHide.style.display = 'none'
  } else {
    callbackHide.style.display = 'flex'
  }

  if (feedbackForm.classList.contains('open') && window.innerWidth < 768) {
    personHide.style.display = 'none'
  } else {
    personHide.style.display = 'flex'
  }
})

overlay.addEventListener('click', function () {
  feedbackForm.classList.remove('open')
  overlay.style.display = 'none'
})

export default feedbackButton
