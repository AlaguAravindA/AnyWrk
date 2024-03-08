/*http://callmenick.com/post/expanding-search-bar-using-css-transitions*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 20) {
    document.getElementById("logo_brand").style.fontSize = "25px";
  } else {
    document.getElementById("logo_brand").style.fontSize = "35px";
  }
}


(function($) {
    "use strict";
  
    var $navbar = $(".nav"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    //scroll top 0 sticky
    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
          $navbar.addClass("sticky");
        } else {
          $navbar.removeClass("sticky");  
        }
    });
    
    //section sticky
    // /*$(document).scroll(function() {
    //     var scrollTop = $(this).scrollTop();
    //     if ($(window).height() > scrollTop) {
    //       $navbar.removeClass("sticky");
    //     } else {
    //       $navbar.addClass("sticky");  
    //     }
    // });*/

})(jQuery, undefined);

$(".menu").click(function(){
  $("#nav").toggleClass("open");
});


