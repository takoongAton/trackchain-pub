/* 스크립트는 참고만 해주세요. */

var pos;
window.addEventListener('scroll', function(){
    pos = window.scrollY;
    header.header_set(pos); // 그림자 넣기
});



/* 컨텐츠의 높이값이 작을때 */
var layout;
layout = {
	load : function(){
		var wrap = $(".wrap");
		if(wrap.outerHeight() <= window.innerHeight) {
			$("html").addClass("flexCol");
		} else {
			$("html").removeClass("flexCol");
		}
	},
	active : function(pos){
		var wrap = $(".wrap");
		if(wrap.outerHeight() < window.innerHeight) {
			$("html").addClass("flexCol");
		} else {
			$("html").removeClass("flexCol");
		}
	},
	observerAction : function(){
		var wrap = $(".wrap");
		var header = $(".wrap header");
		if(!header) {
			if(wrap.outerHeight() < window.innerHeight) {
				$("html").addClass("flexCol");
				return;
			} else {
				$("html").removeClass("flexCol");
				return;
			}
		} else {
			if(window.innerHeight >= ($(header).prop('scrollHeight') + $("section").prop('scrollHeight'))) {
				$("html").addClass("flexCol");
				return;
			} else {
				$("html").removeClass("flexCol");
				return;
			}
		}
	}
}
layout.load();

// On element change. test1
$('section').on('DOMSubtreeModified', function () {
	layout.observerAction();
});




/* modal, alert 배경 클릭시 팝업 닫기 */
// $(".layer .dim").on("click", function(){
//     $(this).parents('.layer').hide();
// })


/*
function containerPadding(){
	var $container = $("body .container");
	$container.each(function(){
		var $footerBtn = $(this).siblings("footer");
		footerHeight = $footerBtn.outerHeight() + 15;
		$(this).css({
			"padding-bottom" : footerHeight
		})
	})
}
containerPadding();
*/


$(".input_form_title.toggle").on("click", function(){
	$(this).next(".input_form_cont").toggle()
})

/* depth2 메뉴 구분선 추가 */
// $(".gnb_sub a").before( "<span class='bar'></span>" );




/* 헤더 그림자 넣기 */
var header;
header = {
	item : document.querySelector('header'),
	header_set : function(pos){
		if(header.item == null) {
			return;
		}
		if(pos > header.item.offsetHeight) {
			header.item.classList.add('active')
		} else {
			header.item.classList.remove('active')
		}
		// (pos > header.item.offsetHeight * 1.5) ? header.item.classList.add('active') : header.item.classList.remove('active');
	}
}








window.onload = function(){


	/* footer 간격 샘플 */
	var footer_wrap;
	footer_wrap = {
		item : document.querySelector('.divide_bottom'),
		footer_wrap : document.querySelector('.footer_wrap'),
		active : function(pos){
			if(footer_wrap.item == null || footer_wrap.footer_wrap == null) {
				return;
			}

			footer_wrap.footer_wrap.style.marginTop = 0;
		}
	}
	footer_wrap.active();


}



/* 페이지로딩시section_bottom 영역이 있고 없고에 따라 class 추가/삭제 */
let content_wrap = document.querySelector(".content_wrap")
// let sectionBottom = content_wrap.querySelector(".section_bottom");
// if(sectionBottom != null) {
// 	content_wrap.classList.add("divide")
// }




/* 지갑 생성/복구 하단 체크 샘플 */
let section_bottom = document.querySelector(".section_bottom")
if(section_bottom != null) {
	let btmChkbox = section_bottom.querySelector(".btmChk input[type='checkbox']");
	let btn_submit = section_bottom.querySelector(".section_bottom button.next");
	if(btmChkbox != null) {
		btmChkbox.addEventListener("click", function(){
			const agree = this.checked;
			if(agree) {
				btn_submit.disabled = false;
			} else {
				btn_submit.disabled = true;
			}
		})
	}
}


// let appFooterWrap = document.querySelector(".app_footer_wrap");
// if(appFooterWrap != null) {
// 	let appFooterWrapHeight = appFooterWrap.offsetHeight;
// 	document.querySelector(".content_wrap").style.paddingBottom = appFooterWrapHeight +  'px';
// }

