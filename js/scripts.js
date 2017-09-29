(function($){ // jQuery code here

	$(document).ready(function() {
		// Subnav
		$('.menu-item-has-children').on('click', function(e) {
			if(!$(e.target).is('.menu-item-has-children > a')) return;
			e.preventDefault();
			$(this).toggleClass('active').find('.sub-menu').slideToggle();
		});
	});

})(jQuery);