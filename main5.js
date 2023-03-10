var count = 0;
var counterElement = document.querySelector('#counter');
var animationElement = document.querySelector('.animation');
      
animationElement.addEventListener("animationiteration", function() {
        count++;
        counterElement.innerHTML = Math.floor(count/2);
});