'use strict';

/*  */
/*
trackchain
이하 전체 테스트 스크립트입니다.
개발에 맞게 새로 작성해서 적용 부탁드립니다.
*/

// css 새로고침
/*
function cssRefresh(){
	let d = new Date();
	const cssLinks = document.querySelectorAll("link");
	for(var i = 0; i < cssLinks.length; i++) {
		if((cssLinks[i]).getAttribute('rel') == 'stylesheet') {
			let href = cssLinks[i].getAttribute('href');
			let newHref = href + "?v" + d.getMilliseconds();
			cssLinks[i].setAttribute('href', newHref);
		}
	}
}
cssRefresh();
*/
// css 새로고침 end



var $window = $(window);

var fullPage_layout;
fullPage_layout = {
	action : function(){
		$('.guide_fullpage').fullpage({
			verticalCentered: true,
			menu: '#menu',
			lockAnchors: false,
			anchors: ['page1','page2', 'page3', 'page4', 'page5', 'page6'],
			navigation: true,
			controlArrows:true,
			css3: true,
			slidesNavigation: false,
			slidesNavPosition: 'bottom',
			loopHorizontal : false,
			scrollingSpeed: 500,
			autoScrolling: true,
			dragAndMove: true,
			cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

			// 이동 시작시
			onLeave: function(origin, destination, direction){
				console.log("destination : " + destination)
				console.log("direction" + direction)
				if(destination > 1) {
					$("body > header").addClass("active")
				} else {
					$("body > header").removeClass("active")
				}

				if(destination > 5) {
					$("#fp-nav").addClass("active");
				} else {
					$("#fp-nav").removeClass("active");
				}

				// if(destination == 2 || destination == 3 || destination >= 5) {
				// 	$("body > header").addClass("active")
				// } 
				// else {
				// 	$("body > header").removeClass("active")
				// }

				// if(destination == 1 || destination == 4) {
				// 	$("#fp-nav").addClass("active");
				// } else {
				// 	$("#fp-nav").removeClass("active");
				// }
				
			}
		});	
	},
	reset : function(){

	}
}


$window.on('load', function(){
	if($($window).width() >= 768){
		$("header").removeClass("mobile")
		fullPage_layout.action();
	} else {
		$("header").addClass("mobile")
	}
})

$window.on('resize', function(){
	if($($window).width() >= 768){
		fullPage_layout.action();
	} else {
		$.fn.fullpage.destroy('all');
	}
})


/* 스크롤시 컨텐츠 배경색에 따라 로고, 햄버거버튼 색상 변경 */
$window.on('scroll', function(){
	var pos;
	pos = $(this).scrollTop();
	console.log(pos);

	var section1 = $("#section1").offset();
	var section3 = $("#section3").offset();
	var section4 = $("#section4").offset();
	var section5 = $("#section5").offset();

	var header_h = $("header").height();
	if (pos >= section1.top - (header_h/2) && pos <= section3.top - (header_h/2)) {
		$("body > header").addClass("active");
	} else if (pos >= section4.top - header_h){
		$("body > header").addClass("active");
	}
	else {
		$("body > header").removeClass("active");
	}


	if (pos > header_h) {
		$("body > header").addClass("active");
	}
	else {
		$("body > header").removeClass("active");
	}
})


/* 컨텐츠 슬라이드 */
$(".slide_slick").slick({
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 300,
	infinite:false,
	draggable: true,
	swipeToSlide: true,
	touchMove: true,
	// pauseOnHover: true,
	adaptiveHeight: true,
	swipe: true,
	arrows: false,
	dots: true
});


/* 모바일용 토글메뉴 */
$(".btn_menu_toggle").on("click", function(){
	$(".aside").toggleClass("active");
	// $("header").toggleClass("aside_on");
})

/* 삭제.
$(".aside div.btn-close button").on("click", function(){
	$(".aside").removeClass("active")
})
*/

/* 제휴 문의 보기 */
$(".open_partner").on("click", function(){
	$(".aside").removeClass("active");
	// $("header").removeClass("aside_on");
	$(".dim").show();
	$(".partner").show();
})

/* 제휴문의 닫기 */
$(".partner div.close").on("click", function(){
	$(".dim").hide();
	$(".partner").hide();
})


/* 약관 팝업 테스트 */
$("a").on("click", function(){
	var xxxx = $(this).attr("href");
	if(xxxx == "#test1") {
		$(".dim ").show();
		$("#test1").show();
	} else if(xxxx == "#test2") {
		$(".dim ").show();
		$("#test2").show();
	} else if(xxxx == "#test3") {
		$(".dim ").show();
		$("#test3").show();
	} else if(xxxx == "#test4") {
		$(".dim ").show();
		$("#test4").show();
	}
})

/* 약관 닫기 테스트 */
$("div.layer.full .close").on("click", function(){
	$(".dim").hide();
	$(this).parents("div.layer.full").hide();
})


/* 이벤트 슬라이드 */
$(".event_slide").slick({
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 300,
	infinite:false,
	draggable: true,
	swipeToSlide: true,
	touchMove: true,
	// pauseOnHover: true,
	adaptiveHeight: true,
	swipe: true,
	arrows: false,
	dots: true
});


/* 이벤트 닫기 */
$(".event .close button").on("click", function(){
	$(".dim").hide();
	$(".event ").hide();
})