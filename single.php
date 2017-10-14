<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Manhattan_Beach
 */

get_header(); ?>

	<div id="primary" class="content-area single-column">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) : the_post();

			if ( is_singular('excerpt') ) { ?>
				<?php $slug = '/books/' . get_query_var('name'); ?>
				<a class="cta-link back-to-book-link" href="<?php echo home_url() . $slug; ?>">Back to the book</a>
			<?php }

			get_template_part( 'template-parts/content', get_post_type() );

			if ( is_singular('excerpt') ) { ?>
				<a class="btn back-to-book-btn" href="#" onclick="window.history.back(); return false;">Back to the book</a>
			<?php }

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->



<?php
			if ( is_singular('excerpt') ) { ?>
<script type="text/javascript">

// execute your scripts when the DOM is ready. this is a good habit
jQuery(document).ready(function($) {
var $popready=false;

if($('.audio-slideshow').length > 0) {
	window.onload = function(){
		$('.audio-slideshow').each( function(index) {
			var $this = $(this);
			var id_this = $this.attr('id');
			if($('.pop-ups').length > 0) {
				$this.attr({id:id_this + index});
				$popready = true;
			}else{
				$this.audioSlideshow();
			}
		});
	};
}

	$(".pop-upls > a").removeAttr("href");


	function calc_pop_y(format, note_y, note_h){
		var pop_y;
		if(format=='side'){
			pop_y = note_y - (note_y * (note_y/600) ) - (note_h/2);
		}else{
			if( 301 > (note_y + (note_h/2)) ) {
				pop_y = note_y + note_h+5;
			}else{
				pop_y = note_y - 480;
			}
		}
		return pop_y;
	}

	function position_pop_ups () {

		$(".pop-upls").each(function() {
			var note = $(this);
			var	pop = note.attr('id').replace('pop-upls-','pop-up-');
			var note_x = parseInt(note.css('left'), 10),
				note_y = parseInt(note.css('top'), 10),
				note_h = note.height(),
				pop_x=0, pop_y = 0;

			if(note_x < 121){
				pop_x = note_x + 120;
				pop_y = calc_pop_y('side', note_y, note_h);
			}else if(note_x < 361){
				pop_x = 120;
				pop_y = calc_pop_y('on', note_y, note_h);
			}else if(note_x < 601){
				pop_x = 240;
				pop_y = calc_pop_y('on', note_y, note_h);
			}else{
				pop_x = note_x - 600;
				pop_y = calc_pop_y('side', note_y, note_h);
			}

			$("#"+pop).css({
		      "top": pop_y+"px",
		      "left": pop_x+"px"
		    });


		});

	}
	position_pop_ups();
	var pop_open = false;

	function closeAll(){
		$(".pop-ups").hide();
		$('.audio-slideshow').jPlayer("pause");
//		$('.audio-slideshow').setAudioSlide('3');
	}

	$(document).click(function(e) {
	  if ( $(e.target).closest('.pop-ups, .pop-upls.shown').length === 0 ) {
			$(".pop-upls").removeClass('shown');
			closeAll();
	  }
	});

	$(".pop-upls:not(.shown)").click(function() {
		$(".pop-upls").removeClass('shown');
		closeAll();
		var note = $(this);
		var	pop = note.attr('id').replace('pop-upls-','pop-up-');
		var popshow = $('#'+pop+' .audio-slideshow');
		if( popshow.length > 0 ){
			popshow.audioSlideshow();
		}
		note.addClass('shown');
		$("#"+pop).show("fast");
	});

	$(".pclose").click(function () {
		$(this).parents("div:first").hide("fast");
		$(this).parents("div#pop-ups").hide("slow");
		$(".pop-upls").removeClass('shown');
	});

});

</script>
<?php }

get_footer();
