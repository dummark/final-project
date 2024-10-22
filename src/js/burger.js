const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger-menu')
const burgerHide = document.querySelector('.burger-hide')
const topLayer = document.querySelector('.top-layer')

burgerButton.addEventListener('click', function () {
  this.classList.toggle('active')
  burgerMenu.classList.toggle('open')

  if (burgerHide.classList.contains('burger-hide')) {
    burgerHide.classList.remove('burger-hide')
  } else {
    burgerHide.classList.add('burger-hide')
  }
})

export default burgerButton
