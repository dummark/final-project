const callbackButton = document.querySelector('.callback')
const callbackForm = document.querySelector('.callback-form')
const overlay = document.createElement('div')
const feedbackHide = document.querySelector('.feedback')
const personHide = document.querySelector('.person')

overlay.classList.add('overlay')
document.body.appendChild(overlay)

function toggleCallbackForm() {
  callbackButton.classList.toggle('active')
  callbackForm.classList.toggle('open')

  if (callbackForm.classList.contains('open')) {
    overlay.style.display = 'block'
  } else {
    overlay.style.display = 'none'
  }

  if (callbackForm.classList.contains('open') && window.innerWidth < 768) {
    feedbackHide.style.display = 'none'
    personHide.style.display = 'none'
  } else {
    feedbackHide.style.display = 'flex'
    personHide.style.display = 'flex'
  }
}

callbackButton.addEventListener('click', toggleCallbackForm)

overlay.addEventListener('click', function () {
  if (callbackForm.classList.contains('open')) {
    toggleCallbackForm()
  }
})

export default callbackButton
