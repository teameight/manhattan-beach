<?php

/* slideshow Shortcode function 
@
 markup and enqueue styles and scripts for slideshow anywhere 
*/

add_shortcode('slideshow', function($atts){
//var_dump($atts);
wp_enqueue_script( 'jplayer' );
wp_enqueue_script( 'audioslideshow' );    
wp_enqueue_script( 'screenfull' ); 

$query_slideshow = new WP_Query( 'post_type=slideshows&p='.$atts['id'] );
?>

<?php if ( $query_slideshow->have_posts() ) : while ($query_slideshow->have_posts() ) : $query_slideshow->the_post(); ?>
<div class="slideshow">
	<div id="audio-slideshow" class="audio-slideshow" data-audio="<?php the_field('audio_track'); ?>" data-audio-duration="<?php the_field('audio_total_length'); ?>">
		<div class="sshow-inwrap">
		<div class="audio-slides">
			<?php 
			if( have_rows('slides') ):
				$i = 0;
				$first_slide = false;
				while ( have_rows('slides') ) : the_row();
					$attachment_id = get_sub_field('image');
					$size = "thumbnail"; // (thumbnail, medium, large, full or custom size)
					$image = wp_get_attachment_image_src( $attachment_id, $size );
					$size = "large"; // (thumbnail, medium, large, full or custom size)
					$bigimage = wp_get_attachment_image_src( $attachment_id, $size );
					if(!$first_slide){
						$first_slide = $bigimage[0];
					}
			?>
			<img src="<?php echo $first_slide; ?>" alt="slide" data-bigimage="<?php echo $bigimage[0]; ?>" data-thumbnail="<?php echo $image[0]; ?>" data-slide-time="<?php the_sub_field('time'); ?>">
			<?php 
				$i++;
				//if($i>10) break;
				endwhile;

			else :

			// no rows found

			endif;
			?>
		</div>
		<div class="audio-control-interface">
			<div class="slidenumbers"><input class="slideinput" name="slideinput" value="0"> / <span class="slidetotal">1</span></div>
			<div class="audio-controls">
				<div class="back-slide control">&laquo;</div>
				<div class="play-pause-container">
					<a href="javascript:;" class="audio-play control" tabindex="1">Play</a>
					<a href="javascript:;" class="audio-pause control" tabindex="1">Pause</a>
				</div>
				<div class="forth-slide control">&raquo;</div>
			</div>
			<div class="timeline">
				<div class="timeline-controls"></div>
				<div class="playhead"></div>
			</div>
			<div class="full-screen control">/</div>
			<div class="jplayer"></div>
		</div>
		</div>
	</div>
</div>
<?php the_content(); ?>
<?php 
endwhile; 
 wp_reset_postdata();
endif;
?>


<?php 


});