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
		<a href="<?php echo home_url(); ?>/non-fiction" class="cta-link">Back to Non-Fiction</a>
		<?php
		while ( have_posts() ) : the_post();

			the_title('<h1>', '</h1>');
			the_content();

		endwhile; // End of the loop.
		?>
		<a href="<?php echo home_url(); ?>/non-fiction" class="btn">Back to Non-Fiction</a>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
