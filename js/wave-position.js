(function($){

	$(window).on("load", function() {

		var waitForFinalEvent = (function () {
		  var timers = {};
		  return function (callback, ms, uniqueId) {
		    if (!uniqueId) {
		      uniqueId = "Don't call this twice without a uniqueId";
		    }
		    if (timers[uniqueId]) {
		      clearTimeout (timers[uniqueId]);
		    }
		    timers[uniqueId] = setTimeout(callback, ms);
		  };
		})();

		function setWaterHeight() {
			// var waterline = $('.waterline');

			// waterline.css('top', offset + 'px');
			var offset = $('#page-wrap').outerHeight(true);
			var windowW = $( window ).width();
			var windowH = $( window ).height();


			var $persp = 80,
				$persp_o = -12,

				$wave_offset = 600, // this also sets the speed of the wave parallax compared to scroll. higher = slower.
				$wave_reveal = 18; //25.118;

			var	$v_o_seed = $wave_reveal / $wave_offset;

			var	$v_o_factor = $v_o_seed * $persp; //this number increases as $persp-o increases

			var offsetMultiplier = 100;
			//if (offset < windowW) offsetMultiplier = 12;

			var $page_offset = (offset / windowW) * 100;

			var $vert_offset = (($page_offset / $wave_offset) * $persp)*.45; //$v_o_factor * 4; // half the ((height/width)-overlap) of each element
			var $translate_z = $persp * ( 1 - ( $persp / $vert_offset ) );
			var $scale = ( $persp - $translate_z ) / $persp;

			console.log($vert_offset);


			$('.wave-wrap').css({
				'height': (($page_offset) + 100 + ((windowW / windowH)*230)-($wave_reveal*10)) + 'vw'
			});

			// $('.page-h').css({
			// 	'height':  ($page_offset) + 'vw'
			// });
			// $('.window-w').css({
			// 	'height':  windowW + 'px'
			// });
			// $('.window-h').css({
			// 	'height':  ((windowW / windowH)*200) + 'vw'
			// });
			// $('.wave-reveal').css({
			// 	'top':  (0 - $wave_reveal*4) + 'vw'
			// });
			// $('.persp-o').css({
			// 	'top':  ($persp_o) + 'vw'
			// });

			$('.wave-back').css({
				'top': ($vert_offset * 10) + 'vw', 
				'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )'
			});

			$('.wave-l-1').css({
				'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )'
			});

			$vert_offset = $vert_offset + $v_o_factor;
			$translate_z = $persp * ( 1 - ($persp / $vert_offset ) );
			$scale = ( $persp - $translate_z ) / $persp;

			$('.wave-l-2').css({
				'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )'
			});

			$vert_offset = $vert_offset + $v_o_factor;
			$translate_z = $persp * ( 1 - ($persp / $vert_offset ) );
			$scale = ( $persp - $translate_z ) / $persp;

			$('.wave-l-3').css({
				'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )'
			});

			$vert_offset = $vert_offset + $v_o_factor;
			$translate_z = $persp * ( 1 - ($persp / $vert_offset ) );
			$scale = ( $persp - $translate_z ) / $persp;

			$('.wave-l-4').css({
				'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )'
			});

			$vert_offset = $vert_offset + $v_o_factor;
			$translate_z = $persp * ( 1 - ($persp / $vert_offset ) );
			$scale = ( $persp - $translate_z ) / $persp;

			$('.wave-l-5').css({
				'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )'
			});

			$vert_offset = $vert_offset + $v_o_factor;
			$translate_z = $persp * ( 1 - ($persp / $vert_offset ) );
			$scale = ( $persp - $translate_z ) / $persp;

			$('.wave-l-6').css({
				'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )'
			});

			$vert_offset = $vert_offset + $v_o_factor;
			$translate_z = $persp * ( 1 - ($persp / $vert_offset ) );
			$scale = ( $persp - $translate_z ) / $persp;

			$('.wave-l-7').css({
				'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )'
			});

		}

		setWaterHeight();

		$(window).resize(function () {
			waitForFinalEvent(function(){
		      setWaterHeight();
		      //...
		    }, 300, "resize water");
		});

	});

})(jQuery);