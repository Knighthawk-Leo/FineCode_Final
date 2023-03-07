let ham_menu = document.querySelector("#menu-icon");
let menu = document.querySelector('.menu');

ham_menu.onclick = () => {
  ham_menu.classList.toggle('bx-x');
  menu.classList.toggle('open');
}

menu.onclick = () => {
  ham_menu.classList.remove('bx-x');
  menu.classList.remove('open');
}