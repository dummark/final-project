import initSwiper from './swiper.js'
import toggleBtn from './menuButton.js'
import toggleButton from './swiperButton.js'
import burgerButton from './burger.js'

import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  initSwiper.init()
  toggleBtn.init()
  toggleButton.init()
  burgerButton.init()
})
