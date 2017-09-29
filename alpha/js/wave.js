
var wWidth = window.innerWidth;

var unit = 30, 
  waveCanvas, waveCtx,
  height, width, xAxis, yAxis,
  waveDraw, interval,

  scale={x: 100,y: .8},

  waveGrdStop1='rgba(50, 70, 80, 1)',
  waveGrdStop2='rgba(63, 98, 111, 1)',
  mWaveFStroke="rgba(101, 125, 154, .5)",
	wavecolor="#5b7b7b",
	areacolor="rgba(20,255,91,0.25)",
	mainWaveFill="rgba(100, 128, 137, .8)",
	mainWaveShad="rgba(68, 96, 105, 1)",
	subWaveFill="rgba(225, 255, 245, .1)",
	lSubShad="#ffffff",

	maxStroke = wWidth*.02,
	parameters={
			freq: 1,
			amp: 55,
			type: "sin",
			rand: getRandomArbitrary(0, Math.PI)
		};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function waveInit() {
    
    waveCanvas = document.getElementById("sineCanvas");
    
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

    drawSine(waveDraw.t);
    
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
	
function drawSine(t) {
// Set the initial x and y, starting at 0,0 and translating to the origin on the canvas.
    var x = t;
	
    var y = Math.sin(0);
		var amp = Math.sin(t);
		var py = amp*y+xAxis;
		
		var fpath = [],
				bpath = [],
				cpath = [],
				lFpath = [],
				lBpath = [];

		waveCtx.lineWidth=10;
		waveCtx.lineCap = "round";
		waveCtx.strokeStyle=wavecolor;
		// waveCtx.stroke();

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
			var w = ( (((currentY-15)/2)/30) )*maxStroke,
					iSin = Math.cos(t*.75),
					iSin2 = Math.cos(t*.5);

			var lVal=Math.sin(
						(i-3*width/(4.8+3.2*iSin))
						/(scale.x*.8)
					);

			var lVal2=Math.sin(
						(i-6*width/(4.8+3.2*iSin2))
						/(scale.x*.8)
					);

			var lw = lVal*maxStroke*.4;
			var lw2 = lVal2*maxStroke*.4;
			var xPos = i - (scale.x/7) + (scale.x/8 * Math.sin(t));
			var wAve = (lw2+w*4)/5;

			fpath.push({x:xPos,y:currentY+wAve});
			bpath.push({x:xPos,y:currentY-wAve});
			cpath.push({x:xPos,y:currentY,ymult:w});

			if(lw>0){
				lFpath.push({
					x:xPos,
					y:currentY+wAve+lw,
					ymult:lw
				});
			}else{
				lFpath.push({
					x:xPos,
					y:currentY+wAve-lw*.12,
					ymult:lw
				});
			}
			lBpath.push({
				x:xPos,
				y:currentY+wAve-lw*.15,
				ymult:lw
			});
			
    }
		waveCtx.lineWidth = maxStroke*.5;
	
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
	
		waveCtx.strokeStyle=mWaveFStroke;
		// waveCtx.stroke();
	
// MAIN WAVE	
		waveCtx.lineWidth = 3;

		for(var i=bpath.length-1; i>-1; i--){
			var xo1 = bpath[i].x,
					yo1 = bpath[i].y;
			fpath.push({x:xo1,y:yo1});
		}
		waveCtx.beginPath();
		waveCtx.moveTo(fpath[0].x, fpath[0].y+xAxis);

		for(var i=1; i<fpath.length; i++){  
				var p = fpath[i];
				waveCtx.lineTo(p.x, p.y+xAxis);
		}

		waveCtx.closePath();
		waveCtx.shadowBlur=2;
		waveCtx.shadowColor=mainWaveShad;
		waveCtx.fillStyle=mainWaveFill;
		waveCtx.fill();
		waveCtx.stroke();
	
// LIGHT SUB WAVE
		// for(var i=lBpath.length-1; i>-1; i--){
		// 	lFpath.push({
		// 		x:lBpath[i].x,
		// 		y:lBpath[i].y
		// 	});
		// }

		// waveCtx.beginPath();
		// waveCtx.moveTo(lFpath[0].x, lFpath[0].y+xAxis);

		// for(var i=1; i<lFpath.length; i++){  
		// 	var p = lFpath[i];
		// 	waveCtx.lineTo(p.x, p.y+xAxis);
		// }

		// waveCtx.closePath();
		// waveCtx.shadowBlur=3;
		// waveCtx.shadowColor=lSubShad;
		// waveCtx.shadowOffsetY = 0;
		// waveCtx.fillStyle=subWaveFill;
		// waveCtx.fill();
		
	}
