$(window).load (function () {
    "use strict";
    //Slick NAV MENU
    	$('#menu').slicknav({
		label:'',
        duration:600,
	})
//Header Menu Scroll JS--All animations will take exactly 3000ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 3000,
	speedAsDuration: true
});

	$(window).scroll(function(){

		var top	= $(window).scrollTop();
		if(top>=60){
			$("header").addClass('header-trans');
		}

		else
			if($("header").hasClass('header-trans')){
				$("header").removeClass('header-trans');
			}
	});
   
    
        if ($('.isotope_items').length) {

         var $container = $('.isotope_items');
         $container.isotope();

        $('.portfolio_filter ul li').on("click", function(){
            $(".portfolio_filter ul li").removeClass("select-cat");
            $(this).addClass("select-cat");				 
            var selector = $(this).attr('data-filter');
            $(".isotope_items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
        });
            return false;
        });  

    };

    // MAGNIFIC POPUP FOR PORTFOLIO PAGE

    $('.link').magnificPopup({
            type:'image',
            gallery:{enabled:true},
            zoom:{enabled: true, duration: 300}
        });


    //Portfolio Isotope/Slider JS
    if ($('.isotope_items').length) {

         var $container = $('.isotope_items');
         $container.isotope();

        $('.portfolio_filter ul li').on("click", function(){
            $(".portfolio_filter ul li").removeClass("select-cat");
            $(this).addClass("select-cat");              
            var selector = $(this).attr('data-filter');
            $(".isotope_items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
        });
            return false;
        });  
    };
    
    
           // OWL CAROUSEL GENERAL JS
    var owlcar = $('.owl-carousel');
    if (owlcar.length) {
        owlcar.each(function () {
            var $owl = $(this);
            var itemsData = $owl.data('items');
            var autoPlayData = $owl.data('autoplay');
            var paginationData = $owl.data('pagination');
            var navigationData = $owl.data('navigation');
            var stopOnHoverData = $owl.data('stop-on-hover');
            var itemsDesktopData = $owl.data('items-desktop');
            var itemsDesktopSmallData = $owl.data('items-desktop-small');
            var itemsTabletData = $owl.data('items-tablet');
            var itemsTabletSmallData = $owl.data('items-tablet-small');
            $owl.owlCarousel({
                items: itemsData
                , pagination: paginationData
                , navigation: navigationData
                , autoPlay: autoPlayData
                , stopOnHover: stopOnHoverData
                , navigationText: ["<", ">"]
                , itemsCustom: [
                    [0, 1]
                    , [500, itemsTabletSmallData]
                    , [710, itemsTabletData]
                    , [992, itemsDesktopSmallData]
                    , [1199, itemsDesktopData]
                ]
            , });
        });
    };
    $('.animation').each(function(){
        
        var waypoint = new Waypoint({
            element: this,
            handler: function(direction){
                var animation = $(this.element).attr('data-animation')
                $(this.element).css('opacity','1');
                $(this.element).addClass("animated " + animation );
            },
            offset:'75%'
        })
    });
    
    /** for functional contact form **/

	$('.contact #submit').on('click', function(e) {
                        e.preventDefault();
                        var name = $('#name').val();
                        var email = $('#email').val();
                        var subject = $('#subject').val();
                        var message = $('#message').val();
                        var form = new Array({'name': name, 'email': email, 'subject':subject, 'message': message});

                        $.ajax({
                            type: 'POST',
                            url: "contact.php",
                            data: ({'action': 'contact', 'form': form})
                        }).done(function(data) {
                            $('#contact .result').html(data);

                        $(".contact-form")[0].reset();

                        });

                  
                    
                    });
     
});


