(function ($) {
"use strict";

// meanmenu
$('.main_menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});
// data background
$("[data-background]").each(function(){
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
});
//scrolling opacity
var animation_start_pos = 1000, animation_end_pos = 2000; //where you want the animation to stop

$(document).scroll(function() {
    var scroll_pos = $(this).scrollTop(); 
        var percentScrolled = parseFloat(scroll_pos/animation_end_pos);
        jQuery('.people-opacity').css('opacity',  percentScrolled );
});

// One Page Nav for Menu Nav
function smoothSctollTop() {
	$('.main_menu ul li > a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
					event.preventDefault();
					$('html, body').stop().animate({
							scrollTop: target.offset().top - 80
					}, 1000);
			}
	});
}
smoothSctollTop();
/// default active
$('.main_menu ul li:first-child > a').addClass('active')
//menu active
$('.main_menu ul li > a').on('click',function(){
	$('li a').removeClass("active");
	$(this).addClass("active");
});


//active on scroll
$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop();

	//Show/hide menu on scroll
	// if (scrollDistance >= 850) {
	// 		$('nav').fadeIn("fast");
	// } else {
	// 		$('nav').fadeOut("fast");
	// }

	// Assign active class to nav links while scolling
	$('Section').each(function(i) {
			if ($(this).position().top <= scrollDistance) {
					$('.main_menu nav a.active').removeClass('active');
					$('.main_menu nav a').eq(i).addClass('active');
			}
	});
}).scroll();



//sticky 
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header").removeClass("sticky");
	} else {
		$(".header").addClass("sticky");
	}
});



// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: '<i class="fa fa-arrow-left arrow_left"></i>',
		nextArrow: '<i class="fa fa-arrow-right arrow_right"></i>',
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

//clinet slick slider
$('.client-slick').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	prevArrow:'<i class="fa fa-arrow-left arrow_left_clinet"></i>',
	nextArrow:'<i class="fa fa-arrow-right arrow_right_client"></i>',
	responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
});


var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
		}
})
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa fa-arrow-up arrow_right"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);

