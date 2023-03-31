// ======================== Слайдер Swiper ===========================
// Инициализация Swiper
const imageSlider = new Swiper('.projects-cards__slider', {
	// Количество слайдов для показа
	slidesPerView: 1, // 'auto' // // - нужно также в сss задать автоматическую ширину,
	// Стрелки
	navigation: {
		nextEl: '.projects-card-btn-next',
		prevEl: '.projects-card-btn-prev',
	},
	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.projects-card__pagination',
		// Буллеты
		type: 'bullets',
		clickable: true,
		dynamicBullets: false,
	},
	// Управление клавиатурой
	keyboard: {
		// Включить / выключить
		enable: true,
		// Включить / выключить только когда слайдер в прежелах вьюпорта
		onlyInViewport: true,
		// Включить / выключить управление клавишами pageUp, pageDown
		pageUpDown: true,
	},
	// Бесконечный слайдер (желательно отключать скролл, мультирядность не больше 1)
	loop: true,
	effect: 'fade',
	fadeEffect: {
		// Параллельная смена прозрачности
		crossFade: true,
	},
	// Скорость прокрутки
	speed: 2000,
});
// заголовки
const textSlider = new Swiper('.projects-cards__menu', {
	// Количество слайдов для показа
	slidesPerView: 1, // 'auto' // // - нужно также в сss задать автоматическую ширину,
	// Бесконечный слайдер (желательно отключать скролл, мультирядность не больше 1)
	loop: true,
	pagination: {
		el: '.projects-cards__menu-pagination',
		// Буллеты
		type: 'bullets',
		clickable: true,
	},
	speed: 2000,
	effect: 'fade',
	fadeEffect: {
		// Параллельная смена прозрачности
		crossFade: true,
	},
});

// Передача управления
imageSlider.controller.control = textSlider;
textSlider.controller.control = imageSlider;

const title_1 = document.querySelector('.projects-cards__menu-pagination .swiper-pagination-bullet[aria-label="Go to slide 1"]');
const title_2 = document.querySelector('.projects-cards__menu-pagination .swiper-pagination-bullet[aria-label="Go to slide 2"]');
const title_3 = document.querySelector('.projects-cards__menu-pagination .swiper-pagination-bullet[aria-label="Go to slide 3"]');
title_1.textContent = 'Rostov-on-Don, Admiral';
title_2.textContent = 'Sochi Thieves';
title_3.textContent = 'Rostov-on-Don Patriotic';

const teamImagesSlider = new Swiper('.team-slider', {
	slidesPerView: 1,
	// Стрелки
	navigation: {
		nextEl: '.team-slider-btn-next',
		prevEl: '.team-slider-btn-prev',
	},
	pagination: {
		el: '.team__list',
		// Буллеты
		type: 'bullets',
		clickable: true,
	},
	speed: 2000,
	// Управление клавиатурой
	keyboard: {
		// Включить / выключить
		enable: true,
		// Включить / выключить только когда слайдер в прежелах вьюпорта
		onlyInViewport: true,
		// Включить / выключить управление клавишами pageUp, pageDown
		pageUpDown: true,
	},
	// Автопрокрутка
	autoplay: {
		// пауза между прокруткой
		delay: 3000,
		// закончить на последнем слайде
		stopOnLastSlide: false,
		// Отключить после ручного переключения
		disableOnInteraction: true,
	},
	loop: true,
	effect: 'fade',
	fadeEffect: {
		// Параллельная смена прозрачности
		crossFade: true,
	},
});

const teamProgressSlider = new Swiper('.progress-slider', {
	slidesPerView: 1,
	pagination: {
		el: '.progress-slider-pagination',
		// Буллеты
		type: 'bullets',
		clickable: true,
	},
	speed: 2000,
	loop: true,
	effect: 'fade',
	fadeEffect: {
		// Параллельная смена прозрачности
		crossFade: true,
	},
});

teamProgressSlider.controller.control = teamImagesSlider;
teamImagesSlider.controller.control = teamProgressSlider;

if (document.body.clientWidth < 768) {
	document.querySelector('.projects-card-btn-prev').innerHTML = '<img src="./img/arrow-left-slider.svg" alt="left">';
	document.querySelector('.projects-card-btn-next').innerHTML = '<img src="./img/arrow-right-slider.svg" alt="right">';
}

