$(document).ready(function(){

   //owl_carousel
     
   var carouselEl = $(".owl-1").owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});



$(".my-next-button").click(function() {
  carouselEl.trigger('next.owl.carousel');
});

$(".my-previous-button").click(function() {
  carouselEl.trigger('prev.owl.carousel');
});





document.getElementById("icon1").onclick=function(){
  this.classList.toggle("red") ;}
  document.getElementById("icon2").onclick=function(){
  this.classList.toggle("red") ;}
  document.getElementById("icon3").onclick=function(){
  this.classList.toggle("red") ;}
  document.getElementById("icon4").onclick=function(){
  this.classList.toggle("red") ;}
  document.getElementById("icon5").onclick=function(){
  this.classList.toggle("red") ;}
  document.getElementById("icon6").onclick=function(){
  this.classList.toggle("red") ;}  
     
  




  });

 