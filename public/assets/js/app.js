'use strict';

function currentSlide(n) {
  $('#top').animate({opacity: 0}, 'slow', function() {
    if (n == 1) {
      $(this)
      .css({'background-image':'url(../../public/images/wind1.jpg)'})
      .animate({opacity: 1});
  
    } else if (n == 2) {
      $(this)
      .css({'background-image':'url(../../public/images/wind2.jpg)'})
      .animate({opacity: 1});  
      
    } else if (n == 3) {
      $(this)
      .css({'background-image':'url(../../public/images/wind3.jpg)'})
      .animate({opacity: 1});  
    }

  });;
  
} 

var n = 1;
setInterval(function(){
  n = n > 3 ? 1 : n;
  currentSlide(n)
  n++;
},5000)