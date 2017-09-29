
// Detritus STUFF, go here to edit and troubleshoot: https://codepen.io/spencer8/pen/vJxqGV

//general
var canvas = document.getElementById('detritus-canvas'),
    dCtx,
    center = new Point(),
    r = 0,
    newScrollTop = 0;

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

function initCanvas() {
			canvas.w = canvas.width = window.innerWidth;
			canvas.h = canvas.height = window.innerHeight;

			center.x = canvas.w / 2;
			center.y = canvas.h / 2; 

			dCtx = canvas.getContext('2d');

			dCtx.fillStyle = 'rgba(255,255,255,0.2)';
}

function createCircleArray(dotSize, speed, circSizeFactor) {
		var halfCircle = circleSize/2;
		for (var x = halfCircle; x < canvas.w-halfCircle; x += circleSize) {
				for (var y = halfCircle; y < canvas.h-halfCircle; y += circleSize) { 

					var randX = Math.abs( getRandomInt(0, canvas.w) ),
						randY = Math.abs( getRandomInt(0, canvas.h) );
					var startAngle = (randX + randY) / 2.5;
					var randRadius = getRandomArbitrary((dotSize*(1-sizeRfactor)), (dotSize*(1+sizeRfactor)));
					var circle = new Circle(randX, randY, randRadius, speed, startAngle, circSizeFactor, cId);
					circles.push(circle);
					cId++;
				}
		}
}


function draw() {
     dCtx.clearRect(0, 0, canvas.w, canvas.h);

     circles.forEach(function(o) {
			 		o.draw();
     });
}

function update() {
     var o;
 
     for (var i = 0; i < circles.length; i++) {
          o = circles[i];
          o.update();
     }
     
}

function loop() {
	update();
	draw();
  requestAnimFrame(loop);
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
			this.responseTime = getRandomArbitrary(50, canvas.w * (1-circSizeFactor));
			
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
				this.centerY += canvas.h;
				this.storeY += canvas.h;
				this.oldY += canvas.h;
				this.originalY += canvas.h;
			}	
			if(this.centerY > canvas.h){
				this.centerY -= canvas.h;
				this.storeY -= canvas.h;
				this.oldY -= canvas.h;
				this.originalY -= canvas.h;
			}	
			
			var circRad = (this.pathSize - this.dotRadius*4);
			this.dotPosition.x = circRad * Math.cos(this.angle * Math.PI / dotSpeedX) + this.centerX;
			this.dotPosition.y = circRad * Math.sin(this.angle * Math.PI / dotSpeedY) + this.centerY;	 
			 
    },
		draw:function() {
			var dopacity = this.dotOpacity;
			dCtx.fillStyle = 'rgba(255,255,255,'+ dopacity +')';
			fillCircle(this.dotPosition.x, this.dotPosition.y, this.dotRadius * 2);
		},
		travelDotToCenter:function() {
			this.centerColor= 'rgba(0,0,255,1)';
			if(this.originalX > canvas.w){
				this.centerColor= 'rgba(0,255,255,1)';
			}
			this.centerY = ((this.storeY - center.y)*.1)+center.y;
			this.centerX = ((this.originalX - center.x)*.1) + center.x;
			this.xloop = 1;
			this.outSide = this.outVert = 0;
			this.dotRadius = 0;
			this.dotOpacity = this.ogDotOpacity;
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