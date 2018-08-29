
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

	var fixItem = $(".cont-top");
  var baseline = $(".cont-wrap");
  if(fixItem.offset().top <= $(window).scrollTop()){  fixItem.addClass("fixed");  }
  if(baseline.offset().top > $(window).scrollTop()){  fixItem.removeClass("fixed");  }
});
