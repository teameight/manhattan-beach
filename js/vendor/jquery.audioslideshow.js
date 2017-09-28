(function( $ ) {
	console.log(0);
	$.fn.audioSlideshow = function( options ) {
			console.log(1);
			console.log(options);

		var settings = {
			jPlayerPath: $pathtoswf,
			suppliedFileType: "mp3",
			playSelector: ".audio-play",
			pauseSelector: ".audio-pause",
			currentTimeSelector: ".play-time",
			durationSelector: ".total-time",
			playheadSelector: ".playhead",
			backSelector: ".back-slide",
			forthSelector: ".forth-slide",
			fullScreenSelector: ".full-screen",
			timelineSelector: ".timeline",
			slideinput: "input.slideinput",
			slidetotal: "span.slidetotal"
		};

		if(options){
		  jQuery.extend(settings,options);
		  console.log('options');
		}

		// Begin to iterate over the jQuery collection that the method was called on
		return this.each(function () {
			console.log(2);

			// Cache `this`
			var $that = $(this),
				$slides = $that.find('.audio-slides').children(),

				$currentTime = $that.find(settings.currentTimeSelector),
				$duration = $that.find(settings.durationSelector),
				$playhead = $that.find(settings.playheadSelector),
				$timeline = $that.find(settings.timelineSelector),
				$playButton = $that.find(settings.playSelector),
				$pauseButton = $that.find(settings.pauseSelector),
				$backButton = $that.find(settings.backSelector),
				$forthButton = $that.find(settings.forthSelector),
				$fullScreen = $that.find(settings.fullScreenSelector),
				$slideinput = $that.find(settings.slideinput),
				$slidetotal = $that.find(settings.slidetotal),
				$clickout = $('body:not(.pop-ups)'),

				slidesCount = $slides.length,
				slideTimes = new Array(),
				audioDurationinSeconds = parseInt($that.attr('data-audio-duration')),
				isPlaying = false,
				currentSlide = -1;

				$slidetotal.html(slidesCount);

				console.log($that);

			$pauseButton.hide();
			// Setup slides
			$slides.each(function(index,el){
				var $el = $(el);
				$el.hide();

				var second = parseInt($el.attr('data-slide-time')),
					thumbnail = $el.attr('data-thumbnail');
				if(index > 0){
					slideTimes.push(second);
				}
			});

			var $jPlayerObj = $('<div></div>');
			$that.append($jPlayerObj);

			$jPlayerObj.jPlayer({
				ready: function () {
					$.jPlayer.timeFormat.padMin = false;
					$(this).jPlayer("setMedia", {
						mp3: $that.attr('data-audio')
					});

					load_images($that);
				},
				swfPath: settings.jPlayerPath,
				supplied: settings.suppliedFileType,
				preload: 'auto',
				cssSelectorAncestor: ""
			});
			/*
			*/
			$jPlayerObj.bind($.jPlayer.event.timeupdate, function(event) { // Add a listener to report the time play began
				var curTime = event.jPlayer.status.currentTime;
				audioDurationinSeconds = event.jPlayer.status.duration;
				var p = (curTime / audioDurationinSeconds) * 100 + "%";


				$currentTime.text($.jPlayer.convertTime(curTime));
				$duration.text($.jPlayer.convertTime(audioDurationinSeconds));

				$playhead.width(p);
				if(slidesCount){
					var nxtSlide = 0;
					for(var i = 0; i < slidesCount; i++){
						if(slideTimes[i] < curTime){
							nxtSlide = i + 1;
						}
					}
					setAudioSlide(nxtSlide);
				}
			});

			$jPlayerObj.bind($.jPlayer.event.play, function(event) { // Add a listener to report the time play began
				isPlaying = true;
				$playButton.hide();
				$pauseButton.show();
			});
			
			$jPlayerObj.bind($.jPlayer.event.pause, function(event) { // Add a listener to report the time pause began
				isPlaying = false;
				$pauseButton.hide();
				$playButton.show();
			});
			
			$slides.click(function(event){
				$jPlayerObj.jPlayer("play");
			});
			
			$playButton.click(function(event){
				$jPlayerObj.jPlayer("play");
			});
				
			$pauseButton.click(function(event){
				$jPlayerObj.jPlayer("pause");
			});

			if ($('.pop-ups').length > 0) {
				$clickout.click(function(event){
					if( $(event.target).is('.pop-ups, .pop-ups *') ) {
						return;
					}else{
						$jPlayerObj.jPlayer("pause");
					}
				});
				$('.pclose').click(function(event){
					$jPlayerObj.jPlayer("pause");
				});
			}

			$slideinput.bind("enterKey",function(e){
			   	var newSlide = ($(this).val()*1)-1;
			   	if( !(newSlide >= 0 && newSlide < slidesCount ) ){
			   		newSlide = slidesCount-1;
			   	}
			   	$(this).blur();
			   	var t = 0;
			   	if(newSlide <= 2){
					// prevSlide = 1;
					t = slideTimes[2] + 0.01;
				}else if(newSlide > 2){
					t = slideTimes[newSlide - 1] + 0.01;
				}
				$jPlayerObj.jPlayer("play", t);
			   	console.log(currentSlide+'|'+t);
			});

			$slideinput.keyup(function(e){
			    if(e.keyCode == 13)
			    {
			        $(this).trigger("enterKey");
			    }
			});
			$slideinput.change(function(e){
			    $(this).trigger("enterKey");
			});

			$timeline.click(function(event){
				var l = event.pageX -  $(this).offset().left;
				var t = (l / $that.width()) * audioDurationinSeconds;
				$jPlayerObj.jPlayer("play", t);
			});

			$backButton.click(function(event){
				var prevSlide = 0;
				var t = 0;
				if(currentSlide == 2){
					// prevSlide = 1;
					t = slideTimes[prevSlide] + 0.01;
				}else if(currentSlide > 2){
					prevSlide = currentSlide - 2;			
					t = slideTimes[prevSlide] + 0.01;
				}
				$jPlayerObj.jPlayer("play", t);
			});

			$forthButton.click(function(event){
				nextSlide = currentSlide + 1;
				var t = slideTimes[currentSlide];
				$jPlayerObj.jPlayer("play", t);
			});
			
			function load_images($thething){
				$thething.find('.audio-slides img').each( function(){
					var $slideimg = $(this);
					var $src = $slideimg.attr('src'),
						$bigimage = $slideimg.attr('data-bigimage');
					if($bigimage != $src ){
						$slideimg.attr('src', $bigimage );
					}
				});
			}

			function setAudioSlide(n){
				if(n != currentSlide){
					if($slides.get(currentSlide)){
						$($slides.get(currentSlide)).fadeOut();
					}
					$($slides.get(n)).fadeIn();
					currentSlide = n;
					$slideinput.val(n+1);
					console.log('check');
				}
			}
			
			function slideshowresize($sshow){
				var $aspectRatio,
					$windowW,
					$windowH,
					$showToWidth,
					$showToHeight;

				$sshowImage = $sshow.find('.audio-slides img:first');
				$aspectRatio = $sshow.height() / $sshow.width();
			    $windowW = $(window).width();
			    $windowH = $(window).height();
			    
			    console.log($sshowImage.height() + '/' + $sshowImage.width() );

			    if( ($windowH / $windowW) >= $aspectRatio){

			    	$showToWidth = $windowW * .96;
			    	$showToHeight = $showToWidth * $aspectRatio;
			    	$sshow.height($showToHeight).width($showToWidth);
			        //console.log($windowW + 'x' + $windowH + ' : ' + $aspectRatio);

			    } else {

			    	$showToHeight = $windowH * .9;
			    	$showToWidth = $showToHeight / $aspectRatio;
			    	$sshow.height($showToHeight).width($showToWidth).css({top:'0.5%'});
			        //console.log($showToHeight + 'xx' + $showToWidth + ' : ' + $aspectRatio);
			    }





			}	

			// Find the right method, call on correct element
			$fullScreen.click(function(event){
				var $sshow = $(this).closest(".audio-slideshow");
				var $sshowid = $sshow.attr('id');


				if (screenfull.enabled) {
			        screenfull.toggle(document.getElementById($sshowid));
					document.addEventListener(screenfull.raw.fullscreenchange, function () {
				        if(screenfull.isFullscreen){
					        slideshowresize($sshow.find('.sshow-inwrap'));
				        }else{
				        	$sshow.find('.sshow-inwrap').removeAttr( 'style' );
				        }
				    });

			    }
			});
		});

	};
}(jQuery));