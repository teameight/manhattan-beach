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
		<?php // create array of pages not to include waves and underwater ?>

		<?php

		global $wave_slug;

		if($wave_slug){

		?>

		<div class="wave-wrap<?php echo ' ' . $wave_slug; ?>">
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
				<div class="uw-segway">
					<!-- <img alt="" src="<?php echo get_template_directory_uri(); ?>/img/bg/light-bg.png"> -->
				</div>
				<section id="underwater" class="underwater">
					<div class="background">
						<div class="structure st-0">
							<img alt="" src="<?php echo get_template_directory_uri(); ?>/img/bg/bg-texture.png">
						</div>
						<div class="structure st-1">
							<img alt="" src="<?php echo get_template_directory_uri(); ?>/img/bg/nyscraper.png">
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
			</div><!-- wave-l-8 -->
		</div><!-- wave-wrap -->
		<div class="floor"></div>
	</div><!-- #b-inner -->
	<div class="loading">
		<div class="preloader">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</div><!-- #body -->
<div class="canvas-wrap">
	<canvas id="detritus-canvas"></canvas>
</div>

	<?php } ?>

<div class="uw-hud">
	<div class="node-label">
		<span class="node-label-text"></span>
	</div>
	<div class="hud-controls">
		<div class="prevnext"><a class="prev"><span></span></a><a class="next"><span></span></a></div>
		<a class="totop" href="#page"><img alt="Back to Top" title="Back to top" src="<?php echo get_template_directory_uri(); ?>/img/btotop.png"></a>
		<nav id="uw-site-navigation" class="main-navigation">
			<button type="button" class=" menu-toggle tcon tcon-menu--xcross" aria-label="toggle menu">
			  <span class="tcon-menu__lines" aria-hidden="true"></span>
			  <span class="tcon-visuallyhidden">Primary menu</span>
			</button>
			<?php
				wp_nav_menu( array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
					'container_class' => 'menu-uw'
				) );
			?>
		</nav><!-- #site-navigation -->
	</div>
</div><!-- #masthead -->
</div>

<?php wp_footer(); ?>

</body>
</html>
