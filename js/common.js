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

    /* 아코디언 */
  	$(".accordion>li>a").on("click", function(){
  		$(this).parent().toggleClass("active").siblings().removeClass("active");
  		return false;
  	});

});

$(window).on("load scroll", function(){
	var el = $("#footer");
  console.log(el.offset().top, $(window).scrollTop());
  if(el.offset().top - 1200 <= $(window).scrollTop()){
    $(".go-top").addClass("stick");
  }else{
    $(".go-top").removeClass("stick");
  }
});
