const companiesButton = document.querySelector('.companiesButton')
const swiperHeight = document.querySelectorAll('.swiper-companies')
const arrows = document.querySelector('.arrows')

companiesButton.addEventListener('click', () => {
  swiperHeight.forEach((item) => {
    if (companiesButton.textContent == 'Скрыть') {
      item.style.height = '170px'
      companiesButton.textContent = 'Показать все'
      arrows.src = 'img/arrows.svg'
    } else {
      item.style.height = 'auto'
      companiesButton.textContent = 'Скрыть'
      arrows.src = 'img/arrowsreverse.svg'
    }
  })
})

export default companiesButton
