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
  // array with texts to type in typewriter
  var dataText = [ "HI.", "HOLA.", "BONJOUR."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".loaders").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 400);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});





let inner = document.querySelector('.cursor-inside')
let inners = document.querySelector('.cursor-insid')
let outer = document.querySelector('.cursor-outer')

document.addEventListener('mousemove', moveCursor)

function moveCursor(e) {
    let x = e.clientX
    let y = e.clientY
   
    inner.style.left = `${x}px`
    inner.style.top = `${y}px`

       
    inners.style.left = `${x}px`
    inners.style.top = `${y}px`

    outer.style.left = `${x}px`
    outer.style.top = `${y}px`
}

let links = Array.from(document.querySelectorAll("a"))

console.log(links)

links.forEach((link) => {
    link.addEventListener('mouseover',  () => {
            inner.classList.add('grow');
        });

});

