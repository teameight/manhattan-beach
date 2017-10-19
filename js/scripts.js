(function($){ // jQuery code here

	$(document).ready(function() {
		// Subnav
		$('.menu-item-has-children').on('click', function(e) {
			if(!$(e.target).is('.menu-item-has-children > a')) return;
			e.preventDefault();
			$(this).toggleClass('active').find('.sub-menu').slideToggle();
		});


		//menu toggle
		$('.main-navigation .menu-toggle').click(function(event){
			event.preventDefault();
			$mainnav = $(this).parent('.main-navigation');
			$(this).toggleClass('tcon-transform');
			$mainnav.toggleClass( "toggled" );
			$('#body').toggleClass('no-scroll');
			if($mainnav.hasClass('toggled')){
				$(this).attr( 'aria-expanded', 'true' );
				$mainnav.find('.menu').attr( 'aria-expanded', 'true' );
			}else{
				$(this).attr( 'aria-expanded', 'false' );
				$mainnav.find('.menu').attr( 'aria-expanded', 'false' );
			}
		});


		$(document).on('click', function(event) {
			if (!$(event.target).closest('.main-navigation').length && !$(event.target).closest('.video').length ) {
				console.log($(event.target).closest('.video').length);
		    $('.menu-toggle').removeClass('tcon-transform');
				$( ".main-navigation" ).removeClass( "toggled" );
				$('#body').removeClass('no-scroll');
		  }
		  if (!$(event.target).closest('.menu-item-has-children').length) {
		    $('.menu-item-has-children').removeClass('active').find('.sub-menu').slideUp();
		  }
		});


		// Select all links with hashes
		$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

	    	
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, #body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });



	});


})(jQuery);