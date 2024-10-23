import initSwiper from './swiper.js'
import menuButton from './menuButton.js'
import companiesButton from './companiesButton.js'
import burgerButton from './burger.js'
import servicesButton from './servicesButton.js'
import feedbackButtons from './feedback.js'

import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  initSwiper.init()
  menuButton.init()
  companiesButton.init()
  burgerButton.init()
  servicesButton.init()
  feedbackButtons.init()
})
