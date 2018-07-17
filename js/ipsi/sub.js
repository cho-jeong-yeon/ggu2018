
$(window).load(function(){
	/* 	header.top.jsp로 이동	*/
	var snbActive = $("#snb .depth2>li.active");
	snbActive.prev().addClass("prev");
	snbActive.next().addClass("next");
	var snbDepth3 = snbActive.find(".depth3");
	$("#contents").css("margin-top", ""+snbDepth3.height()+"px");


	if($(".snb .depth3 li.on").offset() != undefined){
		var snbDepthActive = $(".snb .depth3 li.on").offset().left;
		$(".snb .depth3").scrollLeft(snbDepthActive);
	}

	/* 전화번호 */
	$(".org-member-info .tel span").prepend("042-860-");
});


window.onload = function(){
	thumbnailResize();
}


function thumbnailResize() {
	var divs = document.querySelectorAll('.pinterest-board li > a .img');
	for (var i = 0; i < divs.length; ++i) {
		var div = divs[i];
		var divAspect = div.offsetHeight / div.offsetWidth;
		div.style.overflow = 'hidden';

		var img = div.querySelector('.pinterest-board li > a .img img');
		var imgAspect = img.height / img.width;

		if (imgAspect <= divAspect) {
			// 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
			var imgWidthActual = div.offsetHeight / imgAspect;
			var imgWidthToBe = div.offsetHeight / divAspect;
			var marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2)
			img.style.cssText = 'width: auto; height: 100%; margin-left: '
			+ marginLeft + 'px;'
		} else {
			// 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
			img.style.cssText = 'width: 100%; height: auto; margin-left: 0;';
		}
	}
};

$(document).ready(function(){

  $(".sns>a").click(function(){
    $(this).parent().toggleClass("active");
  });

	/* 탭메뉴 */
	$(".tab-nav a").on("click", function() {
		$(this).parent().addClass("active").siblings().removeClass("active");
		return false;
	});
	$(".director .tab-nav a").on("click", function() {
		$(this).parent().addClass("active").siblings().removeClass("active");
		$("html, body").animate({scrollTop: $(this.hash).offset().top}, 800, function(){});
		return false;
	});
	/* 아코디언 */
	$(".accordion>li>a").on("click", function(){
		$(this).parent().toggleClass("active").siblings().removeClass("active");
		return false;
	});



	// 가에꺼
	$(" .page-number-view-btn li > a").on("click", function() {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  $(" .pager > span > a").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
  });
	$(".board-style03 tbody tr").hover(function() {
    $(this).addClass("active").siblings().removeClass("active");
  });

  	/*----------------------------
 		SCROLLMAGIC
 		----------------------------*/
 		var ctrl = new ScrollMagic.Controller();
 		/*----------------------------
 		visual
 		----------------------------*/
   new ScrollMagic.Scene({ 'triggerElement': '.visual',  'triggerHook': 0,  'offset': 800 })
   .setPin('.visual')
   .addTo(ctrl);
 		/*----------------------------
 		sub0104-history
 		----------------------------*/
		$(".timeline>li:first").addClass("active");
		$(".timeline>li").each(function() {
    	new ScrollMagic.Scene({ triggerElement: this, duration: 2000, offset:-200 })
			//.setTween(this, {opacity:1, y:0})
			.setClassToggle(this, 'active')
      .addTo(ctrl);
  	});
		/*----------------------------
 		sub010402-역대기관장
 		----------------------------*/
		var directorTab = ".director .tab-nav";
		new ScrollMagic.Scene({ triggerElement: directorTab, 'triggerHook': 0, offset:0 })
		//.setTween(this, {opacity:1, y:0})
		//.setClassToggle('.director .tab-nav', 'active')
		.setPin(directorTab)
		.setClassToggle(directorTab, 'fixed')
		.addTo(ctrl);



});
