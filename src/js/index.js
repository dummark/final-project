import initSwiper from './swiper.js'
import toggleBtn from './menuButton.js'
import companiesButton from './companiesButton.js'
import burgerButton from './burger.js'
import servicesButton from './servicesButton.js'

import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  initSwiper.init()
  toggleBtn.init()
  companiesButton.init()
  burgerButton.init()
  servicesButton.init()
})
