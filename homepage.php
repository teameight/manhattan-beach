<?php
/**
 Template Name: Home
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Manhattan_Beach
 */

get_header(); ?>

	<div id="primary" class="content-area single-column">
		<main id="main" class="site-main">
			<div class="book-title">
				<div class="t-svg-wrap" id="airlinesWrap">
					<img src="<?php bloginfo('template_directory'); ?>/img/mb.png" />
					<div class="air-lines">
						<canvas id="airlinesCanvas"></canvas>
				    <!-- <div id="al-a1"></div> -->
					</div>
				</div>
			</div>
			<section class="reviews">
				<?php

				if ( have_rows('reviews') ) :

					while( have_rows('reviews') ) : the_row(); ?>


						<article class="featured-review">

							<p><?php the_sub_field('review_excerpt'); ?></p>
							<p><?php the_sub_field('review_date'); ?> &middot; <?php the_sub_field('review_author'); ?></p>

						</article>

					<?php endwhile;

				endif;

				?>
				<?php
					$link = get_field('button');

					if( $link ): ?>
						
						<a class="btn" href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>"><?php echo $link['title']; ?></a>

					<?php endif; ?>

			</section>
		</main><!-- #main -->
	</div><!-- #primary -->
	

<?php
get_footer();
