$(document).ready(function () {

	// Main menu open
    if ($(".header__burger").length > 0) {
        $(".header__burger").click(function(){
            $(this).toggleClass("active");
            $("body").toggleClass("lock");
            $(".menu").toggleClass("active");
        });
        $(".header__menu-closed").click(function(){
            $(this).toggleClass("active");
            $("body").toggleClass("lock");
            $(".menu").toggleClass("active");
        });
    }

	// Phone mask
    $(".phone-mask").mask("+7 (999) 999 99 99");

    // Product tabs
    if ($(".main__tab").length > 0) {
        $(function () {
            $('.main__tabs').each(function () {
                $(this).find('.main__tab').each(function (i) {
                    $(this).click(function () {
                        $(this).addClass('active').siblings().removeClass('active').closest('.main__right-conten').find('.main__block').removeClass('active').eq(i).addClass('active');
                    });
                });
            });
        })
    }

    /*Focus*/
    if ($(".order__field").length > 0) {
    	$('.order__field').on('focus', function () {
       		$(this).parent().addClass("active");
    	});
	    $('.order__field').on('blur', function () {
	        let email = $(this).val();
	        if (email.length == 0) {
	        	$(this).parent().removeClass("active");
	        } else {
	        	$(this).parent().addClass("active");
	        }
	    });
    }

    // Accordeon projects
	$('.faq__top').click(function() {
	    $('.faq__top').not(this).parent().removeClass("active");
	    $('.faq__top').not(this).next().slideUp(200);
	    $(this).parent().toggleClass("active");
	    $(this).next().slideToggle(200);
	});

	// Main Cases Slick Slider
	if ($(".team__slick").length > 0) {
	    $('.team__slick').slick({
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        arrows: false,
	        dots: false,
	        infinite: true,
	        responsive: [
	            {
	              breakpoint: 1210,
	              settings: {
	                slidesToShow: 3,
	              }
	            },
	            {
	              breakpoint: 1010,
	              settings: {
	                slidesToShow: 2,
	              }
	            },
	            {
	              breakpoint: 600,
	              settings: {
	                slidesToShow: 1,
	              }
	            }
	        ]
	    });
	    $('.team-arrow.team-arrow_prev').click(function(event) {
	        $(this).parents('.team__body').find('.team__slick').slick('slickPrev');
	    });
	    $('.team-arrow.team-arrow_next').click(function(event) {
	        $(this).parents('.team__body').find('.team__slick').slick('slickNext');
	    });
	}

	// Main Cases Slick Slider
	if ($(".whom__slick").length > 0) {
	    $('.whom__slick').slick({
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        arrows: false,
	        dots: false,
	        infinite: true,
	        responsive: [
	            {
	              breakpoint: 1210,
	              settings: {
	                slidesToShow: 3,
	              }
	            },
	            {
	              breakpoint: 1010,
	              settings: {
	                slidesToShow: 2,
	              }
	            },
	            {
	              breakpoint: 600,
	              settings: {
	                slidesToShow: 1,
	              }
	            }
	        ]
	    });
	    $('.whom-arrow.whom-arrow_prev').click(function(event) {
	        $(this).parents('.whom__body').find('.whom__slick').slick('slickPrev');
	    });
	    $('.whom-arrow.whom-arrow_next').click(function(event) {
	        $(this).parents('.whom__body').find('.whom__slick').slick('slickNext');
	    });
	}

	if ($(".cases__slick").length > 0) {
	    $('.cases__slick').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        dots: false,
			fade: true,
	        infinite: true,
			asNavFor: '.background-box__slick'
	    });
	    $('.cases-arrow.cases-arrow_prev').click(function(event) {
	        $(this).parents('.cases__right').find('.cases__slick').slick('slickPrev');
	    });
	    $('.cases-arrow.cases-arrow_next').click(function(event) {
	        $(this).parents('.cases__right').find('.cases__slick').slick('slickNext');
	    });
	}
	if ($(".background-box__slick").length > 0) {
	    $('.background-box__slick').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        dots: false,
			fade: true,
	        infinite: true,
			asNavFor: '.cases__slick',
	    });
	}

	if ($(window).width() <= '1250'){
		$(".menu a").click(function () {
	        $(".header__burger").removeClass("active");
	        $(".menu").removeClass("active");
	        $(".menu__mobile").removeClass("active");
	        $("body").removeClass("lock");
	        var elementClick = $(this).attr("href")
	        var destination = $(elementClick).offset().top - 50;
	        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
	        return false;
	    });
	}
});

