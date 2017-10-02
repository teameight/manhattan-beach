var isSafari = /constructor/i.test(function HTMLElementConstructor() {});

/**
 * 
 * Air lines on Home page
 */

var canvas, ctx, container, 
	height, width, wrapH,
	xAxis, yAxis,
  draw, scale, strokeWidth

 	wavestrokecolor='rgba(0,0,0,1)',

	linesParameters = [
			{
				letter:'a1',
				freq: 1.75,
				amp: 4,
				left: .216,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'n',
				freq: 1.75,
				amp: 4,
				left: .332,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'he',
				freq: 1.75,
				amp: 4,
				left: .383,
				rand: getRandomArbitrary(0, Math.PI),
				height: .43,
				top:.267
			},
			{
				letter:'a2',
				freq: 1.75,
				amp: 4,
				left: .575,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'t',
				freq: 1.75,
				amp: 4,
				left: .635,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'a3',
				freq: 1.75,
				amp: 4,
				left: .875,
				rand: getRandomArbitrary(0, Math.PI),
				top:.267
			},
			{
				letter:'a4',
				freq: 1.75,
				amp: 4,
				left: .44,
				rand: getRandomArbitrary(0, Math.PI),
				top:.94
			},
			{
				letter:'h2',
				freq: 1.75,
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
    
		width = canvas.width;
    height = canvas.height;
    wrapH = container.offsetHeight;
    strokeWidth = width * 0.0055;
	
    xAxis = 0;
    yAxis = Math.floor(width/2);
	
		scale={x: .5, y: width/4};
    
    ctx.save();
    draw();
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
draw = function () {
    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    drawSine(draw.t);
		
		draw.seconds = draw.seconds - 0.003;
    draw.t = draw.seconds*Math.PI;

		requestAnimFrame(draw);

};
draw.seconds = 0;
draw.t = 0;
/**
 * Function to draw sine
 * 
 * The sine curve is drawn in segments starting at the origin. 
 */
	
function drawSine(t) {
// Set the initial x and y, starting at 0,0 and translating to the origin on the canvas.

	for (var li = 0; li < linesParameters.length; li++) {

		p = linesParameters[li];
		//console.log(p.letter);

    var x = 0;
    var y = t + p.rand;
	
		var amp = Math.sin(y), // this is also swing
				cpath = [];		
		
		p.newFreq = p.freq + (p.freq*Math.cos( p.rand + t ))/15;
		p.newAmp = p.amp + (p.amp*Math.cos( p.rand + t ))/2;
			
		var prevX = 0;
		var stopCheck = false;
    // Loop to draw segments
   	for (i = xAxis; i <= (height+(height/30)); i += (height/80)) {

      y = i;
			var currentX = 0;

			var val=Math.sin((p.newFreq*i-xAxis)/scale.y);
			var addToX = val*p.newAmp*scale.x*amp;
			var swing = (0-amp)*(i/(height/80))*p.amp*.075;
			currentX+=addToX;
			currentX+=swing;

			prevX = currentX;

			if(p.letter === 'he'){
      	if(i > p.height*wrapH){
	      	if(!stopCheck){
						cpath.push({x:currentX,y:p.height*wrapH});
						stopCheck = true;
					}
	      }else{
	      	cpath.push({x:currentX,y:i});
	      }
      }else{
				cpath.push({x:currentX,y:i});
			}
					
    }

		var left = p.left*width,
				top = p.top*wrapH;	

		var gradient = ctx.createLinearGradient(width/2, 0, width/2, height*.9);
    gradient.addColorStop(0.00, wavestrokecolor);
    gradient.addColorStop(0.30, 'rgba(169,125,107,0.5)');
    gradient.addColorStop(0.90, 'rgba(169,125,107,0.25)');
    gradient.addColorStop(1.00, 'rgba(169,125,107,0)');

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



$(window).on("load", function() {

	var $airlines = $('#airlinesCanvas');

	function setWaterHeight() {
		// var waterline = $('.waterline');

		// waterline.css('top', offset + 'px');
	
		var offset = $('#page-wrap').outerHeight(true);
		var windowW = $( window ).width();
		var windowH = $( window ).height();
		var screenHvw = windowH/windowW,
				pageHvw = offset/windowW;

		var ratioH = screenHvw/pageHvw;

		var $page_offset = (pageHvw) * 100;
		var $persp = 80,
			$persp_o = screenHvw * 30;

		var $wave_offset = 100 + screenHvw*10 + (windowH/offset * 200 * screenHvw );//((pageHvw + screenHvw) * (100 + $persp)) - 100, // this also sets the speed of the wave parallax compared to scroll. higher = slower.
			//it also controls at which point in the scroll the last slide goes off the top of the screen

			$wave_reveal = 25.118;

		var widthMult = 0;
		if(screenHvw > 2){
			widthMult = screenHvw * (3-screenHvw) * pageHvw * .0004;
		}
		if(screenHvw <= 2 && screenHvw > .75){
			widthMult = screenHvw * (2-screenHvw) * pageHvw * .01;
		}

		var $vert_offset = ( ((offset / windowH)*.002 ) + widthMult + (windowH/offset*.1) ) * $persp;// * (1 + (screenHvw)) * (1 + (pageHvw / screenHvw)*((pageHvw / screenHvw)*.0003));//pageHvw; //(($page_offset / $wave_offset) * $persp) + ( $persp_o * 1 ) + screenHvw;


		var	$v_o_factor = ($wave_reveal / $persp_o); //this number increases as $persp-o increases

		// $vert_offset = (0 - (($persp*$persp)/(0-$persp))) - ($v_o_factor*6);
		

		var $translate_z = $persp * ( 1 - ( $persp / $vert_offset ) );
		var $scale = ( $persp - $translate_z ) / $persp;

		// console.log(pageHvw + ' p|s ' + screenHvw + ' // ' + screenHvw / pageHvw + ' // ' + pageHvw / screenHvw);
		// console.log(offset / windowH  + ' w/o');
		// 		console.log(windowH/offset  + ' o/w');
		// console.log($vert_offset);



		$('#body').css({
		    'perspective': $persp + 'vw',
		    'perspective-origin': 'center ' + $persp_o + 'vw'
		});


		$('.wave-seg').css({
			'top': (($wave_offset + (screenHvw * (100 - ratioH))) * screenHvw) + $persp_o + 'vw'
		});


		if($airlines.length){
			$airlines.css({
				'height': ( $page_offset + (screenHvw * 5) + 100 ) + 'vw'
			});
			airLinesInit();
		}	   

		$('.wave-back').css({
			'top': ($wave_offset + (screenHvw * 100)) + 'vw', 
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

// 0 = $persp * ( 1 - ($persp / $vert_offset ) );


		$('.wave-l-7').css({
			'transform': 'translateZ( ' + $translate_z + 'vw ) scale( ' + $scale + ' )'
		});


		// var bSh = $('#body')[0].scrollHeight;
		// $('.lastwave').css({
		// 	'top': (bSh - windowH) + 'px',
		// 	'bottom': 'auto'
		// });
		// console.log(bSh + '-' + windowH);

	}

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

});