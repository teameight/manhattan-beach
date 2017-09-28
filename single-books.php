<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Manhattan_Beach
 */

get_header(); ?>

	<div id="primary" class="content-area two-column">
		<main id="main" class="site-main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php $slug = $post->post_name; ?>

				<header class="book-header">
					<h1 class="entry-title"><?php the_title(); ?></h1>
				</header>

				<section class="book-overview">
					<?php the_content(); ?>
				</section>

			<?php endwhile; // End of the loop. ?>

			<?php if ( $excerpt = get_field('excerpt') ) : ?>
				<a href="<?php echo $excerpt; ?>" class="btn">Read Excerpt</a>
			<?php endif; ?>

				<?php
					// Query this book's reviews
					$args = array(
						'post_type' 			=> 'reviews',
						'posts_per_page' 	=> 3,
						'tax_query' 			=> array(
							array(
								'taxonomy' 	=> 'reviewed-book',
								'field'			=> 'slug',
								'terms'			=> $slug
							)
						)
					);
					$query = new WP_Query($args);

				if ( $query->have_posts() ) { ?>
					<section class="book-interviews">
						<h2>Reviews</h2>
					<?php
					while ( $query->have_posts() ) : $query->the_post(); ?>
						<article class="book-review">
							<div class="book-review-content"><?php the_content(); ?></div>
						</article>
					<?php endwhile;
						if ( $query->found_posts > 3 ) : ?>
							<a href="<?php echo home_url(); ?>/reviewed-book/<?php echo $slug; ?>" class="btn">See all reviews</a>
						<?php endif; ?>
					</section>
				<?php	wp_reset_postdata();
					}

					// Query this book's interviews
					$args = array(
						'post_type' 			=> 'interviews',
						'posts_per_page' 	=> 3,
						'tax_query' 			=> array(
							array(
								'taxonomy' 	=> 'interviewed-book',
								'field'			=> 'slug',
								'terms'			=> $slug
							)
						)
					);
					$query = new WP_Query($args);

				if ( $query->have_posts() ) { ?>
					<section class="book-interviews">
						<h2>Interviews</h2>
					<?php
					while ( $query->have_posts() ) : $query->the_post(); ?>
						<article class="book-interview">
							<div class="book-interview-content"><?php the_content(); ?></div>
						</article>
					<?php endwhile;
						if ( $query->found_posts > 3 ) : ?>
						<a href="<?php echo home_url(); ?>/interviewed-book/<?php echo $slug; ?>" class="btn">See all interviews</a>
						<?php endif; ?>
					</section>
				<?php wp_reset_postdata();
					}
				?>

		</main><!-- #main -->

		<aside class="sidebar book-sidebar">
			<?php the_post_thumbnail('post-thumbnail', ['class' => 'book-sidebar-img']); ?>
			<h3 class="sidebar-title">Buy the book</h3>
			<?php the_field('buy'); ?>
			<?php if ( $guide = get_field('reading_guide') ) : ?>
				<a class="cta-link" href="<?php echo $guide; ?>">Reading Guide</a>
			<?php endif; ?>
		</aside>

	</div><!-- #primary -->

<?php
get_footer();
