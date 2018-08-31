$(document).ready(function(){
  setTimeout(function(){
    $('body').addClass('active start');
  }, 300);

  //팝업
  $('#popup ul').bxSlider({
    auto			: true,
    autoHover		: true,
    speed			: 1000,
    pause			: 5000,
    mode			: 'vertical',
    responsive		: true,
    pager			: true,
    autoControls	: false,
    controls		: false
  });
  $('#popup .close').click(function(){
    $('#popup').addClass('close');
    return false;
  });

  $(".total-search").on('click', function() {
    $(this).addClass("active");
    $("#header nav").addClass("dimm");
  });
  $(".total-search-close").on('click', function() {
    $(".total-search").removeClass("active");
    $("#header nav").removeClass("dimm");
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

    // 테이블 캡션
    	$('.table-wrap').each(function(){
    		var tableTitle = $(this).prev().text();
    		var thArrayStr = "";
    		$(this).find('thead th').each(function(i){
    			thArrayStr += ", " + $(this).text();
    		});
    		$(this).find("table caption").html('<strong>' + tableTitle + '</strong>' + '<span>' + thArrayStr.substring(2) + '에 관한 정보' + '</span>' );
    	});

});


$(window).on("load scroll", function(){
  var el2 = $("#footer");
  if(el2.offset().top - 1200 <= $(window).scrollTop()){
    $(".go-top").addClass("stick");
  }else{
    $(".go-top").removeClass("stick");
  }

});
