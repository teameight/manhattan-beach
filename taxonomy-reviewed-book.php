<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Manhattan_Beach
 */

get_header(); ?>

	<div id="primary" class="content-area single-column">
		<main id="main" class="site-main">
		<?php
		if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">Reviews for: <?php echo single_term_title('', false); ?></h1>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', 'reviews' );

			endwhile;

			the_posts_navigation(array('prev_text' => 'Older', 'next_text' => 'Newer'));

			$term_slug = get_queried_object()->slug;

			echo '<a href="'.home_url().'/interviewed-book/'.$term_slug.'" class="btn">Read the interviews</a>';

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
