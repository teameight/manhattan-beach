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

(function($){

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

		if($airlines.length){

			var bH = $('.b-inner')[0].scrollHeight;

			$airlines.css({
				'height': ( bH - (windowH*.6) ) + 'px'
			});
			airLinesInit();
		}

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

})(jQuery);