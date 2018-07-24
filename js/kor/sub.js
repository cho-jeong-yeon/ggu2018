
$(document).ready(function(){

//탭메뉴
$('.tabs > li').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active');
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
