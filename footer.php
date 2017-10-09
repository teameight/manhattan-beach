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
<!-- 		<div class="wave-back wave-seg"></div> -->
		<img class="wave-l-1 wave-seg" src="<?php echo get_template_directory_uri(); ?>/img/waves/wave-1.jpg" alt"waves" />
		<div class="wave-l-2 wave-seg">
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w2t.png" alt"waves" />
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w2.jpg" alt"waves" />
		</div>
		<div class="wave-l-3 wave-seg">
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w3t.png" alt"waves" />
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w3.jpg" alt"waves" />
		</div>
		<div class="wave-l-4 wave-seg">
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w4t.png" alt"waves" />
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w4.jpg" alt"waves" />
		</div>
		<div class="wave-l-5 wave-seg">
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w5t.png" alt"waves" />
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w5.jpg" alt"waves" />
		</div>
		<div class="wave-l-6 wave-seg">
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w6t.png" alt"waves" />
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w6.jpg" alt"waves" />
		</div>
		<div class="wave-l-7 wave-seg">
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w7t.png" alt"waves" />
			<img src="<?php echo get_template_directory_uri(); ?>/img/waves/w7.jpg" alt"waves" />
		</div>
		<div class="wave-l-8 wave-seg">
			<div id="canvas-container">
			  <canvas id="waveCanvas"></canvas>
			</div>
			<section id="underwater" class="underwater">
				<div class="background">
					<div class="structure st-0">
						<img alt="" src="./img/bg-texture.png">
					</div>
					<div class="structure st-1">
						<img alt="" src="./img/nyscraper.png">
					</div>
				</div>
				<div class="node-wrapper nw-template">
			    <div class="node">
			      <div class="camera">
			        <div class="object obj-template">
			        </div>
			      </div>
			    </div>
			  </div>
			</section>
		</div>
	</div><!-- wave-wrap -->
	</div><!-- #b-inner -->
</div><!-- #body -->
<div class="canvas-wrap">
	<canvas id="detritus-canvas"></canvas>
</div>

<?php wp_footer(); ?>

</body>
</html>
