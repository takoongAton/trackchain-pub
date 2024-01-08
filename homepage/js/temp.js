'use strict';

/*  */
/*
trackchain
이하 전체 테스트 스크립트입니다.
개발에 맞게 새로 작성해서 적용 부탁드립니다.
*/

let pos;
let header = document.querySelector("header");
let videoTag = document.getElementById("track_video");


var fullPage_layout;
fullPage_layout = {
	action : function(){
		$('.guide_fullpage').fullpage({
			verticalCentered: true,
			menu: '#menu',
			lockAnchors: false,
			anchors: ['page1','page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
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
				if(destination.index > 0) {
					header.classList.add("active");
				} else {
					header.classList.remove("active");
					videoTag.play();
				}
				if(destination.index > 5) {
					document.querySelector("#fp-nav").classList.add("active");
				} else {
					document.querySelector("#fp-nav").classList.remove("active");
				}
			},
		});	
	},
	reset : function(){

	}
}

/* 화면 최소 사이즈 */
window.addEventListener("load", function(){
	if(this.window.innerWidth >= 768 && this.window.innerHeight >= 900){
		header.classList.remove("mobile");
		fullPage_layout.action();
	} else {
		header.classList.add("mobile");
	}
})

window.addEventListener("resize", function(){
	if(this.window.innerWidth >= 768 && this.window.innerHeight >= 900){
		fullPage_layout.action();
	} else {
		$.fn.fullpage.destroy('all');
	}
})

/* 스크롤시 컨텐츠 배경색에 따라 로고, 햄버거버튼 색상 변경 */
window.addEventListener("scroll", function(){
	pos = window.scrollY;
	console.log(pos);
	let header_h = header.clientHeight;
	if (pos > header_h) {
		header.classList.add("active");
	}
	else {
		header.classList.remove("active");
	}
})


/* 컨텐츠 슬라이드 추가작업용 샘플 */
if(document.querySelector(".press_slick_wrap")){
	console.log("press_slick_wrap")
	$(".press_slick_wrap").slick({
		autoplay: false,
		autoplaySpeed: 5000,
		speed: 300,
		infinite:false,
		draggable: true,
		swipeToSlide: true,
		touchMove: true,
		// pauseOnHover: true,
		adaptiveHeight: true,
		swipe: true,
		arrows: true,
		// dots: true,
	});
}

if(document.querySelector(".partners_slick_wrap")){
	console.log("partners_slick_wrap")
	let partnersSlickItems = document.querySelectorAll(".partners_slick_wrap .partners_slick_item");
	if(partnersSlickItems.length > 1) {
		$(".partners_slick_wrap").slick({
			autoplay: false,
			autoplaySpeed: 5000,
			speed: 300,
			infinite:false,
			draggable: true,
			swipeToSlide: true,
			touchMove: true,
			// pauseOnHover: true,
			adaptiveHeight: true,
			swipe: true,
			arrows: true,
			// dots: true,
		});
	}
}







/* 모바일용 토글메뉴 */
let aside = document.querySelector(".aside");
let btnMenuToggle = document.querySelector(".btn_menu_toggle");
let asideLinks = aside.querySelectorAll("a");

btnMenuToggle.addEventListener("click", function(){
	aside.classList.add("active");
})
/* 모바일 메뉴 닫기 */

asideLinks.forEach(function(item,index){
	item.addEventListener("click", function(){
		for(let i = 0; i< asideLinks.length;i++){
			asideLinks[i].classList.remove("active");
		}
		this.classList.add("active");
		aside.classList.remove("active");
	})
})

/* 모바일 메뉴 닫기 */
let btnAsideClose = aside.querySelector(".btn_close");
btnAsideClose.addEventListener("click", function(){
	aside.classList.remove("active");
})
/* // 모바일 메뉴 닫기 */




/* ========================== */

/* business 탭 */
let businessTabs = document.querySelectorAll(".business_tab button");
let tabContents = document.querySelectorAll(".business_con .tab_content");

businessTabs.forEach(function (item, index) {
  item.addEventListener("click", function () {
    // console.log(index);
    for (let i = 0; i < businessTabs.length; i++) {
      tabContents[i].style.display = "none";
	  tabContents[i].classList.remove("active");
      businessTabs[i].classList.remove("active");
    }

    tabContents[index].classList.add("active");
	tabContents[index].style.display = "flex";
    businessTabs[index].classList.add("active");
  });
});

let businessTabAction = document.querySelector(".business_tab button.active"); // 처음에 보여지고 싶은거.
businessTabAction.click();
/* business 탭 */