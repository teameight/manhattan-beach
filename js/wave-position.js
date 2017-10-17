// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    }
  });
}

/**
 *
 * Air lines on Home page
 */

var canvas, ctx, container,
	airheight, airwidth, wrapH,
	airxAxis, airyAxis,
  drawLines, airscale, strokeWidth

 	linestrokecolor='rgba(0,0,0,1)',

	linesParameters = [
			{
				letter:'a1',
				freq: 0.75,
				amp: 4,
				left: .216,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'n',
				freq: 0.75,
				amp: 4,
				left: .332,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'he',
				freq: 0.75,
				amp: 4,
				left: .383,
				rand: getRandomArbitrary(0, Math.PI),
				height: .43,
				top:.267
			},
			{
				letter:'a2',
				freq: 0.75,
				amp: 4,
				left: .575,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'t',
				freq: 0.75,
				amp: 4,
				left: .635,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'a3',
				freq: 0.75,
				amp: 4,
				left: .875,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'a4',
				freq: 0.75,
				amp: 4,
				left: .44,
				rand: getRandomArbitrary(0, Math.PI),
				top:.94
			},
			{
				letter:'h2',
				freq: 0.75,
				amp: 4,
				left: .7475,
				rand: getRandomArbitrary(0, Math.PI),
				top:.94
			}
		];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
