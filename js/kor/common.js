
$(document).ready(function(){


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



//대메뉴
$('#gnb').on('mouseenter focusin', function(){
	$(this).parents('#header').addClass('active');
});
$('#header').on('mouseleave', function(){
  $(this).removeClass('active');
	$('#gnb .depth1').removeClass('active');
	$('#gnb .depth2 > li').removeClass('active');
});

$('#gnb .depth1').on('mouseenter focusin',function(){
	$(this).addClass('active').siblings().removeClass('active');
});
$('#gnb .depth2 > li').on('mouseenter focusin', function(){
	$(this).addClass('active').siblings().removeClass('active');
});




});