$(document).ready(function () {


	var slideIndexBis = 1;
	var sliding = false;
	
	$('#fullpage').fullpage({
		lockAnchors: false,
		anchors: ['b-section1', 'b-section2', 'b-section3', 'b-section4', 'b-section5', 'b-section6', 'b-section7', 'b-section8', 'b-section9', 'b-section10', 'b-section11', 'b-section12'],
		menu: '#menu',
        navigation: true,
        controlArrows: false,
        responsiveHeight: 801,
        responsiveWidth: 1251,
        interlockedSlides: false,
		licenseKey: 'B3EEDB73-3BA144D0-8E39A506-24B27A42',
        afterLoad: function(anchorLink, index) { // при загрузке
		    var total = $('#fullpage').find('.fp-section').length;
		    if (index.index + 1 < 10) {
		    	$('.out-current').text("0" + (index.index + 1));
		    } else {
		    	$('.out-current').text(index.index + 1);
		    }
		    $('.out-total').text(total);
		},
		onLeave: function (origin, destination, direction, anchorLink, index) {

			$('.section').removeClass('leaveSlide');
			$('[data-anchor='+origin.anchor+']').addClass('leaveSlide');

            var leavingSection = this;
            if (destination.index == 0) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                    $(".background-box_1").addClass("active");
                }, 500);
            } else if (destination.index == 1) {
                setTimeout(function () {
                    $('#views').animateNumber({ number: 5 });
                }, 1000);
                setTimeout(function () {
                    $('#subscribers').animateNumber({ number: 230 });
                }, 1000);
                setTimeout(function () {
                    $('#conversion').animateNumber({ number: 5 });
                }, 1000);
                setTimeout(function () {
                    $('#comments').animateNumber({ number: 176 });
                }, 1000);
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                }, 500);
            } else if (destination.index == 2) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                }, 500);
            } else if (destination.index == 3) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                }, 500);
            } else if (destination.index == 4) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                    $(".background-box_5").addClass("active");
                }, 500);
            } else if (destination.index == 5) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                }, 500);
            } else if (destination.index == 6) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                    $(".background-box_7").addClass("active");
                }, 500);
            } else if (destination.index == 7) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                }, 500);
            } else if (destination.index == 8) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                }, 500);
            } else if (destination.index == 9) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                }, 500);
            } else if (destination.index == 10) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                }, 500);
            } else if (destination.index == 11) {
                setTimeout(function () {
                    $(".background-box").removeClass("active");
                }, 500);
            }

            if (destination.index==4 && $('#bgBlur').hasClass('active') == false) {
                var coords = document.getElementById("bgBlur").getBoundingClientRect();
                $('#bgBlur').css('left', - coords.left + 100).css('top', - coords.top).addClass('active');
            }
        }
	});
	$('.main-arrow_next').on('click', function(){
	    $.fn.fullpage.moveSlideLeft();
        $(".background-box_5").removeClass("active");
	});
	$('.main-arrow_prev').on('click', function(){
	    $.fn.fullpage.moveSlideRight();
        $(".background-box_5").addClass("active");
	});


	$('.fp-right').append('<div class="out-current">01</div>');
	$('.fp-right').append('<div class="out-total">12</div>');
});

// Fullpage
    /*if ($("#fullpage").length > 0) {
        new fullpage('#fullpage', {
            navigation: true,
            licenseKey: null,
            responsiveHeight: 801,
            responsiveWidth: 1211,
            keyboardScrolling: true,
            scrollBar: false,
            fadingEffect: true,
			fadingEffectKey: 'YWx2YXJvdHJpZ28uY29tXzAzN1ptRmthVzVuUldabVpXTjBiNXo='
        });
    }*/
    /*new fullpage('#fullpage', {
		sectionsColor: ['#61bd6d', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#ccc'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
		menu: '#menu',
		licenseKey: 'B3EEDB73-3BA144D0-8E39A506-24B27A42',
		slidesNavigation: true,
		autoScrolling: true,
		fadingEffect: true,
	});*/

        /*$('#fullpage').fullpage({
			slidesNavigation: true,
			slidesNavPosition: 'top',
			sectionsColor : ['#d8d3ff', '#fff'],
	        paddingTop: '0',
			paddingBottom: '0'
		});*/