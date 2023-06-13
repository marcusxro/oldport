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
     document.getElementById('menus').classList.toggle('shows')
}


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var reveal = document.querySelectorAll('.labas');

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
  
  let skew = dif*.08;
  let rotate = dif*.08;

 content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;
  currentPosition = newPosition;
  requestAnimationFrame(skewEffect);
}


skewEffect();



  window.addEventListener('scroll', labas);

function labas() {
    var reveal = document.querySelectorAll('.labas');
    for(var i = 0; i < reveal.length; i++){
      var windowheights = window.innerHeight;
      var revealtops = reveal[i].getBoundingClientRect().top;
      var revealpoints = 150;
    
      if (revealtops < windowheights - revealpoints) {
          reveal[i].classList.add('show')
      } 
       else {
          reveal[i].classList.remove('show')
      }


}
    }


    
  window.addEventListener('scroll', pops);

  function pops() {
      var revel = document.querySelectorAll('.imahe');
      for(var i = 0; i < revel.length; i++){
        var windowheights = window.innerHeight;
        var revealtops = revel[i].getBoundingClientRect().top;
        var revealpoints = 150;
      
        if (revealtops < windowheights - revealpoints) {
          revel[i].classList.add('showss')
        } 
         else {
          revel[i].classList.remove('showss')
        }
  
  
  }
      }

      
    
  