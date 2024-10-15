var init = false
var swiper
function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        }
      })
    }
  } else if (init) {
    swiper.destroy()
    init = false
  }
}

swiperCard()
window.addEventListener('resize', swiperCard)

export default swiper
