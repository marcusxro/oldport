function mybtn() {
    document.getElementById('navs').classList.toggle('active')
}

let line1 = document.querySelector('.announce')


window.onscroll = () => { 
    let fa = window.scrollY + -1500;
   line1.style.left = `${fa}px`

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




var loader = document.querySelector(".loader")

window.addEventListener("load", vanish)

function vanish (){
  loader.classList.add("disappear");
}



document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "HI.", "HOLA", "BONJOUR."];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".loaders").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 400);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }

  StartTextAnimation(0);
});

const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

let speed = 0.5; // change to increase the ease

function animate() {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;

    cursorX = cursorX + (distX * speed);
    cursorY = cursorY + (distY * speed);

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animate);
}


animate();

document.addEventListener('mousemove', (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
})
