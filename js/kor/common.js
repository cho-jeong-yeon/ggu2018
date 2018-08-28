
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
	$('.all-menu').on('click', function(){
		$('#header').addClass('all-menu-open');
	});
	$('.all-menu-close').on('click', function(){
		$('#header').removeClass('all-menu-open');
	});

  $('.service').find('a').on('mouseenter focusin', function()
  {
    $(this).parent('li').siblings('li').removeClass('active');
    $(this).parent('li').addClass('active');
  });


/* 퀵메뉴 */
	$('#quick .menu').find('a').on('mouseenter focusin', function()
	{
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
	});

	$('#quick .menu').find('a').on('click', function()
	{
		$(this).parents('#quick').addClass('active');

		return false;
	});

	$('#quick .banner').find('a').on('mouseenter focusin', function()
	{
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
	});

	$('#quick .link').find('a').on('mouseenter focusin', function()
	{
		$(this).siblings('a').removeClass('active');
		$(this).addClass('active');
	});

	$('#quick .group').find('.close').on('click', function()
	{
		$(this).parents('#quick').removeClass('active');

		return false;
	});




});
