;(function () {
	$(".profile-thumb").click(() => {
		$(".profile-thumb")[0].style.height = "0px";
		$(".profile-thumb")[0].style.opacity = 0;
	})
	
	
	window.onmousemove = function(e) {
		window.mouse = {PosY: e.pageY, PosX: e.pageX}
		var tipElement = $(".headsup-tip")[0], 
		pthumb = $(".profile-thumb")[0], 
		__accountTwitter = $(".account-twitter")[0], 
		__accountGithub1 = $(".account-github")[0], 
		__accountGithub2 = $("[account=github]")[0], 

		keyclub = $(".hover-kclub")[0], 
		legostem = $(".hover-stem")[0], 
		devtools = $(".hover-devt")[0], 
		scratch = $(".hover-scrt")[0], 

		siteSourceElement = $(".site-source")[0];
		tipElement.style.top = `${(((window.mouse.PosY-window.scrollY) / window.innerHeight) * 100)+1}%`
		tipElement.style.left = `${(((window.mouse.PosX-window.scrollX) / window.innerWidth) * 100)+1}%`
		tipElement.style.opacity = 0;

		if(e.target == (pthumb)) {
			tipElement.innerHTML = "Click to hide this ugliness.";
			tipElement.style.opacity = 1;
		}
		if(e.target == (keyclub)) {
			tipElement.innerHTML = "What is Key Club?";
			tipElement.style.opacity = 1;
		}
		if(e.target == (legostem)) {
			tipElement.innerHTML = "What is LEGO's STEM?";
			tipElement.style.opacity = 1;
		}
		if(e.target == (devtools)) {
			tipElement.innerHTML = "Click to view Chrome's DevTools";
			tipElement.style.opacity = 1;
		}
		if(e.target == (scratch)) {
			tipElement.innerHTML = "Click to visit <a href=''>scratch.mit.edu</a>";
			tipElement.style.opacity = 1;
		}
		if(e.target == (__accountTwitter)) {
			tipElement.innerHTML = "Visit @kodalee4 on Twitter";
			tipElement.style.opacity = 1;
		}
		if(e.target == (__accountGithub2) || e.target == (__accountGithub1)) {
			tipElement.innerHTML = "Visit kodalee on Github";
			tipElement.style.opacity = 1;
		}

		if(e.target == (siteSourceElement)) {
			tipElement.innerHTML = "source code at <a href=''>github.com/kodalee/koda.life</a>";
			tipElement.style.opacity = 1;
		}
	}

	window.onscroll = () => {
		$(".scroll-watch")[0].style.opacity = 1;
		$(".scroll-watch")[0].style.backgroundColor = "rgba(0,0,0,0.4)";
		$(".scroll-watch")[0].style.width = "75px";
		$(".scroll-watch")[0].style.color = "";
		$(".scroll-watch")[0].style.top = `${(window.scrollY / document.body.scrollHeight) * 100}%`;
		lol = Date.now();var lol2 = Date.now();
		setTimeout(() => {if(lol == lol2) {$(".scroll-watch")[0].style.opacity = 0;$(".scroll-watch")[0].style.width = "0px";}}, 1000)
	
		$(".scroll-watch")[0].innerHTML = `${Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)}%`
	}
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#klee-skills').length > 0 ) {
			$('#klee-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};


	// Loading page
	var loaderPage = function() {
		$(".klee-loader").fadeOut("slow");
	};

	
	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
	});


}());
