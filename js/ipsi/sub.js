
$(document).ready(function(){


});

$(window).on("load scroll", function(){

	var fixItem = $(".cont-top");
  var baseline = $(".cont-wrap");
  if(fixItem.offset().top <= $(window).scrollTop()){  fixItem.addClass("fixed");  }
  if(baseline.offset().top > $(window).scrollTop()){  fixItem.removeClass("fixed");  }


});
