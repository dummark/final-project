const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger-menu')
const burgerHide = document.querySelector('.burger-hide')
const burgerElements = document.querySelector('.burger-elements')

const overlay = document.createElement('div')
overlay.classList.add('overlay')
document.body.appendChild(overlay)

function toggleMenu() {
  burgerButton.classList.toggle('active')
  burgerElements.classList.toggle('active')
  burgerMenu.classList.toggle('open')

  if (burgerMenu.classList.contains('open')) {
    overlay.style.display = 'block'
  } else {
    overlay.style.display = 'none'
  }

  if (burgerHide.classList.contains('burger-hide')) {
    burgerHide.classList.remove('burger-hide')
  } else {
    burgerHide.classList.add('burger-hide')
  }
}

burgerButton.addEventListener('click', toggleMenu)

overlay.addEventListener('click', function () {
  if (burgerMenu.classList.contains('open')) {
    toggleMenu()
  }
})

export default burgerButton
