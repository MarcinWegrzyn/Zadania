$(function(){
  
  var carouselList = $("#carousel ul");
      setInterval(changeSlide, 1000);
      carouselList.animate({'marginLeft':-640}, 500, moveFirstSlide);
        
  function changeSlide(){
      var firstItem = carouselList.find("li:first"),
          lastItem = carouselList.find("li:last");
          lastItem.after(firstItem);
          carouselList.css({marginLeft:0});


  }
});

 /*  var buttonJs = document.getElementsByClassName( 'button' );
  ButtonJs.addEventListener('click', function(e) {
    carouselList.animate({'marginLeft':-640}, 500, moveFirstSlide);
    lastItem.after(firstItem);
          carouselList.css({marginLeft:0});     
    } */  