@@include('webp_.js');

if (document.querySelector('.slider-hero')) {
	const swiper = new Swiper('.slider-hero', {
		effect: 'fade',
		slidesPerView: 'auto',
		loop: true,
		speed: 1200,
		autoplay: {
			delay: 4500
		},
		fadeEffect: {
			crossFade: true
		}
	});
}

if (document.querySelector('.faq__accordion-container')) {
	new Accordion('.faq__accordion-container', {
		elementClass: 'accordion',
		panelClass: 'accordion__panel',
		activeClass: 'active',
		duration: 200
	});
}

const burger = document.querySelector('.burger input');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav .link');

burger.addEventListener('change', () => {
	if (burger.checked) {
		nav.classList.add('open');
		navItems.forEach((item) => {
			item.classList.remove('text_body');
			item.classList.add('text_headline');
		});
		document.body.classList.add('block-scroll');
	} else {
		nav.classList.remove('open');
		document.body.classList.remove('block-scroll');
		navItems.forEach((item) => {
			item.classList.remove('text_headline');
			item.classList.add('text_body');
		});
	}
});

const goUp = document.querySelector('.go-up');

if (goUp) {
	goUp.addEventListener('click', () => {
		window.scrollTo(0, 0);
	});
}