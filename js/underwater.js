var windowH,
		showDetritus = false;

(function($){

	$(window).on("load", function() {

		windowH = $( window ).height();
		var isUnderWater = false,
				$underwater = $('.underwater');
		var uwTop = 0;//$( ".underwater" ).offset().top;
		
		var maxRange = 500; //range of visibility, in z-space
				// scrollRun = false,
				// scrollqueue = false;
		var $bodyDiv = $('#body');

		$bodyDiv.scroll(function() {
			newScrollTop = $bodyDiv.scrollTop();
			
			// check if uw is onscreen, if so launch canvas detritus.
			if(newScrollTop > uwTop + windowH/2){ // + windowH/2
				showDetritus = true;
				if(!isUnderWater){
					isUnderWater = true;
					$('body').removeClass('above').addClass('below');
				}
				// console.log('showDetritus');
			}else{
				showDetritus = false;
				if(isUnderWater){
					isUnderWater = false;
					$('body').removeClass('below').addClass('above');
				}
			}
		});

		function buildNodes(){

			var nodeTemplate = $('.nw-template');
	  
		  for(var i = 0; i < uwNodes.length; i++) {
		    var node = uwNodes[i];

		    nodeTemplate.clone()
		      .removeClass('nw-template')
		      .addClass('nw-'+ i + ' ' + node.class)
		      .appendTo( underwater );
		    
		    var objTemplate = $('.nw-'+ i + ' .obj-template');
		    
		    for(var n = 0; n < node.objects.length; n++) {
		      var obj = node.objects[n];  

		      objTemplate.clone()
		        .removeClass('obj-template')
		        .addClass('object-'+ n + ' ' + obj.class)
		        .css('transform', 'translate3d(' + obj.posx + 'vw, ' + obj.posy + 'vw, ' + obj.posz + 'vw) rotateX('+ obj.rotx +'deg) rotateY('+  obj.roty +'deg)')
		        .data( "posx", obj.posx )
		        .data( "posy", obj.posy )
		        .data( "posz", obj.posz )
		        .data( "rotx", obj.rotx )
		        .data( "roty", obj.roty )
		        .html('<div class="inner">'+obj.content+'</div>')
		        .appendTo( '.nw-' + i + ' .camera');

		    }

		    objTemplate.remove();
		    $objFirst = $('.nw-' + i + ' .object:first-child').addClass('here');
		    
		    
		  }
		  
		  nodeTemplate.remove();
		}

		buildNodes();


		// Node Swim

		$('.camera').each(function(){
			var elem = $( this );
		  		posz = 0 - elem.find('.here').data('posz');
					setDistance(elem, posz);
		});

		$( ".underwater" ).on( "click", ".camera .object:not(.spin)", function() {
		  
		  if( $(this).hasClass('here') ){

		  	if( $(this).next().length ){

					var elem = $( this ).next();
					// console.log('next');

				} else {

					var elem = $( this ).siblings(':first-child');
					// console.log('first');

				}

		  } else {

		  	var elem = $( this );
					// console.log('this');

		  }

		  // console.log(elem.attr("class"));

		  var rotx = 0 - elem.data('rotx'),
		  		roty = 0 - elem.data('roty'),
		  		posx = 0 - elem.data('posx'),
		  		posy = 0 - elem.data('posy'),
		  		posz = 0 - elem.data('posz');

		  		rotx = rotx || 0;
		  		roty = roty || 0;
		  		posx = posx || 0;
		  		posy = posy || 0;
		  		posz = posz || 0;

		  // console.log('translate3d(' + posx + 'vw , ' + posy + 'vw, ' + posz + 'vw) rotateX(' + rotx + 'deg) rotateY(' + roty + 'deg)');
		  
		  //$('.camera')		
		  elem.parent().css('transform', 'translate3d(' + posx + 'vw , ' + posy + 'vw, ' + posz + 'vw)').find('.here').removeClass('here');
			$('.background').css('transform', 'translate3d(' + posx + 'vw , ' + posy + 'vw, ' + posz + 'vw)').find('.here').removeClass('here');
		  // elem.parent().find('.object').each( function(){

		  // 	var distz = ( Math.abs( -1*posz - $( this ).data('posz') ) ) / maxRange;
				// if(distz > 1){ distz = 1; }
		  // 	$( this ).find('.inner').children().css('opacity', 1 - distz);


		  // });
		  setDistance(elem.parent(), posz);

		  elem.addClass('here');

		});

		function setDistance(elem, posz) {

				elem.find('.object').each( function(){

			  	var distz = ( Math.abs( -1*posz - $( this ).data('posz') ) ) / maxRange;
					if(distz > 1){ distz = 1; }

			  	$( this ).find('.inner').children().css('opacity', 1 - distz);


					//swim(); // enable this to trigger detritus animation

			  });

		}

		// End Node Swim

	  
		

	  
	 // 	BEGIN SKULL GRAB AND ROTATE 
	  var offsetY = 0,
			offsetX = 0,
			offset_percent = 0,
			wrapper_offset = $('.spin').parent().offset(),
			wrapper_width = $('.spin').parent().width(),
			startY = 30,
			startX = 5,
			trigger;
		$('.node-wrapper').on('vmousedown', '.spin.here', function (e) {
					trigger = e.pageX - wrapper_offset.left;
	      // console.log('md');
	    })
	    .on('vmouseup mouseleave', '.spin.here', function() {
	        startY = offsetY;
					startX = offsetX;
					trigger = null;
					// console.log('mu');
	    })
	    .on('vmousemove', '.spin.here', function (e) {
	  
					// console.log('mm');
					// console.log('offset'+offsetY);
	        if(trigger) {

	        	var object = $(this);
	        	posx = $( this ).data('posx'),
			  		posy = $( this ).data('posy'),
			  		posz = $( this ).data('posz');

			  		posx = posx || 0;
			  		posy = posy || 0;
			  		posz = posz || 0;
						
						offset_percent = (((e.pageX - wrapper_offset.left)-trigger)/wrapper_width); // 60 degree range
						var offsettemp = startY + (offset_percent)*60;
						
						if(offsettemp > -31 && offsettemp < 31 ){
						
							offsetX = startX + (offset_percent)*10;
							
							offsetY = startY + (offset_percent)*60;
							if(offsetY > -8 && offsetY < 8){
								offsetY = 0;
								offsetX = 0;
							}
							
							object.css('transform', 'translate3d(' + posx + 'vw , ' + posy + 'vw, ' + posz + 'vw) rotateY(' + offsetY + 'deg) rotateX(' + offsetX + 'deg)');
						//	elem.style['transform'] = 'rotateY(' + offsetY + 'deg) rotateX(' + offsetX + 'deg)';

						}
	        }
	    });

	   });
	
	// 	END SKULL GRAB AND ROTATE

})(jQuery);