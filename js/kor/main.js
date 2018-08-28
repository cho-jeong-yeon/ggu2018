$(window).load(function(){

});



$(document).ready(function(){
  $(".down").on('click', function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top}, 800, function(){});
    return false;
  });



  setTimeout(function(){
    $('html, body').scrollTop(0);
  }, 200);


  setTimeout(function()
  {
    $('#visual').addClass('active');

  }, 500);

/*
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
    */

// visual bg 동동
  var timer;
  $(window).scroll(function(){
    clearTimeout(timer);
    timer = setTimeout( move , 100 );
  });

  var move = function (){
    $('.bg1, .bg2').toggleClass('active');
  };

  $('.card .item .tab-menu > li > a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
  });


  //이달의행사
  $('.event .calendar > ul').bxSlider
  ({
    auto			: false,
    autoHover		: true,
    infiniteLoop: false,
    mode: 'fade',
    speed			: 1000,
    pause			: 5000,
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

  //금강을 읽다
  $('.cover-story > ul').bxSlider
  ({
    auto			: true,
    autoHover		: true,
    //infiniteLoop: false,
    mode: 'horizontal',
    speed			: 1000,
    pause			: 2000,
    responsive		: true,
    maxSlides : 5,
    minSlides : 1,
    moveSlides : 1,
    slideWidth : 367,
    slideMargin : 48,
    shrinkItems : true,
    pager			: true,
    autoControls	: false,
    controls		: false,
    onSlideAfter : function($slideElement, oldIndex, newIndex){
      $('.cover-story .list-style li').removeClass('inactive');
      $('.cover-story .list-style li').eq(newIndex + 5).addClass('inactive');
      $('.cover-story .list-style li').eq(newIndex + 9).addClass('inactive');
    }
  });

  /*
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
*/







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
    }, 2500);


  $('.related .group').find('h2 a').on('click', function(){
	if ($(this).parents('.group').hasClass('active') == false){
		$(this).parents('.group').addClass('active');
	}else{
		$(this).parents('.group').removeClass('active');
	}
	return false;
	});



  //취업공지 행정공지
  $('.latest').find('h2 a').on('mouseenter focusin', function(){
		$(this).parents('article.group').siblings('.group').removeClass('active');
		$(this).parents('article.group').addClass('active');
	});







});