const menuSlider = document.querySelector('.team__list');

const menuLinks = document.querySelectorAll('.services__link, .menu__link, .contact-us__link, .contacts__info a, .social__link, .btn');
if (menuLinks) {
	menuLinks.forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
		})
	});
}

menuSlider.innerHTML = `<li class="services__item active swiper-pagination-bullet" role="button"
									aria-label="Go to slide 1"><a class="services__link" href="#">American classic</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 2">
									<a class="services__link" href="#">Empire</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 3">
									<a class="services__link" href="#">Classical</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 4">
									<a class="services__link" href="#">Loft</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 5">
									<a class="services__link" href="#">Minimalism</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 6">
									<a class="services__link" href="#">Provence</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 7">
									<a class="services__link" href="#">Romanticism</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 8">
									<a class="services__link" href="#">Scandinavian style</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 9">
									<a class="services__link" href="#">Mediterranean style</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 10">
									<a class="services__link" href="#">High tech</a>
								</li>
								<li class="services__item swiper-pagination-bullet" role="button" aria-label="Go to slide 11">
									<a class="services__link" href="#">Eclecticism</a>
								</li>`;

/* Плавная прокрутка к разделу страницы */
const smoothLinks = document.querySelectorAll('.menu__link');
const headerHeight = document.querySelector('.header').clientHeight;
if (smoothLinks) {
	smoothLinks.forEach(smoothLink => smoothLink.addEventListener('click', (event) => {
		event.preventDefault();
		if (event.target.closest('.menu__link')) {
			const currentAddress = document.querySelector(event.target.getAttribute('href'));
			const scrollValue = currentAddress.getBoundingClientRect().top + scrollY - headerHeight;
			window.scrollTo({ top: scrollValue, behavior: "smooth" });
		}
	}));
}

/* popup */

const popupBtns = document.querySelectorAll('.pop-up-btn');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;

if (popupBtns.length > 0) {
	popupBtns.forEach(btn => {
		btn.addEventListener('click', (event) => {
			event.preventDefault();
			const address = btn.getAttribute('href');
			const currentPopup = document.querySelector(`${address}`);
			popupOpen(currentPopup);
		});
	})
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
	}
	currentPopup.classList.add('open');
	currentPopup.addEventListener('click', (event) => {
		if (!event.target.closest('.callback__form')) {
			popupClose(event.target.closest('.popup'));
		}
	});
}

const popupCloseBtns = document.querySelectorAll('.close');
if (popupCloseBtns.length > 0) {
	popupCloseBtns.forEach(btnClose => {
		btnClose.addEventListener('click', (event) => {
			event.preventDefault();
			popupClose(btnClose.closest('.popup'));
		});
	})
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPadding.length > 0) {
		lockPadding.forEach(elem => {
			elem.style.paddingRight = lockPaddingValue;
		})
	}
	document.body.style.paddingRight = lockPaddingValue;
	document.body.classList.add('lock');
	unlock = false;
	setTimeout(() => {
		unlock = true;
	}, 600);
}

function bodyUnlock() {
	setTimeout(() => {
		if (lockPadding.length > 0) {
			lockPadding.forEach(elem => {
				elem.style.paddingRight = '0px';
			})
		}
		document.body.style.paddingRight = '0px';
		document.body.classList.remove('lock');
	}, 600);
	unlock = false;
	setTimeout(() => {
		unlock = true;
	}, 600);
}

document.addEventListener('keydown', (event) => {
	if (event.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});


/* Меню бургер */

const menuBurger = document.querySelector('.menu-burger');
const menuNavigation = document.querySelector('.header__menu');
if (menuBurger) {
	menuBurger.addEventListener('click', () => {
		menuBurger.classList.toggle('active');
		menuNavigation.classList.toggle('active');
		if (menuBurger.classList.contains('active')) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});
}

const menuElements = document.querySelectorAll('.menu__link');
if (menuElements.length > 0) {
	menuElements.forEach(element => {
		element.addEventListener('click', (event) => {
			menuBurger.classList.remove('active');
			menuNavigation.classList.remove('active');
			document.body.style.overflow = 'auto';
		});
	})
}