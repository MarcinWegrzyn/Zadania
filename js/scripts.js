$(function(){
  
  var carouselList = $("#carousel ul");
  var slideInterval = setInterval(changeSlide, 1000);

  $("#carousel").mouseover(function() {
  clearInterval(slideInterval);
  });

  $("#carousel").mouseout(function() {
  slideInterval = setInterval(changeSlide, 1000);
  });

  function changeSlide(){
    carouselList.animate({'marginLeft':-1280}, 500, moveFirstSlide);

    function moveFirstSlide(){
      var  firstItem = carouselList.find("li:first"),
           lastItem = carouselList.find("li:last");
      lastItem.after(firstItem);
      carouselList.css({marginLeft:-640});
    }
  }

   function slideBack(){

    carouselList.animate({'marginLeft':0}, 500, moveFirstSlideBack);

    function moveFirstSlideBack(){
     var  firstItem = carouselList.find("li:first"),
          lastItem = carouselList.find("li:last");
      firstItem.before(lastItem);
      carouselList.css({marginLeft:-640});
    }
  } 

  $("#right").click(function(){
    changeSlide();
  });

  $("#left").click(function(){
    slideBack();
  });
});

