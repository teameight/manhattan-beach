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
				<h1 class="page-title">Interviews for: <?php echo single_term_title('', false); ?></h1>
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

		else :

			echo '<p>No interviews yet.</p>';

		endif;

			$term_slug = get_queried_object()->slug;

			// Query this book's interviews
					$args = array(
						'post_type' 			=> 'reviews',
						'posts_per_page' 	=> 1,
						'tax_query' 			=> array(
							array(
								'taxonomy' 	=> 'reviewed-book',
								'field'			=> 'slug',
								'terms'			=> $term_slug
							)
						)
					);
					$reviews_query = new WP_Query($args);
					if ( $reviews_query->have_posts() ) {

						echo '<a href="'.home_url().'/reviewed-book/'.$term_slug.'" class="btn">Read the reviews</a>';
						
					}
					echo ' <a style="float:right; margin-top: 1em;" href="'.home_url().'/books/'.$term_slug.'">Back to '.single_term_title('', false).'</a>';


		?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
