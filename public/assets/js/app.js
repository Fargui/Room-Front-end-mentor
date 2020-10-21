


const menuButton = document.querySelector('.menu-button')
const cross =  document.querySelector('.cross')
const nav = document.querySelector('.nav')
const filter = document.querySelector('.filter')
let isVisible = false

/* body.ready */ //doc ready like JQ


if (window.matchMedia("(max-width: 1200px)").matches) {
    nav.style.display = "none"

    menuButton.addEventListener('click', ()=>{
    
        isVisible = !isVisible;
    
        if (isVisible) { // La cross doit etre presente
            menuButton.setAttribute("src", "./images/icon-close.svg")
            nav.style.display = "initial"
            filter.style.display = "initial"
    
        }else{ // le burger doit etre present
            menuButton.setAttribute("src", "./images/icon-hamburger.svg")
            nav.style.display = "none"
            filter.style.display = "none"
        }
    })
  }



const prev = document.querySelector('.dir-left');
const next = document.querySelector('.dir-right');



