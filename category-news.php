<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Manhattan_Beach
 */

get_header(); ?>

	<div id="primary" class="content-area two-column two-column-wide">
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
						$eDate = get_field('event_date');
						$eTitle = get_field('event_title');
						$eTime = get_field('event_time');
						$eDesc = get_field('event_description');
						$eLocation = get_field('event_location');
						$link = get_field('event_page_link');

						if ($eDate) : ?>

							<div class="calendar-event">
								<span class="calendar-event-date"><?php echo $eDate; ?></span>
								<?php if ( $link ) echo '<a class="calendar-event-link" href="'.$link['url'].'" target="'.$link['target'].'">'; ?>
								<span class="calendar-event-title"><?php the_title(); ?></span>
								<?php if ( $link ) echo '</a>'; ?>
								<?php if ( $eLocation ) echo '<span class="calendar-event-location">'.$eLocation.'</span>'; ?>
								<?php if ( $eTime ) echo '<span class="calendar-event-time">'.$eTime.'</span>'; ?>

								<?php if ( $eDesc ) echo '<span class="calendar-event-desc">'.$eDesc.'</span>'; ?>
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

		<main id="main" class="site-main">

		<?php
		if ( have_posts() ) : ?>

			<header class="page-header extra-margin-heading">
				<h1 class="entry-title news-heading">News &amp; Events</h1>
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


	</div><!-- #primary -->

<?php
get_footer();
