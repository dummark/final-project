const companiesButton = document.querySelector('.companiesButton')
const swiperHeight = document.querySelectorAll('.swiper-companies')

companiesButton.addEventListener('click', () => {
  swiperHeight.forEach((item) => {
    if (companiesButton.textContent.includes('Скрыть')) {
      item.style.height = '170px'
      companiesButton.innerHTML =
        '<img src="img/arrows.svg" alt="Показать всё"> Показать все'
    } else {
      item.style.height = 'auto'
      companiesButton.innerHTML =
        '<img src="img/arrowsreverse.svg" alt="Скрыть всё"> Скрыть'
    }
  })
})
export default companiesButton
