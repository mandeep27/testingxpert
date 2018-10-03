jQuery(window).on('load', function () {
	jQuery("#preloader").fadeOut();
});
jQuery(function (jQuery) {
	//Preloader
	// Wow 
	wow = new WOW({
		boxClass: 'wow', // default
		animateClass: 'animated', // default
		offset: 0, // default
		mobile: false, // default
		live: true // default
	})
	wow.init();
	// Bootstrap Slider 
	jQuery('.carousel').carousel({
		interval: 3000
		, cycle: true
	});
	/**** Client  Slider ****/
	jQuery('#client-slider').owlCarousel({
		autoplay: 3000
		, loop: true
		, margin: 10
		, responsiveClass: true
		, nav: false
		, dots: false
		, responsive: {
			0: {
				items: 1
				, nav: true
			}
			, 600: {
				items: 2
				, nav: true
			}
			, 1200: {
				items: 4
				, nav: true
			}
			, 1500: {
				items: 5
				, nav: true
			, }
		}
	})
	jQuery('#award-slider').owlCarousel({
		autoplay: 3000
		, loop: true
		, margin: 0
		, responsiveClass: true
		, nav: true
		, dots: true
		, responsive: {
			0: {
				items: 1
				, nav: false
				, dots: true
			}
			, 600: {
				items: 2
				, nav: false
				, dots: true
			}
			, 992: {
				items: 3
				, nav: false
				, dots: true
			, }
		}
	})
	jQuery('#news-slider').owlCarousel({
		autoplay: 3000
		, loop: true
		, margin: 70
		, responsiveClass: true
		, nav: true
		, dots: true
		, responsive: {
			0: {
				items: 1
				, nav: false
				, dots: true
			}
			, 600: {
				items: 2
				, nav: false
				, dots: true
			}
			, 992: {
				items: 2
				, nav: false
				, dots: true
			, }
		}
	})
	jQuery('#webinar-slider').owlCarousel({
			autoplay: 3000
			, loop: true
			, margin: 70
			, responsiveClass: true
			, nav: true
			, dots: true
			, responsive: {
				0: {
					items: 1
					, nav: false
					, dots: true
				}
				, 600: {
					items: 2
					, nav: false
					, dots: true
				}
				, 992: {
					items: 2
					, nav: false
					, dots: true
				, }
			}
		})
		/**** Resource ****/
	jQuery(function () {
		jQuery(' #resource-thumbs .resource-bx ').each(function () {
			jQuery(this).hoverdir();
		});
	});
	/**** Select Placeholder ****/
	jQuery('select').change(function () {
		if (jQuery(this).children('option:first-child').is(':selected')) {
			jQuery(this).addClass('placeholder1');
		}
		else {
			jQuery(this).removeClass('placeholder1');
		}
	});
	/**** Textarea First Letter Capital ****/
	jQuery('textarea.form_control').on('keypress', function (event) {
		var $this = jQuery(this)
			, thisVal = $this.val()
			, FLC = thisVal.slice(0, 1).toUpperCase();
		con = thisVal.slice(1, thisVal.length);
		jQuery(this).val(FLC + con);
	});
	/**** Search Section ****/
	jQuery(".search-btn").click(function () {
		jQuery(".search-btn").removeClass("active");
		jQuery(".search-field").addClass("active");
		jQuery(".search-close-btn").addClass("active");
	});
	jQuery(".search-close-btn").click(function () {
		jQuery(".search-btn").addClass("active");
		jQuery(".search-close-btn").removeClass("active");
		jQuery(".search-field").removeClass("active");
	});
	/**** Counter ****/
	jQuery('.counter').each(function () {
		var jQuerythis = jQuery(this)
			, countTo = jQuerythis.attr('data-count');
		jQuery({
			countNum: jQuerythis.text()
		}).animate({
			countNum: countTo
		}, {
			duration: 8000
			, easing: 'linear'
			, step: function () {
				jQuerythis.text(Math.floor(this.countNum));
			}
			, complete: function () {
				jQuerythis.text(this.countNum);
				//alert('finished');
			}
		});
	});
	/**** Home Service ****/
	$(function () {
		var $container = $('.service-main')
			, $articles = $container.children('.service-bx')
			, timeout;
		$articles.on('mouseenter', function (event) {
			var $article = $(this);
			var $articleID = $(this).attr('id');
			$container.find('.service-bg').each(function () {
				var bgid = $(this).attr('bgid');
				if (bgid == $articleID) {
					$(this).addClass('active');
				}
				else {
					$(this).removeClass('active');
				}
			})
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				if ($article.hasClass('active')) return false;
				$articles.not($article.removeClass('inactive').addClass('active')).removeClass('active').addClass('inactive');
			}, 65);
		});
		$container.on('mouseleave', function (event) {
			clearTimeout(timeout);
			$articles.removeClass('active inactive');
		});
	});
	/**** Smooth Scroll  ****/
	jQuery('.banner-scroll a').click(function () {
		jQuery('html, body').animate({
			scrollTop: $(jQuery(this).attr('href')).offset().top
		}, 500);
		return false;
	});
	/**** Canvas Js ****/
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 80
				, "density": {
					"enable": true
					, "value_area": 800
				}
			}
			, "color": {
				"value": "#ffffff"
			}
			, "shape": {
				"type": "circle"
				, "stroke": {
					"width": 0
					, "color": "#000000"
				}
				, "polygon": {
					"nb_sides": 5
				}
				, "image": {
					"src": "img/github.svg"
					, "width": 100
					, "height": 100
				}
			}
			, "opacity": {
				"value": 0.5
				, "random": false
				, "anim": {
					"enable": false
					, "speed": 1
					, "opacity_min": 0.1
					, "sync": false
				}
			}
			, "size": {
				"value": 10
				, "random": true
				, "anim": {
					"enable": false
					, "speed": 40
					, "size_min": 0.1
					, "sync": false
				}
			}
			, "line_linked": {
				"enable": true
				, "distance": 150
				, "color": "#ffffff"
				, "opacity": 0.4
				, "width": 1
			}
			, "move": {
				"enable": true
				, "speed": 6
				, "direction": "none"
				, "random": false
				, "straight": false
				, "out_mode": "out"
				, "bounce": false
				, "attract": {
					"enable": false
					, "rotateX": 600
					, "rotateY": 1200
				}
			}
		}
		, "interactivity": {
			"detect_on": "canvas"
			, "events": {
				"onhover": {
					"enable": true
					, "mode": "repulse"
				}
				, "onclick": {
					"enable": true
					, "mode": "push"
				}
				, "resize": true
			}
			, "modes": {
				"grab": {
					"distance": 400
					, "line_linked": {
						"opacity": 1
					}
				}
				, "bubble": {
					"distance": 400
					, "size": 40
					, "duration": 2
					, "opacity": 8
					, "speed": 3
				}
				, "repulse": {
					"distance": 200
					, "duration": 0.4
				}
				, "push": {
					"particles_nb": 4
				}
				, "remove": {
					"particles_nb": 2
				}
			}
		}
		, "retina_detect": true
	});
});
// grab the initial top offset of the navigation 
var stickyNavTop = jQuery('body').offset().top;
// our function that decides weather the navigation bar should have "fixed" css position or not.
var stickyNav = function () {
	var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top
	// if we've scrolled more than the navigation, change its position to fixed to stick to top,
	// otherwise change it back to relative
	if (scrollTop > 10) {
		jQuery('header').addClass('sticky animated fadeInDown');
	}
	else {
		jQuery('header').removeClass('sticky fadeInDown');
	}
};
stickyNav();
// and run it again every time you scroll
jQuery(window).scroll(function () {
	stickyNav();
});