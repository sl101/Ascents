'use strict';

// Spollers ==========================================
const accordeonButtons = document.getElementsByClassName("faq__button");

for(var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];
    accordeonButton.addEventListener("click", toggleItems, false);
}

function toggleItems() {
    var itemClass = this.className;
    for(var i = 0; i < accordeonButtons.length; i++) {
        accordeonButtons[i].className = "faq__button closed";
    }
    var pannels = document.getElementsByClassName("faq__text");
    for (var z = 0; z < pannels.length; z++) {
        pannels[z].style.maxHeight = 0;
    }
    if(itemClass == "faq__button closed") {
        this.className = "faq__button _active";
        var panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
    }else {
		}
}

// Burger =============================================
const burger = document.querySelector('.burger');
const menu_ = document.querySelector('.menu');
const fixedBlocks = document.querySelectorAll('._fixed');
const header = document.querySelector('.header');

if (burger) {
	burger.addEventListener("click", function (e) {
		let paddingOffset_ = window.innerWidth  - document.body.offsetWidth + 'px';
		if (document.body.classList.contains('_lock')){
			burger_close();
		} else {
			burger_open(paddingOffset_);
		}
	});
};

function burger_open(element){
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = element;
	});
	document.body.style.paddingRight = element;
	document.body.classList.add("_lock");
	burger.classList.add("_active");
	menu_.classList.add("_active");
}

function burger_close(){
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = '0';
	});
	document.body.style.paddingRight = '0';
	document.body.classList.remove("_lock");
	burger.classList.remove("_active");
	menu_.classList.remove("_active");
}


// subscribe, connect ====================================
let subscribeButton = document.querySelector('.footer__form--btn');
let removeInput = document.querySelector('.footer__input');
let send = document.querySelector('.form-connect__btn');
let connectName = document.querySelector('.form-connect__input--name');
let connectPhone = document.querySelector('.form-connect__input--tel');
let connectEmail = document.querySelector('.form-connect__input--mail');
let request = document.querySelector('.form-request__btn');
let requestName = document.querySelector('.form-request__input--name');
let requestPhone = document.querySelector('.form-request__input--tel');
let requestEmail = document.querySelector('.form-request__input--mail');
let dataBtn = document.querySelector('.form-data__btn');
let dataName = document.querySelector('.form-data__input--name');
let dataPhone = document.querySelector('.form-data__input--tel');
let langValue = document.getElementsByTagName("html")[0].getAttribute("lang");


if(subscribeButton){
	subscribeButton.onclick = function(evt) {
		evt.preventDefault();
	if(removeInput.value.indexOf("@")<1 || removeInput.value.indexOf(".")<1){
		if(langValue == "ru"){
			subscribeButton.textContent = 'e-mail введен не верно';
		}else{
			subscribeButton.textContent = 'e-mail entered incorrectly';
		}
}else{
	subscribeButton.classList.add('_active');
	if(langValue == "ru"){
		subscribeButton.textContent = 'Вы подписались на рассылку';
	}else{
		subscribeButton.textContent = 'You have subscribed to the newsletter';
	}
} 
	};
}

send.onclick = function(evt) {
	evt.preventDefault();
	if(connectName.value.length >= 1){
		if(connectPhone.value.length >= 9){
				if(connectEmail.value.includes('@') && connectEmail.value.includes('.')){
			send.classList.add('_active');
			if(langValue == "ru"){
				send.textContent = 'Отправлено';
			}else{
				send.textContent = 'Sent by';
			}
		}else{
			if(langValue == "ru"){
				send.textContent = 'Введите e-mail';
			}else{
				send.textContent = 'Enter your e-mail';
			}
		}
	}else{
		if(langValue == "ru"){
			send.textContent = 'Введите телефон';
		}else{
			send.textContent = 'Enter your phone number';
		}
	}
}else{
	if(langValue == "ru"){
		send.textContent = 'Введите имя';
	}else{
		send.textContent = 'Enter your name';
	}
	}
};

