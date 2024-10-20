let swiperInstance = null

function resetSwiperStyles() {
  const swiperSlides = document.querySelectorAll('.swiper-slide')
  const swiperWrapper = document.querySelector('.swiper-wrapper')
  const swiperContainer = document.querySelector('.swiper')

  swiperSlides.forEach((slide) => {
    slide.style.width = ''
    slide.style.marginRight = ''
  })

  if (swiperWrapper) {
    swiperWrapper.style.transform = ''
    swiperWrapper.style.transitionDuration = ''
    swiperWrapper.style.width = ''
  }

  if (swiperContainer) {
    swiperContainer.style.overflow = ''
    swiperContainer.style.width = ''
    swiperContainer.style.height = ''
  }
}

function initSwiper() {
  if (window.innerWidth <= 768) {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.swiper', {
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
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true)
      swiperInstance = null
      const pagination = document.querySelector('.swiper-pagination')
      if (pagination) pagination.innerHTML = ''
      resetSwiperStyles()
    }
  }
}

window.addEventListener('resize', function () {
  initSwiper()
})

document.addEventListener('DOMContentLoaded', function () {
  initSwiper()
})

export default initSwiper
