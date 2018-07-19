$(window).load(function(){

});



$(document).ready(function(){
  $(".down").on('click', function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top}, 800, function(){});
    return false;
  });


  //팝업
  $('#popup ul').bxSlider({
		auto			: true,
		autoHover		: true,
		speed			: 1000,
		pause			: 5000,
		//mode			: 'vertical',
		responsive		: true,
		pager			: true,
		autoControls	: false,
		controls		: false
	});


  setTimeout(function(){
    $('html, body').scrollTop(0);
  }, 200);

  setTimeout(function(){
    $('body').addClass('active');
    $('#visual svg').addClass('disable');
  }, 2500);

  setTimeout(function()
  {
    $('#visual').addClass('active');

  }, 3000);

// visual 꽃
  var path = $('#visual svg').find('path');
  path.each(function( i, path )
  {
    var speed = 1000 + (100 * i);
    var length = path.getTotalLength();
    //
    path.style.strokeDasharray = length + " " + length;
    //
    path.style.strokeDashoffset = length;
    //
    setTimeout(function(){
      $(path).animate({
        "strokeDashoffset" : 0
      },speed);
    }, 400);
  });

// visual bg 동동
  var timer;
  $(window).scroll(function(){
    clearTimeout(timer);
    timer = setTimeout( move , 100 );
  });
  var move = function (){
    $('.bg1, .bg2').toggleClass('active');
  };

  $('.card .item .tabs > li > a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
  });


  //금강을 읽다
  $('.webzine ul').bxSlider
  ({
    auto			: true,
    autoHover		: true,
    speed			: 1000,
    pause			: 5000,
    //mode			: 'vertical',
    responsive		: true,
    pager			: false,
    autoControls	: false,
    controls		: true
  });



  // 금강을누리다
  $('.popupzone ul').bxSlider
  ({
    auto			: true,
    autoHover		: true,
    speed			: 1000,
    pause			: 5000,
    mode			: 'vertical',
    responsive		: true,
    pager			: false,
    autoControls	: false,
    controls		: true
  });

  $('.service').find('a').on('mouseenter focusin', function()
  {
    $(this).parent('li').siblings('li').removeClass('active');
    $(this).parent('li').addClass('active');
  });



  setTimeout(function(){
      $(window).stop().scroll(function(){
        $('#main .group, #contents .group').each(function(index){
          if ( $('.group:eq(' + index + ')').parents('.group').length == 0 ){
            if ($(window).scrollTop() + ( ($(window).height() / 4) * 3) >= $('.group:eq(' + index + ')').offset().top){
              $('.group:eq(' + index + ')').addClass('active');

              if ($('.group.latest').hasClass('active') == true){
                $('#footer').addClass('active');
              }
            } else if ($(window).scrollTop() < $('.group:eq(0)').offset().top / 3){
              $('#contents > .group').removeClass('active');
              $('#footer').removeClass('active');
            }
          }
        });
      });
    }, 5500);




  $('.related .group').find('h2 a').on('click', function(){
	if ($(this).parents('.group').hasClass('active') == false){
		$(this).parents('.group').addClass('active');
	}else{
		$(this).parents('.group').removeClass('active');
	}
	return false;
	});






});
