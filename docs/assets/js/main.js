$(document).ready(() => {
	AOS.init({
		duration: 600,
		easing: 'ease-in-out',
		once: true,
		mirror: false,
	});

	if (window.PureCounter) {
		new PureCounter();
	}

	const scrollTop = document.querySelector('.scroll-top');
	const header = document.getElementById('header');
	const toggleButton = document.querySelector('.header-toggle');
	const navLinks = document.querySelectorAll('.navmenu a');

	function toggleScrollTop() {
		if (!scrollTop) return;
		scrollTop.classList.toggle('active', window.scrollY > 100);
	}

	function setMobileNavState(isOpen) {
		if (!header || !toggleButton) return;
		header.classList.toggle('header-show', isOpen);
		toggleButton.setAttribute('aria-expanded', String(isOpen));
		toggleButton.classList.toggle('lni-menu-hamburger-1', !isOpen);
		toggleButton.classList.toggle('lni-xmark', isOpen);
	}

	window.addEventListener('load', toggleScrollTop);
	document.addEventListener('scroll', toggleScrollTop);

	toggleButton?.addEventListener('click', () => {
		setMobileNavState(!header?.classList.contains('header-show'));
	});

	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if (window.innerWidth < 1200) {
				setMobileNavState(false);
			}
		});
	});

	$('.scroll-top').on('click', (event) => {
		event.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});

	if ($('.typed').length) {
		const typedStrings = $('.typed').data('typed-items').split(',');
		new Typed('.typed', {
			strings: typedStrings,
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000,
		});
	}

	$('.skills-animation').each(function () {
		const $item = $(this);
		new Waypoint({
			element: this,
			offset: '80%',
			handler: function () {
				$item.find('.progress .progress-bar').each(function () {
					const $el = $(this);
					$el.css('width', $el.attr('aria-valuenow') + '%');
				});
			},
		});
	});

	window.addEventListener('load', function () {
		if (window.location.hash) {
			const target = document.querySelector(window.location.hash);
			if (target) {
				setTimeout(() => {
					const scrollMarginTop = parseInt(getComputedStyle(target).scrollMarginTop, 10) || 0;
					window.scrollTo({
						top: target.offsetTop - scrollMarginTop,
						behavior: 'smooth',
					});
				}, 100);
			}
		}
	});

	const navmenuLinks = document.querySelectorAll('.navmenu a');
	function navmenuScrollspy() {
		navmenuLinks.forEach((navmenulink) => {
			if (!navmenulink.hash) return;
			const section = document.querySelector(navmenulink.hash);
			if (!section) return;
			const position = window.scrollY + 200;
			if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
				document.querySelectorAll('.navmenu a.active').forEach((link) => link.classList.remove('active'));
				navmenulink.classList.add('active');
			} else {
				navmenulink.classList.remove('active');
			}
		});
	}
	window.addEventListener('load', navmenuScrollspy);
	document.addEventListener('scroll', navmenuScrollspy);

	const preloader = document.querySelector('.preloader, #preloader');
	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove();
		});
	}
});