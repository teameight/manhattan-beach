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
				<h1 class="extra-margin-heading">Events</h1>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
						$eDate = get_field('event_date');
						$eTitle = get_field('event_title');
						$eTime = get_field('event_time');
						$eDesc = get_field('event_description');
						$eLocation = get_field('event_location');
						$link = get_field('event_page_link');

						if ($eDate) : ?>

							<div class="calendar-event">
								<span class="calendar-event-title"><?php the_title(); ?></span>
								<div class="calendar-event-meta">
									<span class="calendar-event-date"><strong>Date: </strong><?php echo $eDate; ?></span>
									<?php if ( $eTime ) echo '<span class="calendar-event-time"><strong>Time: </strong>'.$eTime.'</span>'; ?>
									<?php if ( $eLocation ) echo '<span class="calendar-event-location"><strong>Location: </strong>'.$eLocation.'</span>'; ?>
								</div>

								<?php if ( $eDesc ) echo '<span class="calendar-event-desc">'.$eDesc.'</span>'; ?>

								<?php if ( $link ) echo '<a class="calendar-event-link" href="'.$link['url'].'" target="'.$link['target'].'">more info</a>'; ?>

							</div>

						<?php
						endif;

			endwhile;

			the_posts_navigation(array('prev_text' => 'Older', 'next_text' => 'Newer'));

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
