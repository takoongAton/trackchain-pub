window.addEventListener("load", function(){
	fixedContainer();
})


let setInputs = document.querySelectorAll(".set_input");

function clickHandler(event,item){
	let elem = event.target;
	const button = elem.closest(".set_input").querySelector("button")
	const input_item = elem.closest(".set_input").querySelector("input")

	while(!elem.classList.contains("input_item")) {

		if(elem.classList.contains("input_item")) {
			let inputValue = elem.value;
			console.log(inputValue)
			input_item.fucus();
			return;
		}

		if(elem.classList.contains("set_input")) {
			input_item.fucus;
			return;
		}
		elem = elem.parentNode;
	}

	button.addEventListener("click", function(){
		input_item.value = "";
	})

	input_item.addEventListener("input", function(){
		if(input_item.value > 0) {
			button.style.display = "block";
		} else {
			button.style.display = "none";
		}
	})
}

setInputs.forEach(function(item){
	item.addEventListener("click", clickHandler)
})






/* splash, login 등 페이지에 필요함 */
let headerWrap = document.querySelector(".header_wrap");
if(!headerWrap){
	document.querySelector("html").style.height = 100 + "%";
	document.querySelector("body").style.height = 100 + "%";
	document.querySelector(".wrap").style.height = 100 + "%";
	document.querySelector(".wrap").style.display = "flex";
	document.querySelector(".wrap").style.flexDirection = "column";
	document.querySelector(".container_wrap").style.height = 100 + "%";
}


/* 전체 컨텐츠의 높이값이 화면보다 작은 경우 중간컨텐츠(container_wrap)의 최소 높이값 지정(높이값을 키운다) */
function fixedContainer(){
	let wrap = document.querySelector(".wrap");
	let headerWrap = document.querySelector(".header_wrap");
	let containerWrap = document.querySelector(".container_wrap");
	let footerWrap = document.querySelector(".footer_wrap");
	
    if (wrap && wrap.clientHeight <= window.innerHeight) {
        /* 스크롤이 없으면 */

        if (headerWrap && footerWrap) {
            containerWrap.style.height = window.innerHeight - headerWrap.clientHeight - footerWrap.clientHeight + 2 + "px";
            console.log("fixedContainerWrap", "headerWrap & footerWrap", "resize=" + containerWrap.style.height);
        } else if (headerWrap) {
            containerWrap.style.height = window.innerHeight - headerWrap.clientHeight + 2 + "px";
            console.log("fixedContainerWrap", "headerWrap only", "resize=" + containerWrap.style.height);
        } else if (footerWrap) {
            containerWrap.style.height = window.innerHeight - footerWrap.clientHeight + 2 + "px";
            console.log("fixedContainerWrap", "footerWrap only", "resize=" + containerWrap.style.height);
        }

    } else {
        /* 스크롤이 있으면 */
        console.log("fixedContainerWrap", "resize None.");

    }
	console.log("ddd")
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

function galleryMainScrollFn(windowPos){
	const mainVisualDot = document.querySelector(".main_visual_dot");
	if(galleryMainSlide && windowPos > 0 && windowPos <= (galleryMainSlide.clientHeight + headerWrap.clientHeight)) {
		headerWrap.style.removeProperty("style");
		headerWrap.style.position = ""
		// galleryMainSlide.style.top = (windowPos * 0.4) + "px";
		// galleryMainSlide.style.opacity = 1 - (windowPos * 0.0026);
		if(mainVisualDot != null) {
			mainVisualDot.style.bottom = -16 + (windowPos * 0.3) + "px";
			// mainVisualDot.style.opacity = 1 - (windowPos * 0.02);
		}
	} else {
		headerWrap.style.position = "relative";
		// galleryMainSlide.style.top = 0;
		// galleryMainSlide.style.opacity = 1;
		if(mainVisualDot != null) {
			mainVisualDot.style.bottom = -16 + "px";
			// mainVisualDot.style.opacity = 1;
		}
	}

}

let windowPos = 0;

const galleryMainSlide = document.querySelector(".gallery_main_slide");
let galleryMainSlideItem;
if(galleryMainSlide) {
	galleryMainSlideItem = galleryMainSlide.querySelectorAll(".item");
	if(galleryMainSlide && galleryMainSlideItem.length > 1) {
		galleryMainSlidk();
	}
}


window.addEventListener("scroll", function(){
	windowPos = window.pageYOffset || window.scrollTop;
	let tempWidth = window.innerWidth;
	if(galleryMainSlide && tempWidth < 590) {
		galleryMainScrollFn(windowPos);
	}
})





/* 갤러리 메인의 tab메뉴 고정 header가 있을때 header의 높이값 만큼! 없으면 css에 정의된 값 만큼 고정. */
let batBar = document.querySelector(".wrap .tabbar");
headerWrap = document.querySelector(".wrap .header_wrap");
if(batBar && headerWrap) {
	batBar.style.top = headerWrap.clientHeight + "px";
}






/* 갤러리 메인 리스트 기본 높이값 설정 (탭 클릭후 컨텐츠가 없는 경우 _nodata.html 파일 참조) */
function galleryListHeightFn(){
	let winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	let headerHeight = document.querySelector(".header_wrap").clientHeight;
	let tabBarHeight = document.querySelector(".gallery_now_wrap .tabbar").clientHeight;
	let sortWrapHeight = document.querySelector(".gallery_now_wrap .sort_wrap").clientHeight;
	
	// 전체 높이에서 보여지고자 하는 컨텐츠의 높이값 만큼만 뺌
	galleryList.style.minHeight = winHeight - (headerHeight + tabBarHeight + sortWrapHeight) + "px";
	// galleryList.style.minHeight = winHeight - (headerHeight + tabBarHeight) + "px";
	
}
let galleryList = document.querySelector(".gallery_list");
if(galleryList) {
	galleryListHeightFn();
}




// const userAgent = navigator.userAgent;
// alert(userAgent);
// document.querySelector(".apply_info").innerHTML = userAgent;
// console.log(userAgent);
// if (userAgent.match(/Android/i)) {
// 	console.log("Android 장치");
// 	alert("Android 장치");
// } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
// 	console.log("iOS 장치");
// 	document.querySelector(".apply_info").innerHTML = "iOS 장치";
// 	alert("iOS 장치");
// } else {
//   console.log("기타 장치");
//   alert("기타 장치");
// }