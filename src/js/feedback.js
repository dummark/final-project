const feedbackButton = document.querySelector('.feedback')
const feedbackForm = document.querySelector('.feedback-form')
const overlay = document.createElement('div')
const callbackHide = document.querySelector('.callback')
const personHide = document.querySelector('.person')

overlay.classList.add('overlay')
document.body.appendChild(overlay)

function toggleFeedbackForm() {
  feedbackButton.classList.toggle('active')
  feedbackForm.classList.toggle('open')

  if (feedbackForm.classList.contains('open')) {
    overlay.style.display = 'block'
  } else {
    overlay.style.display = 'none'
  }

  if (feedbackForm.classList.contains('open') && window.innerWidth < 768) {
    callbackHide.style.display = 'none'
    personHide.style.display = 'none'
  } else {
    callbackHide.style.display = 'flex'
    personHide.style.display = 'flex'
  }
}

feedbackButton.addEventListener('click', toggleFeedbackForm)

overlay.addEventListener('click', function () {
  if (feedbackForm.classList.contains('open')) {
    toggleFeedbackForm()
  }
})

export default feedbackButton
