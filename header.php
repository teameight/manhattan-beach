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
	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-108385894-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-108385894-1');
</script>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<script src="https://use.typekit.net/jno4zpo.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
	<script type="text/javascript">
		var $pathtoswf = "<?php bloginfo('template_directory'); ?>/js/vendor/jplayer";
	</script>
	<?php wp_head(); ?>
</head>
<?php

	require 'vendor/autoload.php';

	$result = new WhichBrowser\Parser($_SERVER['HTTP_USER_AGENT']);
	if ($result->isBrowser('Internet Explorer') || $result->isBrowser('Edge') || $result->isBrowser('Firefox') ) { $static_wave = true; } else { $static_wave = false; }

	global $wave_slug;
	if($wave_slug){

?>
<body <?php body_class('above water'); ?>>
<div class="underwater-video-modal">
	<div class="video-holder"></div>
	<button type="button" class="video-modal-close tcon tcon-menu--xcross" aria-label="close video">
	  <span class="tcon-menu__lines" aria-hidden="true"></span>
	  <span class="tcon-visuallyhidden">Close</span>
	</button>
</div>

<?php if ( $static_wave ) { ?>

<?php } else { ?>
	<div id="body" class="not-loaded water">
		<div class="b-bg"></div>
<?php } ?>
		<div class="b-inner<?php if ( $static_wave ) echo ' static-wave'; ?>">

<?php
		}else{
?>

<body <?php body_class('above'); ?>>
<div class="underwater-video-modal">
	<div class="video-holder"></div>
	<button type="button" class="video-modal-close tcon tcon-menu--xcross" aria-label="close video">
	  <span class="tcon-menu__lines" aria-hidden="true"></span>
	  <span class="tcon-visuallyhidden">Close</span>
	</button>
</div>

	<!-- Google Tag Manager (noscript) -->
<!-- 	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PCRDVJP"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
	<!-- End Google Tag Manager (noscript) -->

<?php
		}
?>

		<div id="page-wrap" <?php if ( $static_wave ) echo 'class="static-wave"'; ?> data-ajax="false">
			<a name="page" tabindex="-1"></a>
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
