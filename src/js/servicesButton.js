const servicesButton = document.querySelector('.servicesButton')
const swiperHeight = document.querySelectorAll('.swiper-services')

servicesButton.addEventListener('click', () => {
  swiperHeight.forEach((item) => {
    if (servicesButton.textContent.includes('Скрыть')) {
      item.style.height = '170px'
      servicesButton.innerHTML =
        '<img src="img/arrows.svg" alt="Показать всё"> Показать все'
    } else {
      item.style.height = 'auto'
      servicesButton.innerHTML =
        '<img src="img/arrowsreverse.svg" alt="Скрыть всё"> Скрыть'
    }
  })
})
export default servicesButton
