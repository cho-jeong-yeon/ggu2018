
$(document).ready(function(){

//탭메뉴
$('.tabs > li').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active');
});


});
