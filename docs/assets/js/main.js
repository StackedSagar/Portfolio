$(document).ready(() => {
	// Initialize scroll-based animations
	AOS.init({
		duration: 600,
		easing: 'ease-in-out',
		once: true,
		mirror: false,
	});

	// Initialize animated counters when the library is available
	if (window.PureCounter) {
		new PureCounter();
	}

	// Cache frequently used DOM elements for interaction logic
	const scrollTop = document.querySelector('.scroll-top');
	const header = document.getElementById('header');
	const toggleButton = document.querySelector('.header-toggle');
	const navLinks = document.querySelectorAll('.navmenu a');

	// Toggle the scroll-to-top button visibility based on scroll position
	function toggleScrollTop() {
		if (!scrollTop) return;
		scrollTop.classList.toggle('active', window.scrollY > 100);
	}

	// Open or close the mobile navigation menu and sync the button state
	function setMobileNavState(isOpen) {
		if (!header || !toggleButton) return;
		header.classList.toggle('header-show', isOpen);
		toggleButton.setAttribute('aria-expanded', String(isOpen));
		toggleButton.classList.toggle('lni-menu-hamburger-1', !isOpen);
		toggleButton.classList.toggle('lni-xmark', isOpen);
	}

	window.addEventListener('load', toggleScrollTop);
	document.addEventListener('scroll', toggleScrollTop);

	// Toggle the mobile navigation when the hamburger button is clicked
	toggleButton?.addEventListener('click', () => {
		setMobileNavState(!header?.classList.contains('header-show'));
	});

	// Close the mobile menu after a navigation link is selected
	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if (window.innerWidth < 1200) {
				setMobileNavState(false);
			}
		});
	});

	// Smooth-scroll back to the top when the button is clicked
	$('.scroll-top').on('click', (event) => {
		event.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});

	// Initialize the typing effect for the hero section tagline
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

	// Animate skill bars when the skills section enters the viewport
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

	// Scroll to the target section when the page loads with a hash in the URL
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

	// Highlight the active navigation link based on the current scroll position
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

	// Remove the loading overlay once the page has finished loading
	const preloader = document.querySelector('.preloader, #preloader');
	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove();
		});
	}
});