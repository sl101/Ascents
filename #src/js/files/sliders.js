// Swipers ============================================
var mySlider = new Swiper('.slider', {

	wrapperClass: 'slider__wrapper',
	slideClass:'slider__slide',

	slidesPerView: 1,
	speed:900,
	grabCursor:true,
	touchAngel: 45,
	toucRatio: 1,
	initialSlide: 0,
	autoplay: true,

	scrollbar: {
    el: '.swiper-scrollbar',
		draggable: true,
		dragSize: 50,
	},

	pagination: {
		el: '.slider__pagination',
			clickable: true,
			type: 'fraction',
	},

	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},

	keyboard: {
    enabled: true,
    onlyInViewport: false,
		pageUpDown: true,
  },

	breakpoints: {
    768: {
			direction: 'vertical',
    }
  }
});

var cardSwiper = new Swiper ('.itineraries-swiper', {

	slideClass:'itineraries-swiper__slide',
	wrapperClass: 'itineraries-swiper__wrapper',

	initialSlide:1,
	spaceBetween: 10,
	slidesPerView: 1.05,
	paginationClickable: true,
	watchOverflow: false,

	pagination: {
		el: '.itineraries-pagination',
			clickable: true,
			type: 'bullets',
	},

  breakpoints: {
    320: {
			slidesPerView: 1.25,
      spaceBetween: 15,
    },
    767.98: {
			spaceBetween: 25,
			slidesPerView: 1.74,
    },
		991.98: {
      slidesPerView: 2.26,
      spaceBetween: 20,
    },
		1337: {
      slidesPerView: 3,
			watchOverflow: true
    }
  }
});

var reviewsSwiper = new Swiper ('.swiper-reviews', {

	slidesPerView: 1,
	autoHeight: true,
	loop: true,
	
	pagination: {
		el: '.swiper-reviews__pagination',
		clickable: true,
		type: 'bullets',
	},
	
	navigation: {
		prevEl: '.swiper-reviews__prev',
		nextEl: '.swiper-reviews__next',
  },


	keyboard: {
	enabled: true,
	onlyInViewport: true,
	}
});