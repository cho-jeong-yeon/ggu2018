
$(document).ready(function(){

//대메뉴
$('#gnb').on('mouseenter focusin', function(){
	$(this).parents('#header').addClass('active');
});
$('#header').on('mouseleave', function(){
  $(this).removeClass('active');
});

$('#gnb>li:last-child .depth2>li:last-child .depth3>li:last-child').on('focusout', function(){
  $('.drop-link .service ul>li:first-child').focus();
});
$('.drop-link .service ul>li:last-child').on('focusout', function(){
  $(this).parents('#header').removeClass('active');
});




});
