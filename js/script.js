var typed = new Typed('.multiple', {
    strings: ["Front-end Developer.","NodeJs Developer.","Express Developer.","C programmer."],
    typeSpeed: 50,
	  backSpeed:50,
	  backDelay:1000,
	  loop:true
  });

$('body').ripples({
	resolution: 128,
  dropRadius: 20,
  perturbance: 0.7,
  rippleClass: 'fast-ripple'
});


var calc=document.querySelector('.calc');
calc.addEventListener('click',()=>{
  window.location.href='https://selva-rajt.github.io/calc';
});

var flames=document.querySelector('.flames');
flames.addEventListener('click',()=>{
  window.location.href='https://selva-rajt.github.io/flames';
});
var weather=document.querySelector('.weather');
weather.addEventListener('click',()=>{
  window.location.href='https://selva-rajt.github.io/weatherapp/ ';
});
var web=document.querySelector('.web');
web.addEventListener('click',()=>{
  window.location.href='https://selva-rajt.github.io/simple-web-pages-using-bootstrap/ ';
});
