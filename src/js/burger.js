const burgerButton = document.querySelector('.burger')

burgerButton.addEventListener('click', function () {
  this.classList.toggle('active')
  document.querySelector('burger-menu').classList.toggle('open')
})

export default burgerButton
