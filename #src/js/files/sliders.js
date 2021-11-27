	// core version + navigation, pagination modules:
	// import Swiper, { Navigation, Pagination } from 'swiper';
	// swiper core styles
	// import 'swiper.min.css'
	// import Swiper and modules styles
	// import 'swiper/modules';
	// import 'swiper/modules/navigation';
	// import 'swiper/modules/pagination';

	// configure Swiper to use modules
	// Swiper.use([Navigation, Pagination]);

	// Swipers ============================================
	let mySlider = new Swiper('.slider', {

		wrapperClass: 'slider__wrapper',
		slideClass: 'slider__slide',

		slidesPerView: 1,
		speed: 900,
		grabCursor: true,
		touchAngel: 45,
		toucRatio: 1,
		initialSlide: 0,
		// autoplay: true,

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

	let cardSwiper = new Swiper('.itineraries-swiper', {

		slideClass: 'itineraries-swiper__slide',
		wrapperClass: 'itineraries-swiper__wrapper',

		initialSlide: 1,
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
				watchOverflow: true,
			}
		}
	});

	let reviewsSwiper = new Swiper('.swiper-reviews', {

		wrapperClass: 'swiper-reviews__wrapper',
		slideClass: 'swiper-reviews__slide',

		slidesPerView: 1,
		initialSlide: 0,
		speed: 900,
		loop: true,
		// autoHeight: true,
		// grabCursor:true,
		// spaceBetween: 10,

		pagination: {
			el: '.swiper-reviews__pagination',
			clickable: true,
			type: 'bullets',
		},

		navigation: {
			prevEl: '.swiper-reviews__arrow--prev',
			nextEl: '.swiper-reviews__arrow--next',
		},


		keyboard: {
			enabled: true,
			onlyInViewport: true,
		}
	});