window.requestAnimFrame = (function(){
return window.requestAnimationFrame   ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame    ||
	function(callback){
		window.setTimeout(callback, 1000 / 60);
	};
})();
function airLinesInit() {

    canvas = document.getElementById("airlinesCanvas");
    container = document.getElementById("airlinesWrap");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx = canvas.getContext("2d");
    ctx.lineJoin = 'round';

		airwidth = canvas.width;
    airheight = canvas.height;
    wrapH = container.offsetHeight;
    strokeWidth = airwidth * 0.0055;
    airxAxis = 0;
    airyAxis = Math.floor(airwidth/2);

		airscale={x: .5, y: airwidth/4};

    ctx.save();
    drawLines();
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
drawLines = function () {
    // Clear the canvas
    ctx.clearRect(0, 0, airwidth, airheight);

    drawAirLines(drawLines.t);

		drawLines.seconds = drawLines.seconds - 0.003;
    drawLines.t = drawLines.seconds*Math.PI;

		requestAnimFrame(drawLines);

};
drawLines.seconds = 0;
drawLines.t = 0;
/**
 * Function to draw sine
 *
 * The sine curve is drawn in segments starting at the origin.
 */

function drawAirLines(t) {
// Set the initial x and y, starting at 0,0 and translating to the origin on the canvas.

	for (var li = 0; li < linesParameters.length; li++) {

		p = linesParameters[li];

    var x = 0;
    var y = t + p.rand;

		var amp = Math.sin(y), // this is also swing
				cpath = [];

		p.newFreq = p.freq + (p.freq*Math.cos( p.rand + t ))/15;
		p.newAmp = p.amp + (p.amp*Math.cos( p.rand + t ))/2;

		var prevX = 0;
		var stopCheck = false;
    // Loop to draw segments
   	for (i = airxAxis; i <= (airheight+(airheight/30)); i += (airheight/80)) {

      y = i;
			var currentX = 0;

			var val=Math.sin((p.newFreq*i-airxAxis)/airscale.y);
			var addToX = val*p.newAmp*airscale.x*amp;
			var swing = (0-amp)*(i/(airheight/80))*p.amp*.075;
			currentX+=addToX;
			currentX+=swing;

			prevX = currentX;

			if(p.letter === 'he'){
      	if(i > p.airheight*wrapH){
	      	if(!stopCheck){
						cpath.push({x:currentX,y:p.airheight*wrapH});
						stopCheck = true;
					}
	      }else{
	      	cpath.push({x:currentX,y:i});
	      }
      }else{
				cpath.push({x:currentX,y:i});
			}

    }

		var left = p.left*airwidth,
				top = p.top*wrapH;

		var gradient = ctx.createLinearGradient(airwidth/2, 0, airwidth/2, airheight*.9);
    gradient.addColorStop(0.00, linestrokecolor);
    gradient.addColorStop(0.20, 'rgba(0,0,0,0.3)');
    gradient.addColorStop(0.90, 'rgba(0,0,0,0.15)');
    gradient.addColorStop(1.00, 'rgba(0,0,0,0)');

    // draw the gradient-stroked line at this point
    ctx.strokeStyle = gradient;

		ctx.lineCap = "round";
		ctx.strokeStyle=gradient;
		ctx.lineWidth = strokeWidth;
		ctx.beginPath();
		ctx.moveTo(cpath[0].x+left, cpath[0].y+top);


		for(var i=1; i<cpath.length; i++){
				var point = cpath[i];
				ctx.lineTo(point.x+left, point.y+top);
		}

		ctx.stroke();

	}//end lines loop
}

// END AIR LINES ON HOME PAGE



var wWidth = window.innerWidth;

var unit = 30, 
  waveCanvas, waveCtx,
  height, width, xAxis, yAxis,
  waveDraw, interval,

  scale={x: 100,y: .8},

  waveGrdStop1='rgba(50, 70, 80, 1)',
  waveGrdStop2='rgba(53, 74, 85, 1)',
  wavestrokecolor="rgba(255,255,255, 1)",
	wavecolor="#5b7b7b",

	wavestrokeWidth = wWidth*.002,
	parameters={
			freq: 1,
			amp: 55,
			type: "sin",
			rand: getRandomArbitrary(0, Math.PI)
		};

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function waveInit() {

    waveCanvas = document.getElementById("waveCanvas");

    waveCanvas.width = waveCanvas.offsetWidth;
    waveCanvas.height = waveCanvas.offsetHeight;

    waveCtx = waveCanvas.getContext("2d");
    waveCtx.lineJoin = 'round';

		width = waveCanvas.width;
    height = waveCanvas.height;

    xAxis = Math.floor(height*.333);
    yAxis = 0;

		scale={x: width/4,y: .25};

    waveCtx.save();
    waveDraw();
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
waveDraw = function () {
    interval = yAxis+Math.PI*unit;
    // Clear the canvas
    waveCtx.clearRect(0, 0, width, height);

    drawWave(waveDraw.t);

    // Update the time and waveDraw again

		waveDraw.seconds = waveDraw.seconds - 0.004;
    waveDraw.t = waveDraw.seconds*Math.PI;

		requestAnimFrame(waveDraw);

};
waveDraw.seconds = 0;
waveDraw.t = 0;
/**
 * Function to draw sine
 *
 * The sine curve is drawn in segments starting at the origin.
 */

function drawWave(t) {
// Set the initial x and y, starting at 0,0 and translating to the origin on the canvas.
    var x = t;

    var y = Math.sin(0);
		var amp = Math.sin(t);
		var py = amp*y+xAxis;

		var cpath = [];

		var p=parameters;

		p.newFreq = p.freq + (p.freq*Math.cos( p.rand + t ))/15;
		p.newAmp = p.amp + (p.amp*Math.cos( p.rand + t ))/2;

		var prevY = 0;
    // Loop to draw segments
   	for (i = yAxis; i <= (width+(width/10)); i += (width/80)) {

      x = i;
			var currentY = 0;

			var val=Math.sin((p.newFreq*i-yAxis)/scale.x);
			var addToY = val*p.newAmp*scale.y*amp;
			currentY+=addToY;

			prevY = currentY;
			var xPos = i - (scale.x/7) + (scale.x/8 * Math.sin(t));

			cpath.push({x:xPos,y:currentY});

    }
		waveCtx.lineWidth = wavestrokeWidth;

// MAIN WAVEFILL
		waveCtx.beginPath();
		waveCtx.moveTo(cpath[0].x, cpath[0].y+xAxis);

		for(var i=1; i<cpath.length; i++){
				var p = cpath[i];

				waveCtx.lineTo(p.x, p.y+xAxis);
		}

		waveCtx.lineTo(width, height+20);
		waveCtx.lineTo(yAxis, height+20);

		waveCtx.closePath();

		var grd = waveCtx.createLinearGradient(0, height/2, 0, height);
		grd.addColorStop(0, waveGrdStop1);
		grd.addColorStop(.7, waveGrdStop2);
    waveCtx.fillStyle = grd;
    waveCtx.fill();

		waveCtx.strokeStyle=wavestrokecolor;
		waveCtx.stroke();

	}




(function($){

	$(window).on("load", function() {
		var uWScrollDiff = 0,
				newScrollTop = 0,
				isSwimming = false;

		var windowH = $( window ).height();
		var windowW = $( window ).width();
		var isUnderWater = false,
				showFootMenu = false,
				$underwater = $('.underwater');
		var uwTop = $('.uw-segway').offset().top;
		// console.log('onload ' + uwTop);
		var maxRange = 250; //range of visibility, in z-space
				// scrollRun = false,
				// scrollqueue = false;
		var $bodyDiv = $('#body');

		var $airlines = $('#airlinesCanvas');

		if(current_slug.slug !== ''){

			var resizeTimer;

			resizeTimer = setTimeout(function() {

			    setWaterHeight();

			  }, 300);

			$(window).on('resize', function(e) {

			  clearTimeout(resizeTimer);
			  resizeTimer = setTimeout(function() {

			    setWaterHeight();

			  }, 300);

			});

			buildNodes();

			buildBackground();

		}else{
			$('#body').removeClass('not-loaded').addClass('loaded');
		} // end if current_slug


		function setWaterHeight() {
			// var waterline = $('.waterline');

			// waterline.css('top', offset + 'px');

			var offset = $('#page-wrap').outerHeight(true);
			windowW = $( window ).width();
			windowH = $( window ).height();
			var screenHvw = windowH/windowW,
				pageHvw = offset/windowW;

				console.log(screenHvw);
				console.log(pageHvw);

				if(pageHvw < screenHvw){
					pageHvw = screenHvw;
				}


			var ratioH = screenHvw/pageHvw;

			var $page_offset = (pageHvw) * 100;
			var $persp = 80,
				$persp_o = screenHvw * 50;

			var ratioMult = screenHvw > 1 ? 1 : screenHvw;

			var $wave_offset = (pageHvw - screenHvw) * ((300 * ratioH) - (60 * ratioMult)); // this also sets the speed of the wave parallax compared to scroll. higher = slower.
				//it also controls at which point in the scroll the last slide goes off the top of the screen

			console.log(ratioH);


			$wave_reveal = 25.118 * ratioMult - (10 * ratioH);


			var	$v_o_factor = ($wave_reveal / $persp_o);//($wave_reveal / $persp_o); //this number increases as $persp-o increases

			var $vert_offset = 1 - ($persp/$persp);
			var $translate_z = $persp * ( $vert_offset );
			var $scale = ( $persp - $translate_z ) / $persp;


			$('#body').css({
			    'perspective': $persp + 'vw',
			    'perspective-origin': 'center ' + $persp_o + 'vw'
			});


			// $('.wave-seg').css({
			// 	'top': $wave_offset + 'vw'
			// });


			if($airlines.length){
				$airlines.css({
					'height': ( $page_offset + (screenHvw * 3) + 180 ) + 'vw'
				});
				airLinesInit();
			}

			for (var i = 8; i >= 1; i--) {

				$('.wave-l-'+i).css({
					'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )',
					'top': ($wave_offset - ($wave_reveal * (i-1))) + 'vw'
				});

				$vert_offset = $vert_offset + $v_o_factor;
				$translate_z = $persp * ( 0 - $vert_offset );
				$scale = ( $persp - $translate_z ) / $persp;

			}
			$('.wave-l-8').css({
				'top': (($wave_offset - ($wave_reveal * (7))) - 10) + 'vw'
			});

			uwTop = $('.uw-segway').offset().top;
			// console.log(uwTop);
			waveInit();
			initDCanvas();
			// 	dotSize, speed, circSizeFactor
			createCircleArray(.3, .3, .3);
			// createCircleArray(.4, .4, .2);
			// createCircleArray(.5, .6, .35);
			createCircleArray(.7, .7, .45);
			// createCircleArray(.6, .8, .4);
			update();
			dDraw();
			requestAnimFrame(dLoop);

			$bodyDiv.removeClass('not-loaded').addClass('loaded');
			var bInnerH = $('.b-inner').height();
			//console.log(bInnerH);

			var bgoffsett = offset*1 + windowH*1;
			$('.b-bg').height(bInnerH - offset - windowH).css({'top': bgoffsett + 'px'});

		}

		$bodyDiv.scroll(function() {
			newScrollTop = $bodyDiv.scrollTop();
			uWScrollDiff = newScrollTop - (uwTop - windowH);
			if(newScrollTop > uwTop){ // + windowH/2
				if(!isUnderWater){
					isUnderWater = true;
					$('body').removeClass('above').addClass('below');
				}
			}else{
				if(isUnderWater){
					isUnderWater = false;
					$('body').removeClass('below').addClass('above');
				}
			}

			if(newScrollTop > windowH*2){
				if(!showFootMenu){
					showFootMenu = true;
					$('.uw-hud').addClass('show');
				}
			}else{
				if(showFootMenu){
					showFootMenu = false;
					$('.uw-hud').removeClass('show');
				}
			}

		});

		var currentWrapper;

		function buildNodes(){

			// console.log(current_slug.slug);

			var nodeTemplate = $('.nw-template');
			var zOffset = -200;
			var currSlug = current_slug.slug;

			//console.log(uwNodes);

			uwNodes.forEach(function(tier, t) {
				console.log(tier.tier);

			    nodeTemplate.clone()
			      .removeClass('nw-template')
			      .addClass('nw-'+ t)
			      .appendTo( $underwater );

		      var o = 0;

		      function isCurrentSlug(node) {
						return node.slug === currSlug;
		      }

		      var nodeStartIndex = tier.nodes.findIndex(isCurrentSlug);

		      if ( nodeStartIndex !== 0 ) {
			      var firstHalf = tier.nodes.slice(0, nodeStartIndex);
			      var secondHalf = tier.nodes.slice(nodeStartIndex);
			      tier.nodes = secondHalf.concat(firstHalf);
		      }
		      // console.log('node list', tier.nodes);

				  tier.nodes.forEach(function(node, n) {
				  	if ( n > 0 ) {
							o = o+1.5;
				  	}
				    var node = tier.nodes[n];
				    var thisSlug = node.slug;
				    var thisLabel = node.label;
				    if ( !thisLabel ) {
				    	thisLabel = 'Needs label';
				    }
				    var objTemplate = $('.nw-'+ t + ' .obj-template');

				    	for (var i = 0; i < node.objects.length; i++) {

					      var obj = node.objects[i],
					      		bgimg = '',
					      		bgimgsm = '';
					      // console.log(obj);

					      if(obj.image){
					      	bgimg = obj.image;
					      	bgimgsm = obj.imageSm;
					      }

					      objTemplate.clone()
					        .removeClass('obj-template')
					        .addClass('object-' + n + '-' + i + ' ' + obj.class)
					        .attr('data-slug', thisSlug)
					        .css({'transform': 'translate3d(' + obj.posx + 'vw, ' + obj.posy + 'vw, ' + zOffset*o + 'vw) rotateX('+ obj.rotx +'deg) rotateY('+  obj.roty +'deg)'})
					        .data( "posx", obj.posx )
					        .data( "posy", obj.posy )
					        .data( "posz", zOffset*o )
					        .data( "rotx", obj.rotx )
					        .data( "roty", obj.roty )
					        .data( "bgimg", bgimg )
					        .data( "bgimgsm", bgimgsm )
					        .data( "label", thisLabel )
					        .html('<div class="inner">'+obj.content+'</div>')
					        .appendTo( '.nw-' + t + ' .camera');

					        //load the images as backgrounds, to start, just for the first two slide groups in each tier
					        if(obj.image && n < 2){

					        	$('.nw-'+ t +' .object-' + n + '-' + i + ' .imgbox').css({
					        		'background-image': 'url(' + bgimg + ')'
					        	})
					        }
					      o++;
					    }

				    // objTemplate.remove();
				    $('.nw-' + t + ' .object').not('.obj-template').first().addClass('here');
				  });

			});


		  nodeTemplate.remove();
		}

		function buildBackground() {
			var bgWrap = $('.st-1');
			var bgImg = $('.st-1 img');
			console.log(uwBackgrounds);

			uwBackgrounds.forEach(function(bg, index) {
				if ( bg.slug === current_slug.slug ) {
					bgImg.attr('src', bg.content);
					// console.log('bg', bg);

					bgWrap
						.data('posy', bg.posy)
						.data('posx', bg.posx)
						.data('posz', bg.posz)
						.data('scale', bg.scale);

					bgWrap.css('transform', 'translate3d(' + bg.posx + 'vw, ' + bg.posy + 'vh, ' + bg.posz + 'vw) scale(' + bg.scale + ')');
				}
			});
		}

		function forwardSlideLoop(currentWrapper, hereSlug) {
	  	var lastNode = currentWrapper.find('.object').last();
	  	var lastZ = lastNode.data('posz');
	  	var firstNode = currentWrapper.find('.object').not('.obj-template').first();
	  	var firstSlug = firstNode.data('slug');
			var oldNodes = currentWrapper.find('.object[data-slug="'+firstSlug+'"]').not('.obj-template').detach();
			oldNodes.each(function(index) {
				var newZ = ((lastZ - 200) - (200*index));
				$(this).data('posz', newZ).css('transform', 'translate3d(0vw, 0vw, '+ newZ +'vw');
			});
			currentWrapper.find('.camera').append(oldNodes);

			$('.node-wrapper').not(currentWrapper).each(function(index) {
				var lastNode = $(this).find('.object').last();
				var lastZ = lastNode.data('posz');
				var firstNode = $(this).find('.object').not('.obj-template').first();
				var firstSlug = firstNode.data('slug');
				var oldNodes = $(this).find('.object[data-slug="'+firstSlug+'"]').not('.obj-template').detach();
				oldNodes.each(function(i) {
					var newZ = ((lastZ - 200) - (200*i));
					$(this).data('posz', newZ).css('transform', 'translate3d(0vw, 0vw, '+ newZ +'vw');
				});
				$(this).find('.camera').append(oldNodes);
			});
		}

		function backwardSlideLoop(currentWrapper, hereSlug) {
			// reverse
		}

		function nudgeBackground(previous) {
			if ( previous ) {
				var interval = -50;
			} else {
				var interval = 50;
			}
			console.log(interval)
			var bg = $('.st-1');
			var bgImg = bg.find('img');
			var posx = bg.data('posx');
			var posy = bg.data('posy');
			var posz = bg.data('posz') + interval;
			var scale = bg.data('scale');

			console.log(posz);


			bg.css({'transform': 'translate3d('+posx+'vw, ' +posy+ 'vh, ' +posz+'vw) scale('+scale+')', 'transition': 'transform 2000ms ease-in-out'});

			bg.data('posz', posz);
		}


		// Node Swim

		$('.camera').each(function(){
			var elem = $( this );
		  		posz = 0 - elem.find('.here').data('posz');
					setDistance(elem, posz);
		});

		var clickCount = 0;

		$( ".underwater" ).on( "click", ".camera .object.closed", function(event) {
			$(this).removeClass('closed no-click');
		});

		$( ".underwater" ).on( "click", ".camera .object:not(.no-click)", function(event) {
			event.preventDefault();

			$that = $(this);

			clickCount++;

			var previous = false;

			if ($(event.target).closest('.prev').length) {
				//console.log('prev');
				previous = true;
			}

			nudgeBackground(previous);

			currentWrapper = $(this).closest('.node-wrapper');

			swimAround($(this), previous);

		});

		$( ".uw-hud" ).on( "click", ".prev", function(event) {
			event.preventDefault();

			var hereObj = currentWrapper.find('.here');
			var previous = true;
			swimAround(hereObj, previous);
			nudgeBackground(previous);
		});

		$( ".uw-hud" ).on( "click", ".next", function(event) {
			event.preventDefault();

			var hereObj = currentWrapper.find('.here');
			var previous = false;
			swimAround(hereObj, previous);
		});

		function swimAround(nodeObj, previous) {

			// console.log(currentWrapper);

			var currz = currentWrapper.find('.here').data('posz'),
					hereSlug = currentWrapper.find('.here').data('slug'),
	  			nextSlug;

		  if( nodeObj.hasClass('here') ) {

				// get the next element in line
				if(previous){
					if( nodeObj.prev().length ) {
						var elem = nodeObj.prev();
					}
				}else{
					if( nodeObj.next().length ) {
						var elem = nodeObj.next();
					}
				}

				// get the next element's slug
				nextSlug = elem.data('slug');
				// get the next element's label
				nextLabel = elem.data('label');

				// } else {
				// 	// var elem = $( this ).siblings(':first-child');
				// 	// console.log('first');
				// }

		  } else {
		  	var elem = nodeObj;
		  	nextSlug = elem.data('slug');
				nextLabel = elem.data('label');
		  }

			$('.node-label-text').text(elem.data('label'));

		  // console.log('here', hereSlug, 'next', nextSlug);

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

  		// console.log((posz + currz)*5);
			elem.find('.inner :first-child').css('transition', 'opacity ' +  Math.abs(posz + currz)*14 + 'ms ease');
		  elem.addClass('here').siblings('.here').removeClass('here').addClass('inactive').parent().css({'transform': 'translate3d(' + posx + 'vw , ' + posy + 'vw, ' + posz + 'vw)', 'transition' : 'transform ' + Math.abs(posz + currz)*10 + 'ms ease' }); //

		  setTimeout(
			  function()
			  {
			    $('.inactive').removeClass('inactive');
			  }, 1000);

		  setDistance(elem.parent(), posz);


		  if ( hereSlug != nextSlug ) {

		  	// swap background image

				var bgWrap = $('.st-1');
				var bgImg = $('.st-1 img');

		  	uwBackgrounds.forEach(function(bg, index) {
		  		if ( bg.slug === nextSlug ) {


					bgWrap
						.data('posy', bg.posy)
						.data('posx', bg.posx)
						.data('posz', bg.posz)
						.data('scale', bg.scale);

		  			bgImg.fadeOut(1000, function() {
					  	bgWrap.css({'transform': 'translate3d(' + bg.posx + 'vw, ' + bg.posy + 'vh, ' + bg.posz + 'vw) scale(' + bg.scale + ')', 'transition': 'none'});
					  	$(this).clone().attr('src', bg.content).hide().appendTo(bgWrap).fadeIn('slow');
		  				$(this).remove();
		  			});
		  		}
		  	});

		  	console.log(elem);

				// Loop forward
				if ( clickCount > 10 ) {
			  	forwardSlideLoop(currentWrapper, hereSlug);
				}


		  	// find all other node-wrappers and pull the nextSlug nodes into view
		  	$('.node-wrapper').not(currentWrapper).each(function() {
		  		$(this).find('.here').removeClass('here');
		  		var firstNodeInPage = $(this).find('.object[data-slug="'+nextSlug+'"]').first().addClass('here');
		  		elem = firstNodeInPage;

					rotx = 0 - elem.data('rotx'),
		  		roty = 0 - elem.data('roty'),
		  		posx = 0 - elem.data('posx'),
		  		posy = 0 - elem.data('posy'),
		  		posz = 0 - elem.data('posz');

		  		rotx = rotx || 0;
		  		roty = roty || 0;
		  		posx = posx || 0;
		  		posy = posy || 0;
		  		posz = posz || 0;

				  elem.parent().css('transform', 'translate3d(' + posx + 'vw , ' + posy + 'vw, ' + posz + 'vw)');
				  setDistance(elem.parent(), posz);

		  	});

		  	//load the next groups images for all tiers
		  	$('.node-wrapper').each(function() {
		  		var firstNodeInPage = $(this).find('.object[data-slug="'+nextSlug+'"]').first();
		  		elem = firstNodeInPage;

				  thisGroupClass = elem.attr("class");
				  thisGroupInc = thisGroupClass.split('object-')[1];
				  thisGroupInc = thisGroupInc.split('-')[0];

				  var afterSlug = $(this).find('.object-' + (thisGroupInc * 1 + 1) + '-0').data('slug');

				  $(this).find('.object[data-slug="'+afterSlug+'"]').each(function() {

				  		var bgimg = $(this).data('bgimg');

				  		if( bgimg ){

			        	$(this).find('.imgbox').css({
			        		'background-image': 'url(' + bgimg + ')'
			        	});

			        }

				  });

		  	});
		  } else {
		  	console.log('same');
		  }
			// $('.background').css('transform', 'translate3d(' + posx + 'vw , ' + posy + 'vw, ' + posz + 'vw)').find('.here').removeClass('here');
		  // elem.parent().find('.object').each( function(){

		  // 	var distz = ( Math.abs( -1*posz - $( this ).data('posz') ) ) / maxRange;
				// if(distz > 1){ distz = 1; }
		  // 	$( this ).find('.inner').children().css('opacity', 1 - distz);


		  // });

		  swimDetritus();

		  elem.addClass('here');


		} // end swimAround()

		var swimTimer,
				swimCount = 0;

		function swimDetritus() {
			isSwimming = true;
			clearTimeout(swimTimer);
			swimCount = 0;

		  swimTimer = setTimeout(function() {

		    isSwimming=false;

		  }, 800);
		}

		function setDistance(elem, posz) {

				elem.find('.object').each( function(){

			  	var distz = ( Math.abs( -1*posz - $( this ).data('posz') ) ) / maxRange;
					if(distz > 1){ distz = 1; }

			  	$( this ).find('.inner').children().not('.prevnext').css('opacity', 1 - distz);


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
		$('.node-wrapper').on('tapstart', '.spin.here', function (e, touch) {
					trigger = touch.offset.x - wrapper_offset.left;
	      	// console.log(touch);
	    })
	    .on('tapend', '.spin.here', function() {
	        startY = offsetY;
					startX = offsetX;
					trigger = null;
					// console.log('mu');
	    })
	    .on('tapmove', '.spin.here', function (e, touch) {
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
						offset_percent = (((touch.offset.x - wrapper_offset.left)-trigger)/wrapper_width); // 60 degree range

						// console.log(offset_percent);

						var offsettemp = startY + (offset_percent)*60;

						if(offsettemp > -31 && offsettemp < 31 ){

							offsetX = startX + (offset_percent)*10;

							offsetY = startY + (offset_percent)*60;
							if(offsetY > -8 && offsetY < 8){
								offsetY = 0;
								offsetX = 0;
							}

							object.css('transform', 'translate3d(' + posx + 'vw , ' + posy + 'vw, ' + posz + 'vw) rotateX(' + offsetX + 'deg) rotateY(' + offsetY + 'deg)');

						}
	        }
	    });
			// 	END SKULL GRAB AND ROTATE


		// Detritus STUFF, go here to edit and troubleshoot: https://codepen.io/spencer8/pen/vJxqGV

		//general
		var dCanvas = document.getElementById('detritus-canvas'),
		    dCtx,
		    center = new Point(),
		    r = 0;
		// console.log(dCanvas);
		var circles = [];
		var circleSize = 100; // the space between dots, roughly, in pixels
		var dotOpacity = 0.15;

		// speed of orbit, if dotSpeedX = dotSpeedY you get a perfect circle
		//   larger number = slower orbit
		var dotSpeedX = 560,
		    dotSpeedY = 560;

		var placeRfactor = .8; // amount of randomization to original dot placement
		var sizeRfactor = .9; // amount of randomization to original dot placement

		var DAMPING = .934;

		var cId = 0;

		function initDCanvas() {

					dCanvas.w = dCanvas.width = window.innerWidth
					dCanvas.h = dCanvas.height = window.innerHeight;

					center.x = dCanvas.w / 2;
					center.y = dCanvas.h / 2;

					dCtx = dCanvas.getContext('2d');

					dCtx.fillStyle = 'rgba(255,255,255,0.2)';
		}

		function createCircleArray(dotSize, speed, circSizeFactor) {
				var halfCircle = circleSize/2;
				for (var x = halfCircle; x < dCanvas.w-halfCircle; x += circleSize) {
						for (var y = halfCircle; y < dCanvas.h-halfCircle; y += circleSize) {

							var randX = Math.abs( getRandomInt(0, dCanvas.w) ),
								randY = Math.abs( getRandomInt(0, dCanvas.h) );
							var startAngle = (randX + randY) / 2.5;
							var randRadius = getRandomArbitrary((dotSize*(1-sizeRfactor)), (dotSize*(1+sizeRfactor)));
							var circle = new Circle(randX, randY, randRadius, speed, startAngle, circSizeFactor, cId);
							circles.push(circle);
							cId++;
						}
				}
		}


		function dDraw() {
		     dCtx.clearRect(0, 0, dCanvas.w, dCanvas.h);

		     circles.forEach(function(o) {
					 		o.dDraw();
		     });
		}

		function update() {
		     var o;

		     for (var i = 0; i < circles.length; i++) {
		          o = circles[i];
		          o.update();
		     }

		}

		function dLoop() {
			if(isSwimming){
				swimCount++;
			}
			update();
			dDraw();
		  requestAnimFrame(dLoop);
		}

		function calcDistance(dx,dy) {
			return Math.sqrt(dx * dx + dy * dy);
		}

		function Circle(x, y, dotSize, speed, angle, circSizeFactor, cId) {

					this.cId = cId;

					// dot placement
					this.dotPosition = new Point(x, y);
					this.pathSize = circSizeFactor*circleSize || .8*circleSize;
					this.sizeFactor = circSizeFactor || 1;
					this.oldX = this.centerX = this.originalX = x;
					this.permY = this.storeY = this.centerY = this.oldY = this.originalY = y || 0;

					//dot style
					this.ogDotOpacity = this.dotOpacity = dotOpacity;
					this.centerColor= 'rgba(255,0,255,1)';

					// dot motion
					this.angle = angle || 0;
					this.speed = speed || 2;
					this.originalDotRadius = this.dotRadius = dotSize || .5;
					this.responseTime = getRandomArbitrary(50, dCanvas.w * (1-circSizeFactor));

					// tracking vars
					this.xloop1 = this.scrollTop = this.traveling = this.outSide = this.outVert = 0;
		}

		Circle.prototype = {
		    update:function() {
		      this.angle += this.speed;

					// 	ATTRACT
					var dx = this.responseTime;
					var dy = this.originalY - this.centerY - ((newScrollTop*this.sizeFactor)-this.scrollTop);
					// sizeFactor creates parallax
					// scrollTop saves where you end up in a traveling anim if it interupts.

					if(this.tdone){	// checks if we just wrapped up the traveling animation
						this.tdone = 0;

						if( Math.abs(dy) > 0){
							// if at the end of the traveling animation, the dot is in a different location than when it started, overwrite the old location with the new to prevent scroll animation
							this.originalY = 0 + ((newScrollTop*this.sizeFactor)-this.scrollTop) + this.centerY
						}

					}

					var distance = calcDistance(dx, dy);
					this.centerY += dy * Math.abs((dy/300)/distance);
					// (dy/x): greater x = slower detritus scrolling

					//  INTEGRATE
					var velocityY = (this.centerY - this.oldY) * DAMPING;
					this.storeY = this.oldY = this.centerY;

					this.centerY += velocityY;

					if(this.centerY < 0){
						this.centerY += dCanvas.h;
						this.storeY += dCanvas.h;
						this.oldY += dCanvas.h;
						this.originalY += dCanvas.h;
					}
					if(this.centerY > dCanvas.h){
						this.centerY -= dCanvas.h;
						this.storeY -= dCanvas.h;
						this.oldY -= dCanvas.h;
						this.originalY -= dCanvas.h;
					}

					var circRad = (this.pathSize - this.dotRadius*4);
					this.dotPosition.x = circRad * Math.cos(this.angle * Math.PI / dotSpeedX) + this.centerX;
					this.dotPosition.y = circRad * Math.sin(this.angle * Math.PI / dotSpeedY) + this.centerY;

		    },
				dDraw:function() {
					if(uWScrollDiff + windowW*.2 > 0){
						if(windowH - this.dotPosition.y - windowW*.2 < uWScrollDiff){
							var dopacity = this.dotOpacity;
							if(isSwimming){
								dopacity = this.dotOpacity = this.ogDotOpacity - (swimCount*.02);
							}else{
							 	if(dopacity < this.ogDotOpacity){
									dopacity = this.dotOpacity = this.dotOpacity + (.01);
								}
							}
							//console.log(dotOpacity +" < "+ this.ogDotOpacity)
							dCtx.fillStyle = 'rgba(255,255,255,'+ dopacity +')';
							fillCircle(this.dotPosition.x, this.dotPosition.y, this.dotRadius * 2);
						}
					}
				}
		};

		function Point(x, y) {
		     this.x = x || null;
		     this.y = y || null;
		}

		function fillCircle(x, y, r) {
		     dCtx.beginPath();
		     dCtx.arc(x, y, r, 0, Math.PI * 2);
		     dCtx.fill();
		}

		function getRandomInt(min, max) {
		  min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min)) + min; 
		}

		function getRandomArbitrary(min, max) {
		  return Math.random() * (max - min) + min;
		}

		function swim(e) {
			for (var i = 0; i < circles.length; i++) {
						circles[i].traveling = 1;
			 }
			// console.log('!!!');
		}

	});
	

})(jQuery);