"use strict"

//Abrir
function submenu() {
    document.querySelector('.submenu').style.opacity = "1";
    document.querySelector('.submenu').style.right = "0";
    //document.querySelector('.submenu').style.animation = "translateX(-1%)";

    //Para el submenu entero
    const expandElement = document.querySelector('.submenu');
    expandElement.classList.add('expand');

    //Para la lista
    document.addEventListener('DOMContentLoaded', function() {
        const fadeList = document.getElementsByClassName('ul');
        fadeList.classList.add('show');
      });

   // busqueda.addEventListener('click').style.opacity = "1"
}
//Cerrar
function submenuC(){
    document.querySelector('.submenu').style.opacity = "0";
}


