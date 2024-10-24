import initSwiper from './swiper.js'
import handleResize from './swiper.js'
import menuButton from './menuButton.js'
import companiesButton from './companiesButton.js'
import burgerButton from './burger.js'
import servicesButton from './servicesButton.js'
import feedbackButton from './feedback.js'
import callbackButton from './callback.js'

import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  initSwiper.init()
  handleResize.init()
  menuButton.init()
  companiesButton.init()
  burgerButton.init()
  servicesButton.init()
  feedbackButton.init()
  callbackButton.init()
})
