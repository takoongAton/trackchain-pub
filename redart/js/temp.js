/*
// 스크립트는 임의로 만든 것입니다.
// 재작성 및 정리 부탁드립니다.
*/

let windowPos = 0;

const wrap = document.querySelector(".wrap");
const headerWrap = document.querySelector(".header_wrap");
const containerWrap = document.querySelector(".container_wrap");
const footerWrap = document.querySelector(".footer_wrap");

window.addEventListener("load", function(){
	fixedContainer();
})


/* splash, login 등 페이지에 필요함 */
if(!headerWrap){
	document.querySelector("html").style.height = 100 + "%";
	document.querySelector("body").style.height = 100 + "%";
	wrap.style.height = 100 + "%";
	wrap.style.display = "flex";
	wrap.style.flexDirection = "column";
	containerWrap.style.height = 100 + "%";
} else if(headerWrap) {
	containerWrap.style.paddingTop = headerWrap.offsetHeight + 'px';
}

let gnb = document.querySelector(".gnb_wrap");
if(gnb) {
	gnbHeight = gnb.offsetHeight;
	containerWrap.style.paddingBottom = gnbHeight + "px"
	console.log("gnbHeight" + gnbHeight)
}



/* 전체 컨텐츠의 높이값이 화면보다 작은 경우 중간컨텐츠(container_wrap)의 최소 높이값 지정(높이값을 키운다) */
function fixedContainer(){
    if (wrap && wrap.offsetHeight <= window.innerHeight) {
        // 스크롤이 없으면
        if (headerWrap && footerWrap) {
            containerWrap.style.height = window.innerHeight + "px";
			containerWrap.style.overflowY = "auto";
        } else if (headerWrap) {
			containerWrap.style.height = window.innerHeight + "px";
			containerWrap.style.overflowY = "auto";
        } else if (footerWrap) {
			wrap.style.height = 100 + "%";
            containerWrap.style.height = window.innerHeight + "px";
        }
    } else {
        // 스크롤이 있으면
        console.log("fixedContainerWrap", "resize None.");
    }
	console.log("ddd")
}






/* 스크롤이 헤더의 높이값 보다 클 경우 헤더 숨김 */
/*
let lastScrollTop = 0;
window.addEventListener("scroll", function(){
	windowPos = window.pageYOffset || window.scrollTop;
	if(headerWrap) {
		const currentScrollTop = window.scrollY;
		if (currentScrollTop > lastScrollTop && currentScrollTop > (headerWrap.offsetHeight * 2)) {
			console.log("Scrolling down");
			headerWrap.classList.add("hide");
		} else {
			console.log("Scrolling up");
			headerWrap.classList.remove("hide");
		}
		lastScrollTop = currentScrollTop;
	}
})
*/
/* // 스크롤이 헤더의 높이값 보다 클 경우 헤더 숨김 */





/* 장치 정보에 따라 실행 */
// const userAgent = navigator.userAgent;
// if (userAgent.match(/Android/i)) {
// 	console.log("Android 장치");
// } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
// 	console.log("iOS 장치");
// } else {
//   console.log("기타 장치");
// }
/* // 장치 정보에 따라 실행 */





const galleryBnrSlide = document.querySelector(".gallery_bnr_slide");
let galleryBnrSlideItem;
if(galleryBnrSlide) {
	galleryBnrSlideItem = galleryBnrSlide.querySelectorAll(".item");
	if(galleryBnrSlide && galleryBnrSlideItem.length > 1) {
		galleryBnrSlidk();
	}
}



if(footerWrap) {
	containerWrap.style.paddingBottom = footerWrap.offsetHeight + "px";
}





/* gallery main */
function galleryBnrSlidk(){
	$('.gallery_bnr_slide').slick({
		dots: true,
		dotsClass: "gallery_dot",
		infinite: true,
		arrows: false,
		centerPadding: '20px',
	});
}


/* gallery main */
function galleryMainSlidk(){
	$('.gallery_slide').slick({
		dots: true,
		dotsClass: "main_visual_dot",
		infinite: true,
		arrows: false
	});
}


const galleryMainSlide = document.querySelector(".gallery_main_slide");
let galleryMainSlideItem;
if(galleryMainSlide) {
	galleryMainSlideItem = galleryMainSlide.querySelectorAll(".item");
	if(galleryMainSlide && galleryMainSlideItem.length > 1) {
		galleryMainSlidk();
	}
}




/* 문의 내역 토글 버튼 */
let toggleBtns = document.querySelectorAll(".my_customer_list .toggle_btn button");
	if(toggleBtns.length > 0) {
	toggleBtns.forEach(function(item){
		item.addEventListener("click", function(){
			if(item.closest(".active")) {
				item.innerHTML = "<span>문의 내역 보기</span>";
				item.closest(".item").querySelector(".my_customer_view").style.display = "none";
				item.classList.remove("active");
			} else {
				item.innerHTML = "<span>문의 내역 닫기</span>";
				item.closest(".item").querySelector(".my_customer_view").style.display = "block";
				item.classList.add("active");
			}
		})
	})
}
/* // 문의 내역 토글 버튼 */





/* 삭제후 재작성 필요 */
let btnLayerCloses = document.querySelectorAll(".layer.slideUpPop button.btn_close");
if(btnLayerCloses) {
	btnLayerCloses.forEach(function(item){
		item.addEventListener("click", function(){
			item.closest(".layer.slideUpPop").classList.remove("active");
			setTimeout(function(){
				document.querySelector("div.layer.dim").style.display = "none";
			}, 200)
		})
	})
}
/* // 삭제후 재작성 필요 */





/* 하단 GNB 효과구현 샘플 */
let gnbBtns = document.querySelectorAll(".gnb_wrap .item.nav button");
if(gnbBtns.length > 0) {
	for(i=0; i< gnbBtns.length; i++) {
		gnbBtns[i].addEventListener("click", function(){
			gnbBtns.forEach(function(item){
				item.classList.remove("active");
				let beforeImage = item.querySelector('.inner img');
				beforeImage.src = gnbImageChange(beforeImage, 0);
			})
			this.classList.add("active");
			let afterImage = this.querySelector('.inner img');
			afterImage.src = gnbImageChange(afterImage, 1);
		})
	}
}
function gnbImageChange(params, flag){
	let originalSrc = params.src;
	let newScrAfter
	if(flag == 1) {
		newScrAfter = originalSrc.replace("_off.png", "_on.png");
	} else {
		newScrAfter = originalSrc.replace("_on.png", "_off.png");
	}
	return newScrAfter;
}
/* // 하단 GNB 효과구현 샘플 */