<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Manhattan_Beach
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('non-fiction-item'); ?>>

	<div class="entry-content">
		<a class="cta-link" href=""><?php the_title(); ?></a>
		<span class="non-fiction-item-pub"><?php the_field('publication'); ?></span>
		<span class="non-fiction-item-date"><?php the_field('published_date'); ?></span>
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
