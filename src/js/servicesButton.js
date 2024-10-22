const servicesButton = document.querySelector('.servicesButton')
const swiperHeight = document.querySelectorAll('.swiper-services')
const arrows = document.querySelector('.arrows-2')

servicesButton.addEventListener('click', () => {
  swiperHeight.forEach((item) => {
    if (servicesButton.textContent == 'Скрыть') {
      item.style.height = '170px'
      servicesButton.textContent = 'Показать все'
      arrows.src = 'img/arrows.svg'
    } else {
      item.style.height = 'auto'
      servicesButton.textContent = 'Скрыть'
      arrows.src = '/img/arrowsreverse.svg'
    }
  })
})

export default servicesButton
