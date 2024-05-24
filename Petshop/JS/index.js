const btnMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener('click', function(){
     menu.classList.toggle('show')
    });

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i = 0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener('click', function(){
     if(window.innerWidth < 720){
          const subMenu = this.nextElementSibling;
          const height = subMenu.scrollHeight;

          if(subMenu.classList.contains('desplegar')){
              subMenu.classList.remove('desplegar');
              subMenu.removeAttribute('style');
          }else{
              subMenu.classList.add('desplegar');
              subMenu.style.height = height + 'px';
          }
     }
     }
)};


window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      document.querySelector('.container_irArriba')
        .classList.add('mostrar_btn')
    } else {
      document.querySelector(".container_irArriba")
        .classList.remove('mostrar_btn')
    }
  }
  document.querySelector('.container_irArriba')
    .addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });