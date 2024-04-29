const menuButton = document.querySelector('.burger-menu')
const menuDiv = document.querySelector('.menu')
const menuClose = document.querySelector('.close-button')

export function burgerMenu() {
  function openMenu() {
    menuDiv.classList.remove('closed')
    menuDiv.classList.add('open')
  }

  function closeMenu() {
    menuDiv.classList.remove('active')
    menuDiv.classList.add('closed')
  }

  menuButton.addEventListener("click", function() {
    openMenu()
  })
  
  menuClose.addEventListener('click', function() {
    closeMenu()
  })
}