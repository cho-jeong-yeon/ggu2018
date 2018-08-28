$(document).ready(function(){
  var $gnb = $("#header .gnb");
  if($(window).width()>1024){
    $gnb.find('a').bind('focusin mouseover', function(){
      $gnb.parent().addClass('active');
      //$(this).parents('li').addClass('on').siblings().removeClass('on');
    });
    $gnb.bind('focusout mouseleave', function(){
      $(this).parent().removeClass('active');
      //$(this).find('li').removeClass('on');
    });
    $(".all-menu").bind('focusin mouseover', function(){
      $gnb.parent().addClass('active');
    });
    $(".all-menu").bind('focusout mouseleave', function(){
      $(this).parent().removeClass('active');
    });
  }else{
    $gnb.find('.depth1>a').click( function(){
      $(this).parent().parent().toggleClass('active').siblings().removeClass('active');
      //$header.addClass("pull");
      return false;
    });
  }
});
