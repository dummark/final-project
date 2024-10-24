let swiperInstance = null

function initSwiper() {
  swiperInstance = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 15,
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

function handleResize() {
  const screenWidth = window.innerWidth

  if (screenWidth >= 768) {
    if (swiperInstance) {
      swiperInstance.destroy(true, true)
      swiperInstance = null
    }
  } else {
    if (!swiperInstance) {
      initSwiper()
    }
  }
}

window.addEventListener('resize', handleResize)

window.addEventListener('load', () => {
  handleResize()
})
