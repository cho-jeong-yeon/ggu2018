
$(document).ready(function(){

	//탭메뉴
	$('.tabs > li').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	$(".cont-tabs>li>a").click(function() {
		$(this).parent().addClass('active').siblings().removeClass('active');

		$(".tab-con").hide();

		var activeTab = $(this).attr("href");
		$(activeTab).fadeIn();

		return false;
	});

	/* 별표 레이어 오픈 */
	$(".star-table-open").click(function(){
		$(this).next().addClass("active");
	});
	$(".star-table-layer .close-btn").click(function(){
		$(this).parent().removeClass("active");
		return false;
	});
	
});

$(window).on("load scroll", function(){

	var fixItem = $(".cont-top");
  var baseline = $(".cont-wrap");
  if(fixItem.offset().top <= $(window).scrollTop()){  fixItem.addClass("fixed");  }
  if(baseline.offset().top > $(window).scrollTop()){  fixItem.removeClass("fixed");  }
});
