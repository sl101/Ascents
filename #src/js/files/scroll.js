// scroll to==========================================
// const menuLinks = document. querySelectorAll('.menu__link[data-goto], .footer__menu-link[data-goto], .hero__anchor[data-goto], .menu__logo[data-goto]');
// if (menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});
// }
// 	function onMenuLinkClick(e){
// 		e.preventDefault();
// 		const menuLink = e.target;
// 		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
// 			if(burger.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				burger.classList.remove('_active');
// 				menu.classList.remove('_active');
// 			}
// 			window.scrollTo({
// 				top:gotoBlockValue,
// 				behavior: "smooth",
// 			});
// 		}
// }

// scroll to hover =====================================
const decorItems = document.querySelectorAll('.advantages__box');
let windowTop = window.pageYOffset;

headerScroll();

const decorAnimation = () => {
			if(decorItems.length > 0){
		for(var i = 0; i < decorItems.length; i++) {
			const decorItem = decorItems[i];
			const decorItemHeight = decorItem.offsetHeight;
			const decorItemOffset = offset(decorItem).top; 
			const decorStart = decorItemOffset - (window_height/2+decorItemHeight); 

				if(pageYOffset > decorStart && pageYOffset < (decorStart + decorItemHeight*3)){
					decorItem.classList.add('animation');
			} else {
					decorItem.classList.remove('animation');
				}
		};
	};
};

function offset(el) {
	const rect = el.getBoundingClientRect(),
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
}

window.addEventListener ('scroll', () => {
	decorAnimation();
	// scroll had ===========================================
	headerScroll();
});

// $(window).scroll(function () {
// 	var pageHeight = screen.height;
// 	if (this.scrollY > 100) {
// 		$('.header').addClass('sticky');
// 	}else {
// 		$('.header').removeClass('sticky');
// 	}
// 	if (this.scrollY > 300) {
// 		$('.header').addClass('sticky-vh');
// 	}else {
// 		$('.header').removeClass('sticky-vh');
// 	}
// });


function headerScroll(){
	windowTop = window.pageYOffset;
if(windowTop> 300){
	header.classList.add('sticky-vh');
}else if(windowTop > 100){
	header.classList.add('sticky');
	header.classList.remove('sticky-vh');
}else{
	header.classList.remove('sticky');
} 
}


// ScrollOnClick =================================
const menuLinks = document.querySelectorAll('._goto[data-goto]');
if(menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		e.preventDefault();
		const menuLink = e.target;
			if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

				if(burger.classList.contains('_active')){
					burger_close(); 
				document.body.classList.remove('_lock');
				burger.classList.remove('_active');
				menu.classList.remove('_active');
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
			}
	}
}
