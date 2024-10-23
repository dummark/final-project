const feedbackButtons = document.querySelectorAll('.feedback')
const feedbackForm = document.querySelector('.feedback-form')
const overlay = document.createElement('div')

overlay.classList.add('overlay')
document.body.appendChild(overlay)

feedbackButtons.forEach((feedbackButton, index) => {
  feedbackButton.addEventListener('click', function () {
    feedbackButton.classList.toggle('active')
    feedbackForm.classList.toggle('open')

    if (feedbackForm.classList.contains('open')) {
      overlay.style.display = 'block'
    } else {
      overlay.style.display = 'none'
    }
  })
})

overlay.addEventListener('click', function () {
  feedbackForm.classList.remove('open')
  overlay.style.display = 'none'
})

export default feedbackButtons
