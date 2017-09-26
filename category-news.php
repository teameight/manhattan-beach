<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Manhattan_Beach
 */

get_header(); ?>

	<div id="primary" class="content-area two-column">
		<main id="main" class="site-main">

		<?php
		if ( have_posts() ) : ?>

			<header class="page-header extra-margin-heading">
				<h1 class="entry-title news-heading">News &amp; Engagements</h1>
				<?php the_archive_description( '<div class="archive-description">', '</div>' ); ?>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post(); ?>

				<article class="news-post">
					<span class="news-post-date"><?php the_time('F d, Y'); ?></span>
					<h3><?php the_title(); ?></h3>
					<?php the_content(); ?>
				</article>

			<?php endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->

		<aside class="sidebar calendar-sidebar">
			<h3 class="sidebar-title">Calendar</h3>
			<?php
				date_default_timezone_set('America/New_York');

				$args = array(
					'category_name' => 'engagements',
					'meta_key'     => 'event_date',
					'meta_value'   => date( "Ymd" ), // change to how "event date" is stored
					'meta_compare' => '>'
				);

				$query = new WP_Query($args);

				if ( $query->have_posts() ) {
					while ( $query->have_posts() ) : $query->the_post();
						$link = get_field('event_page_link');
						$eDate = get_field('event_date');

						if ($link || !$link ) : ?>

							<div class="calendar-event">
								<span class="calendar-event-date"><?php echo $eDate; ?></span>
								<a class="calendar-event-link" href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>"><?php echo $link['title']; ?></a>
							</div>

						<?php
						endif;

					endwhile;
					wp_reset_postdata();

				} else {
					echo 'no upcoming events';
				}
			?>
		</aside>
	</div><!-- #primary -->

<?php
get_footer();