let keypad = document.querySelector(".keypad");
if(keypad != null) {
	let btn = keypad.querySelectorAll("button.number");
	btn.forEach(function(item){
		item.addEventListener("click", function(){
			item.classList.add("active")
			setTimeout(function(){
				item.classList.remove("active")
			}, 200)
		})
		
	})
}


let headerTemp = document.querySelector("header.home");
if(headerTemp != null) {
	let homeMyAccount = document.querySelector(".homeMyAccount");
	homeMyAccount.querySelector(".inner").style.paddingTop = headerTemp.offsetHeight + 'px';
}


let btnCopy = document.querySelectorAll("button.btnCopy");
if(btnCopy != null) {
	btnCopy.forEach(function(item){
		item.addEventListener("click", function(){
			alert("복사했다 치고.")
		})
	})
}





/* PICK start */

let layersAlert = document.querySelectorAll(".layer.alert");
if(layersAlert.length > 0) {
	fnCloseLayer(layersAlert)
}

let layersModal = document.querySelectorAll(".layer.modal");
if(layersModal.length > 0) {
	fnCloseLayer(layersModal)
}

let layersFooter = document.querySelectorAll(".layer.footer")
if(layersFooter.length > 0) {
	fnCloseLayer(layersFooter)
}

/* alert은 닫기 footer는 active 지우기 */
function fnCloseLayer(layers){
	if(layers.length > 0) {
		layers.forEach(function(item,index){
			let ttt = item.getAttribute('class');
			if(ttt.indexOf('alert') != -1) {
				let btnClose = item.querySelector(".btnClose button");
				btnClose.addEventListener("click", function(){
					btnClose.parentElement.closest(".layer").style.display = 'none'
					fnDelLayerDim();
				})
			} else if(ttt.indexOf('modal') != -1) {
				let btnClose = item.querySelector(".btnClose button");
				btnClose.addEventListener("click", function(){
					btnClose.parentElement.closest(".layer").style.display = 'none'
					fnDelLayerDim();
				})
			} else if(ttt.indexOf('footer') != -1) {
				let btnClose = item.querySelector(".btnClose button");
				btnClose.addEventListener("click", function(){
					btnClose.parentElement.closest(".layer").classList.remove("active");
					fnDelLayerDim();
				})	
			}
		})
	}
}

/* dim 투명도 제거 후 삭제하기 */
function fnDelLayerDim(){
	document.querySelector(".layer.dim").style.opacity = 0;
	setTimeout(function(){
		document.querySelector(".layer.dim").style.display = 'none';
	}, 200)
}


/* 기본 버튼 클릭시 움찔하기 */
let btns = document.querySelectorAll("button.btn");
if(btns.length > 0) {
	btns.forEach(function(item,index){
		item.addEventListener("click", function(){
			this.classList.add("active");
			fnRemoveActive(item);
		})
	})
}

/* class active 지우기 */
function fnRemoveActive(arg){
	let temp = arg;
	setTimeout(function(){
		temp.classList.remove("active")
	}, 200)
}



/* nft viewer click */
let nftItemList = document.querySelector(".nft_small_list");
let nftItems = nftItemList.querySelectorAll(".item");
if(nftItems.length > 0) {
	nftItems.forEach(function(item,index){
		item.addEventListener("click", function(){
			removeClass(nftItems);
			item.classList.add("active");
		})
	})
}
function removeClass(nftItems){
	nftItems.forEach(function(item,index){
		item.classList.remove("active")
	})
}
/* // nft viewer click */




/* layout */
const wrap_temp = document.querySelector(".wrap");
const header_temp = wrap_temp.querySelector(".header_wrap")
const container_temp = wrap_temp.querySelector(".container_wrap")
const footer_temp = wrap_temp.querySelector(".footer_wrap")
const app_footer_temp = wrap_temp.querySelector(".app_footer_wrap")

if(container_temp && footer_temp && app_footer_temp) {
	footer_temp.style.paddingBottom = app_footer_temp.clientHeight + "px";
	container_temp.style.paddingBottom = footer_temp.clientHeight + "px"
} else if(container_temp && footer_temp) {
	container_temp.style.paddingBottom = footer_temp.clientHeight + "px"
} else if(container_temp && app_footer_temp) {
	container_temp.style.paddingBottom = app_footer_temp.clientHeight + "px";
}