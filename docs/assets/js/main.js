$(document).ready(() => {
	// Initialize AOS.js for dynamic animation on scroll
	AOS.init({
		duration: 600,
		easing: 'ease-in-out',
		once: true,
		mirror: false,
	});

	// Initialize pureCounter for statistics counters
	// Ensure PureCounter is loaded before using it
	new PureCounter();

	// Initialize Scroll to top window scroll behavior
	let scrollTop = document.querySelector('.scroll-top');

	function toggleScrollTop() {
		if (scrollTop) {
			window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
		}
	}

	// Toggle scroll top button visibility
	window.addEventListener('load', toggleScrollTop);
	document.addEventListener('scroll', toggleScrollTop);

	// Toggle header visibility on mobile
	$('.header-toggle').on('click', () => {
		$('#header').toggleClass('header-show');
		$('.header-toggle').toggleClass('lni-menu-hamburger-1 lni-xmark');
	});

	$(document).on('#navmenu a', 'click', () => {
		if ($('.header-show')) {
			headerToggle();
		}
	});

	$('.scroll-top').on('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});

	//Initialize Typed.js for dynamic text typing effect
	if ($('.typed').length) {
		var typed_strings = $('.typed').data('typed-items');
		typed_strings = typed_strings.split(',');
		new Typed('.typed', {
			strings: typed_strings,
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000,
		});
	}

	//Initialize Progress Bar Animation on Scroll
	$('.skills-animation').each(function () {
		var $item = $(this);
		new Waypoint({
			element: this,
			offset: '80%',
			handler: function () {
				$item.find('.progress .progress-bar').each(function () {
					var $el = $(this);
					$el.css('width', $el.attr('aria-valuenow') + '%');
				});
			},
		});
	});

	//Correct scrolling position upon page load for URLs containing hash links.
	window.addEventListener('load', function (e) {
		if (window.location.hash) {
			if (document.querySelector(window.location.hash)) {
				setTimeout(() => {
					let section = document.querySelector(window.location.hash);
					let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
					window.scrollTo({
						top: section.offsetTop - parseInt(scrollMarginTop),
						behavior: 'smooth',
					});
				}, 100);
			}
		}
	});

	// Navmenu Scrollspy
	let navmenulinks = document.querySelectorAll('.navmenu a');

	function navmenuScrollspy() {
		navmenulinks.forEach((navmenulink) => {
			if (!navmenulink.hash) return;
			let section = document.querySelector(navmenulink.hash);
			if (!section) return;
			let position = window.scrollY + 200;
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

	//Preloader
	const preloader = document.querySelector('.preloader');
	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove();
		});
	}
});