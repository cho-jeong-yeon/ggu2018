$(document).ready(function(){

  $(".section1 .card-list").bxSlider({
	  auto: true,
	  autoControls: false,
	  stopAutoOnClick: true,
		mode : 'horizontal',
		controls : true,
		pager: false,
		maxSlides : 4,
		minSlides : 1,
		moveSlides : 1,
		slideWidth : 300
	});

  $('#quick .menu').find('a').on('click', function()
  {
    $(this).parents('#quick').addClass('active');

    return false;
  });
  $('#quick .group').find('.close').on('click', function()
  {
    $(this).parents('#quick').removeClass('active');

    return false;
  });
});
