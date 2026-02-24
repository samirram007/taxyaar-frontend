$(document).ready(function() {
 jQuery('.c-banner-w').slick({
      slidesToShow: 1,
      arrows: true,
     /* fade: true,
      cssEase: 'linear',*/
      dots: true,
      adaptiveHeight: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
       prevArrow:"<button type='button' class='slick-prev '><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next '><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
       
  });
});
 $(".c-menu-btn").click(function(){
     $(".c-nav-bottom-list").toggleClass("active");
  });  
  $(".c-nav-bottom-list").click(function(){
     $(".c-nav-bottom-list").toggleClass("active"); 
  }); 
  $(".c-nav-bottom-list > ul").click(function(event) {
    event.stopPropagation();
  });
  
