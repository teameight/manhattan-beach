<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Manhattan_Beach
 */

get_header(); ?>

	<div id="primary" class="content-area single-book">
		<main id="main" class="site-main">

			<?php while ( have_posts() ) : the_post(); ?>

				<section class="book-overview">
					<h1 class="entry-title"><?php the_title(); ?></h1>
					<?php the_content(); ?>
				</section>

			<?php endwhile; // End of the loop. ?>

			<a href="/" class="btn">Read Excerpt</a>

			<section class="book-reviews">
				<h2>Reviews</h2>
				<article class="book-review">
					<div class="book-review-meta">
						<strong class="book-review-publication">Review Publication Name</strong>
						<span class="book-review-date">January, 2000</span>
					</div>
					<p class="book-review-excerpt">
						“When Halloween comes around this year, forgo the tired old horror movies and curl up with National Book Award nominee Jennifer Egan’s new novel The Keep…Part gothic romance, part ghost story, and peppered with Egan’s startling insights into the role of communication and loneliness in contemporary life, this is one brainy page-turner that will have you leaving the lights on at night.”
					</p>
					<span class="book-review-author">-Review Author</span>
				</article>
				<article class="book-review">
					<div class="book-review-meta">
						<strong class="book-review-publication">Review Publication Name</strong>
						<span class="book-review-date">January, 2000</span>
					</div>
					<p class="book-review-excerpt">
						“When Halloween comes around this year, forgo the tired old horror movies and curl up with National Book Award nominee Jennifer Egan’s new novel The Keep…Part gothic romance, part ghost story, and peppered with Egan’s startling insights into the role of communication and loneliness in contemporary life, this is one brainy page-turner that will have you leaving the lights on at night.”
					</p>
					<span class="book-review-author">-Review Author</span>
				</article>
				<article class="book-review">
					<div class="book-review-meta">
						<strong class="book-review-publication">Review Publication Name</strong>
						<span class="book-review-date">January, 2000</span>
					</div>
					<p class="book-review-excerpt">
						“When Halloween comes around this year, forgo the tired old horror movies and curl up with National Book Award nominee Jennifer Egan’s new novel The Keep…Part gothic romance, part ghost story, and peppered with Egan’s startling insights into the role of communication and loneliness in contemporary life, this is one brainy page-turner that will have you leaving the lights on at night.”
					</p>
					<span class="book-review-author">-Review Author</span>
				</article>
			<a href="/" class="btn">See all reviews</a>
			</section>
			<section class="book-interviews">
				<h2>Interviews</h2>
				<article class="book-interview">
					<div class="book-interview-meta">
						<strong class="book-interview-publication">Interview Publication Name, </strong>
						<span class="book-interview-author">interview by Donna Seaman</span>
					</div>
					<p class="book-interview-excerpt">
						Borough of Writers Q&amp;A: Jennifer Egan
					</p>
					<a class="cta-link" href="/">Read Interview</a>
				</article>
				<article class="book-interview">
					<div class="book-interview-meta">
						<strong class="book-interview-publication">Interview Publication Name, </strong>
						<span class="book-interview-author">interview by Donna Seaman</span>
					</div>
					<p class="book-interview-excerpt">
						Borough of Writers Q&amp;A: Jennifer Egan
					</p>
					<a class="cta-link" href="/">Read Interview</a>
				</article>
				<article class="book-interview">
					<div class="book-interview-meta">
						<strong class="book-interview-publication">Interview Publication Name, </strong>
						<span class="book-interview-author">interview by Donna Seaman</span>
					</div>
					<p class="book-interview-excerpt">
						Borough of Writers Q&amp;A: Jennifer Egan
					</p>
					<a class="cta-link" href="/">Read Interview</a>
				</article>
			<a href="/" class="btn">See all interviews</a>
			</section>

		</main><!-- #main -->

		<aside class="book-sidebar">
			<?php the_post_thumbnail('post-thumbnail', ['class' => 'book-sidebar-img']); ?>
			<h3 class="book-sidebar-title">Buy the book</h3>
			<a class="book-buy-link" href="http://www.amazon.com/Visit-Goon-Squad-Jennifer-Egan/dp/0307592839/ref=ntt_at_ep_dpi_3">Amazon</a>
			<a class="book-buy-link" href="http://search.barnesandnoble.com/A-Visit-from-the-Goon-Squad/Jennifer-Egan/e/9780307592835/?itm=5&amp;USRI=jennifer+egan">Barnes &amp; Noble</a>
			<a class="book-buy-link" href="http://www.indiebound.org/book/9780307592835">Indiebound</a>
			<a class="book-buy-link" href="http://www.powells.com/book/visit-from-the-goon-squad-9780307592835">Powells</a>
			<a class="book-buy-link" href="https://www.walmart.com/ip/A-Visit-from-the-Goon-Squad/12718625">Walmart</a>
			<a class="book-buy-link" href="http://www.penguinrandomhouse.com/books/201020/a-visit-from-the-goon-squad-by-jennifer-egan/">Randomhouse</a>
		</aside>

	</div><!-- #primary -->

<?php
get_footer();
