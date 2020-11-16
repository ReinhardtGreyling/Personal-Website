$(document).ready(function() {
    $(".parallax-container").mousemove(function(e) {
      
      let screenWidth = $(window).width();
      let screenHeight = $(window).height();
      
      $(".parallax").css({
        transform:
          "translate(-" + e.pageX/screenWidth * 20 + "px, -" + e.pageY/screenHeight * 20 + "px)"
      });
      
      $(".parallax .title").css({transform:
        "translate(" + e.pageX/screenWidth * 45 + "px, " + e.pageY/screenHeight * 45 + "px)"
      });
    });
  });