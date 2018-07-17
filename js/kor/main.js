$(document).ready(function(){
  $(".down").on('click', function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top}, 800, function(){});
    return false;
  });

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

});
