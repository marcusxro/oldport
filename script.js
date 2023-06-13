var loader = document.querySelector(".loader")
window.addEventListener("load", vanish)

function vanish (){
  loader.classList.add("disappear");

}


function mybtn() {
    document.getElementById('menus').classList.toggle('active')
    document.getElementById('lions').classList.toggle('pop')
    document.getElementById('lionss').classList.toggle('poptwo')
    document.getElementById('gaga').classList.toggle('popthree')
    document.getElementById('gago').classList.toggle('popfour')
}


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('actives')
    } 
     else {
        reveals[i].classList.remove('actives')
    }

}
}

const content = document.querySelector('section') 
let currentPosition = window.pageYOffset;

function skewEffect() {
  const newPosition = window.pageYOffset;
  const dif = newPosition - currentPosition;
  
  let skew = dif*.2;
  let rotate = dif*.1;

 content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;
  currentPosition = newPosition;
  requestAnimationFrame(skewEffect);
}


skewEffect();


