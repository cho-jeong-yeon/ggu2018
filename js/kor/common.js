
$(document).ready(function(){


	//대메뉴
	$('#gnb').on('mouseenter focusin', function(){
		$(this).parents('#header').addClass('active');
	});
	$('#header').on('mouseleave', function(){
	  $(this).removeClass('active');
		$('#gnb .depth1').removeClass('active');
		$('#gnb .depth2 > li').removeClass('active');
	});
	if($(window).width()>1024){
		$('#gnb .depth1').on('mouseenter focusin',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('#gnb .depth2 > li').on('mouseenter focusin', function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	}else{
		$('#gnb .depth1').on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			return false;
		});
	}


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

	/* 퀵메뉴 팝업존 */
	$('#quick-popup .menu').find('a').on('click', function()
	{
		$(this).parents('#quick-popup').addClass('active');

		return false;
	});
	$('#quick-popup .group').find('.close').on('click', function()
	{
		$(this).parents('#quick-popup').removeClass('active');

		return false;
	});

});

$(window).resize(function(){
	if($(window).width()>1024){
		$('#gnb .depth1').on('mouseenter focusin',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('#gnb .depth2 > li').on('mouseenter focusin', function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	}else{
		$('#gnb .depth1>a').on('click',function(){
			$(this).parent().addClass('active').siblings().removeClass('active');
			return false;
		});
	}
})
