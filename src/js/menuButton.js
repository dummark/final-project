const toggleBtn = document.querySelector('.toggle-btn')
const content = document.querySelector('.content')
const img = document.querySelector('img')

toggleBtn.addEventListener('click', () => {
  content.classList.toggle('hidden')
  if (content.classList.contains('hidden')) {
    toggleBtn.textContent = 'Читать далее'
    img.src = './img/arrows.svg'
    img.alt = 'Показать'
  } else {
    toggleBtn.textContent = 'Скрыть'
    img.src = '.img/arrowsreverse.svg'
    img.alt = 'Скрыть'
  }
})

export default toggleBtn
