window.requestAnimFrame = (function(){ 
return  window.requestAnimationFrame   ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame    ||
	function(callback){
		window.setTimeout(callback, 1000 / 60);
	};
})();

window.onload = function() {
	waveInit();   
	initCanvas();
	// 	dotSize, speed, circSizeFactor
	createCircleArray(.3, .3, .3);
	// createCircleArray(.4, .4, .2);
	// createCircleArray(.5, .6, .35);
	createCircleArray(.7, .7, .45);
	// createCircleArray(.6, .8, .4);
	update();
	draw();
	requestAnimFrame(loop);   
};