<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Manhattan_Beach
 */

?>

			</div><!-- #content -->

		</div><!-- #page -->
	</div><!-- #page-wrap -->
	<div class="wave-wrap">
		<img class="wave-full" src="<?php echo get_template_directory_uri(); ?>/img/waves/wave-full.jpg" alt"waves" />
		<?php

			if(is_front_page()){
				// echo 'huh';

				$page_object = get_queried_object();
				$page_id     = get_queried_object_id();
				// echo $page_id;

				$wavetext = get_field('wave_text', $page_id);

					if( $wavetext ): ?>
						
						<div class="wavetext"><?php echo $wavetext; ?></div>

					<?php endif;

			}

		?>
	</div>

	</div><!-- #b-inner -->
</div><!-- #body -->

<?php wp_footer(); ?>

</body>
</html>
