// ======================== Слайдер Swiper ===========================
// Инициализация Swiper
const imageSlider = new Swiper('.projects-cards__content', {
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
		delay: 1000,
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