const menuButton = document.querySelector('.menuButton')
const content = document.querySelector('.content')

menuButton.addEventListener('click', () => {
  content.classList.toggle('hidden')
  if (content.classList.contains('hidden')) {
    menuButton.innerHTML =
      '<img src="./img/arrows.svg" alt="Показать"> Читать далее'
  } else {
    menuButton.innerHTML =
      '<img src="./img/arrowsreverse.svg" alt="Скрыть"> Скрыть'
  }
})

export default menuButton
