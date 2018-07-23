$(document).ready(function(){

  setTimeout(function(){
    $('body').addClass("start");
  },500);

  $(".total-search").on('click', function() {
    $(this).addClass("active");
  });
  $(".total-search-close").on('click', function() {
    $(".total-search").removeClass("active");
  });
    //contents

  	$(".nav .title").click(function(){
  		$(this).parent().toggleClass('active');
      return false;
  	});
    $(".top-btn, .down>a").on('click', function() {
      $('html, body').animate({scrollTop: $(this.hash).offset().top}, 800, function(){});
      return false;
    });
    $(".relate-site .title").on("click", function(){
  		$(this).parent().toggleClass("active");
      return false;
  	});
    $(".tab-nav").on("click", function(){
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    });


});
