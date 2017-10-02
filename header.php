<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Manhattan_Beach
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<script src="https://use.typekit.net/jno4zpo.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
	<script type="text/javascript">
		var $pathtoswf = "<?php bloginfo('template_directory'); ?>/js/vendor/jplayer";
	</script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="body">
		<div class="b-inner">
		<div id="page-wrap">
			<div id="page" class="container site">
				<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'manhattan-beach' ); ?></a>

				<header id="masthead" class="site-header">
					<div class="site-branding">
						<?php
						the_custom_logo();
						if ( is_front_page() && is_home() ) : ?>
							<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
						<?php else : ?>
							<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
						<?php
						endif;?>
					</div><!-- .site-branding -->

					<nav id="site-navigation" class="main-navigation">
						<button type="button" class=" menu-toggle tcon tcon-menu--xcross" aria-label="toggle menu">
						  <span class="tcon-menu__lines" aria-hidden="true"></span>
						  <span class="tcon-visuallyhidden">Primary menu</span>
						</button>
						<?php
							wp_nav_menu( array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
							) );
						?>
					</nav><!-- #site-navigation -->
				</header><!-- #masthead -->

				<div id="content" class="site-content">