connectName.onclick = function(evt) {
	if(send.classList.contains('_active')) {
		send.classList.remove('_active');
		connectName.value = '';
		connectPhone.value = '';
		connectEmail.value = '';
	}
	if(langValue == "ru"){
		send.textContent = 'Отправить';
	}else{
		send.textContent = 'Send';
	}
};

request.onclick = function(ev) {
	ev.preventDefault();
	if(requestName.value.length >= 1){
		if(requestPhone.value.length >= 9){
				if(requestEmail.value.includes('@') && requestEmail.value.includes('.')){
			request.classList.add('_active');
			if(langValue == "ru"){
				request.textContent = 'Отправлено';
			}else{
				request.textContent = 'Sent by';
			}
		}else{
			if(langValue == "ru"){
				request.textContent = 'Введите e-mail';
			}else{
				request.textContent = 'Enter your e-mail';
			}
		}
	}else{
		if(langValue == "ru"){
			request.textContent = 'Введите телефон';
		}else{
			request.textContent = 'Enter your phone number';
		}
	}
}else{
	if(langValue == "ru"){
		request.textContent = 'Введите имя';
	}else{
		request.textContent = 'Enter your name';
	}
	}
};

requestName.onclick = function(evt) {
	if(request.classList.contains('_active')) {
		request.classList.remove('_active');
		requestName.value = '';
		requestPhone.value = '';
		requestEmail.value = '';
	}
	if(langValue == "ru"){
		request.textContent = 'Отправить';
	}else{
		request.textContent = 'Send';
	}
};

dataBtn.onclick = function(e) {
	e.preventDefault();
	if(dataName.value.length >= 1){
		if(dataPhone.value.length >= 9){
			dataBtn.classList.add('_active');
			if(langValue == "ru"){
				dataBtn.textContent = 'Отправлено';
			}else{
				dataBtn.textContent = 'Sent by';
			}
	}else{
		if(langValue == "ru"){
			dataBtn.textContent = 'Введите телефон';
		}else{
			dataBtn.textContent = 'Enter your phone number';
		}
	}
}else{
	if(langValue == "ru"){
		dataBtn.textContent = 'Введите имя';
	}else{
		dataBtn.textContent = 'Enter your name';
	}
	}
};

dataName.onclick = function(evt) {
	if(dataBtn.classList.contains('_active')) {
		dataBtn.classList.remove('_active');
		dataName.value = '';
		dataPhone.value = '';
	}
	if(langValue == "ru"){
		dataBtn.textContent = 'Отправить';
	}else{
		dataBtn.textContent = 'Send';
	}
};

// checkbox ====================================
let label = document.querySelector('.footer__check');
let footerCheckbox = document.querySelector('.footer__checkbox');

label.onclick = function() {
	if(!footerCheckbox.checked){
		label.classList.add('_active');
	}else{
		label.classList.remove('_active');
	}
};

// number animation ====================================
let parentNubers = document.querySelector('.reviews__top');
let animNumbers = document.querySelectorAll('.reviews__result');

let blockAnimate = true;
const window_height = window.innerHeight;  // высота окна браузера
const animElements = document.querySelectorAll('.anim-item');

if(animElements.length > 0){
	
	window.addEventListener('scroll', animOnScroll); // ставим слушатель на окно

	function animOnScroll (param){ 
		for(let i = 0; i < animElements.length; i++) {
			
			let animItem = animElements[i];
			let animItemHeight = animItem.offsetHeight; // высота елемента
			let animItemOffset = offset(animItem).top; // расстояние от верха элемента до начала страницы
			let animStart = 1; // коэфициент 
			
			let animItemPoint = (window_height - animItemHeight / animStart); // часть элемета при появлениии которой запускается анимация
			
			if(animItemHeight > window_height){
				animItemPoint = window_height - window_height / animStart; // часть элемета при появлениии которой запускается анимация, если элемент больше окна
			}
			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
					animItem.classList.add('_animate');
			} else {
				if(!animItem.classList.contains('_anim-no-hide')){ 
					animItem.classList.remove('_animate');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
	}

	setTimeout(() => {
		animOnScroll();
	},300);
};




