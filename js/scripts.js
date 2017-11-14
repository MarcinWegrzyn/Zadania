$(function(){
  
  var carouselList = $("#carousel ul");
   
      setInterval(changeSlide, 2500);
      carouselList.animate({'marginLeft':-640}, 500, moveFirstSlide);
        

  function changeSlide(){
    var firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
  }

});