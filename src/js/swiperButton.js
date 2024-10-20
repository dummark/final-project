const toggleButton = document.querySelector('.toggleButton')
const swiperHeight = document.querySelectorAll('.swiper-companies')
const arrows = document.querySelector('.arrows')

toggleButton.addEventListener('click', () => {
  swiperHeight.forEach((item) => {
    if (toggleButton.textContent == 'Скрыть') {
      item.style.height = '170px'
      toggleButton.textContent = 'Показать все'
      arrows.src = 'img/arrows.svg'
    } else {
      item.style.height = 'auto'
      toggleButton.textContent = 'Скрыть'
      arrows.src = 'img/arrowsreverse.svg'
    }
  })
})

export default toggleButton
