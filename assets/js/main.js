
(function($){
	"use strict";

	// START MEAN MENU JS CODE
    jQuery(document).ready(function () {
        jQuery('.menu-area').meanmenu();
    });
	// START MEAN MENU JS CODE

	// START PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
	// END PRELOADER JS CODE
	
	$(document).on('ready', function(){
		
		// START MENU SHRINK JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 150) {
				$('.header-area').addClass('menu-shrink animated slideInDown');
			} else {
				$('.header-area').removeClass('menu-shrink animated slideInUp');
			}
		});
		// END MENU SHRINK JS CODE

		// START COUNTER AREA JS CODE
		(function ($) {
			$.fn.countTo = function (options) {
				options = options || {};
				
				return $(this).each(function () {
					// set options for current element
					var settings = $.extend({}, $.fn.countTo.defaults, {
						from:            $(this).data('from'),
						to:              $(this).data('to'),
						speed:           $(this).data('speed'),
						refreshInterval: $(this).data('refresh-interval'),
						decimals:        $(this).data('decimals')
					}, options);
					
					// how many times to update the value, and how much to increment the value on each update
					var loops = Math.ceil(settings.speed / settings.refreshInterval),
						increment = (settings.to - settings.from) / loops;
					
					// references & variables that will change with each update
					var self = this,
						$self = $(this),
						loopCount = 0,
						value = settings.from,
						data = $self.data('countTo') || {};
					
					$self.data('countTo', data);
					
					// if an existing interval can be found, clear it first
					if (data.interval) {
						clearInterval(data.interval);
					}
					data.interval = setInterval(updateTimer, settings.refreshInterval);
					
					// initialize the element with the starting value
					render(value);
					
					function updateTimer() {
						value += increment;
						loopCount++;
						
						render(value);
						
						if (typeof(settings.onUpdate) == 'function') {
							settings.onUpdate.call(self, value);
						}
						
						if (loopCount >= loops) {
							// remove the interval
							$self.removeData('countTo');
							clearInterval(data.interval);
							value = settings.to;
							
							if (typeof(settings.onComplete) == 'function') {
								settings.onComplete.call(self, value);
							}
						}
					}
					
					function render(value) {
						var formattedValue = settings.formatter.call(self, value, settings);
						$self.html(formattedValue);
					}
				});
			};
			
			$.fn.countTo.defaults = {
				from: 0,               // the number the element should start at
				to: 0,                 // the number the element should end at
				speed: 1000,           // how long it should take to count between the target numbers
				refreshInterval: 100,  // how often the element should be updated
				decimals: 0,           // the number of decimal places to show
				formatter: formatter,  // handler for formatting the value before rendering
				onUpdate: null,        // callback method for every time the element is updated
				onComplete: null       // callback method for when the element finishes updating
			};
			
			function formatter(value, settings) {
				return value.toFixed(settings.decimals);
			}
		}(jQuery));
		
		jQuery(function ($) {
		  // custom formatting example
		  $('.count-number').data('countToOptions', {
			formatter: function (value, options) {
			  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
			}
		  });
		  
		  // start all the timers
		  $('.timer').each(count);  
		  
		  function count(options) {
			var $this = $(this);
			options = $.extend({}, options || {}, $this.data('countToOptions') || {});
			$this.countTo(options);
		  }
		});
		// END COUNTER AREA JS CODE

		// START ACHIEVEMENT SLIDER AREA JS CODE
		$('.achievement-slider').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 6000,
			speed: 800,
			slidesToShow: 1,
			adaptiveHeight: true,
			arrows: false,
		});
		// END ACHIEVEMENT SLIDER AREA JS CODE

		// START STUDENT REVIEW REVIEW SLIDER AREA JS CODE
		$('.student-review-slider').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 6000,
			speed: 800,
			slidesToShow: 1,
			adaptiveHeight: true,
			arrows: false,
		});
		// END STUDENT REVIEW REVIEW SLIDER AREA JS CODE

		// START COURSE SLIDER AREA JS CODE
		$('.course-slider').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 6000,
			speed: 800,
			slidesToShow: 1,
			adaptiveHeight: true,
			arrows: false,
		});
		// END COURSE SLIDER AREA JS CODE

		// START VIDEO POPUP JS CODE
		$(".vpop").on('click', function(e) {
			e.preventDefault();
			$("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
			
			var srchref='',autoplay='',id=$(this).data('id');
			if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
			else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
			
			if($(this).data('autoplay') == true) autoplay = '?autoplay=1';
			
			$("#video-popup-iframe").attr('src', srchref+id+autoplay);
			
			$("#video-popup-iframe").on('load', function() {
			  $("#video-popup-container").show();
			});
		});
		
		$("#video-popup-close, #video-popup-overlay").on('click', function(e) {
			$("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
			$("#video-popup-iframe").attr('src', '');
		});
		// END VIDEO POPUP JS CODE
		
	  	// START WOW ACTIVE JS CODE
		new WOW().init();
		// END WOW ACTIVE JS CODE

		// START POPPUP GALLERY JS CODE
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image'
		});
		// END POPPUP GALLERY JS CODE
	

		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="icofont-simple-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE

	});

	// START MODERN SLIDER JS CODE
	$(document).ready(function(){
		$(".modern-slider").slick({
		autoplay:true,
		autoplaySpeed:10000,
		speed:600,
		slidesToShow:1,
		slidesToScroll:1,
		pauseOnHover:false,
		dots:true,
		pauseOnDotsHover:true,
		cssEase:'linear',
		nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="icofont-rounded-right"></i></div>',
		prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="icofont-rounded-left"></i></div>',
		});
	})
	// END MODERN SLIDER JS CODE
	
	// START MIXITUP JS CODE
	var mixer = mixitup('#shorting');
	// END MIXITUP JS CODE

}(jQuery));
