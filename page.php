<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Manhattan_Beach
 */

get_header(); ?>

	<div id="primary" class="content-area single-column">
		<main id="main" class="site-main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

			endwhile; // End of the loop.
			?>

			<?php
				if ( is_page('about') || is_page('contact') ) : ?>

					<a class="social-link" href="https://www.facebook.com/Jennifereganwriter?ref=ts">
						<svg class="social-icon facebook-icon" width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						        <g id="Contact" transform="translate(-356.000000, -1345.000000)">
						            <g id="Group-3" transform="translate(248.000000, 76.000000)">
						                <g id="Group" transform="translate(108.000000, 1269.000000)">
						                    <g id="facebook">
						                        <circle id="Oval" fill="#197380" cx="18.9309914" cy="18.9309914" r="18.9309914"></circle>
						                        <path d="M21.5421627,11.7502705 L24.8061267,11.7502705 L24.8061267,7.8335137 L21.5421627,7.8335137 C19.0223824,7.8335137 16.972613,9.88328311 16.972613,12.4030634 L16.972613,14.3614418 L14.3614418,14.3614418 L14.3614418,18.2781986 L16.972613,18.2781986 L16.972613,28.7228836 L20.8893699,28.7228836 L20.8893699,18.2781986 L24.1533339,18.2781986 L24.8061267,14.3614418 L20.8893699,14.3614418 L20.8893699,12.4030634 C20.8893699,12.0492497 21.188349,11.7502705 21.5421627,11.7502705" id="Page-1" fill="#FFFFFF"></path>
						                    </g>
						                </g>
						            </g>
						        </g>
						    </g>
						</svg>
					</a>
					<a class="social-link" href="https://twitter.com/Egangoonsquad">
						<svg class="social-icon twitter-icon" width="43px" height="34px" viewBox="0 0 43 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						    <defs>
						        <polygon id="path-1" points="43 17 43 34 0 34 0 17 0 0 43 0 43 17"></polygon>
						    </defs>
						    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						        <g id="Contact" transform="translate(-423.000000, -1348.000000)">
						            <g id="Group-3" transform="translate(248.000000, 76.000000)">
						                <g id="Group" transform="translate(108.000000, 1269.000000)">
						                    <g id="twitter" transform="translate(67.000000, 3.000000)">
						                        <mask id="mask-2" fill="white">
						                            <use xlink:href="#path-1"></use>
						                        </mask>
						                        <g id="Clip-2"></g>
						                        <path d="M43,4.01953696 C41.420145,4.70733021 39.7166958,5.16498731 37.9380155,5.36897162 C39.7596851,4.30720714 41.154149,2.623029 41.8177956,0.619798477 C40.1143464,1.60049227 38.2228193,2.31966772 36.2184454,2.70409968 C34.6063484,1.03561265 32.3144839,0 29.778118,0 C24.9068983,0 20.9626343,3.84170448 20.9626343,8.58041689 C20.9626343,9.24990385 21.0378655,9.90369972 21.1883279,10.5339589 C13.8586603,10.1730636 7.35922269,6.75763403 3.00924769,1.56126452 C2.25424894,2.82701331 1.81629593,4.30720714 1.81629593,5.87631721 C1.81629593,8.85239597 3.36928268,11.4832705 5.73637841,13.0183832 C4.29086478,12.9765403 2.93132967,12.5842627 1.73837791,11.9487732 L1.73837791,12.0559957 C1.73837791,16.2167526 4.7771807,19.6897162 8.81548363,20.4742712 C8.07660585,20.67041 7.29473882,20.7776325 6.48869033,20.7776325 C5.91908273,20.7776325 5.37096976,20.7200985 4.82554361,20.6233367 C5.95132467,24.0309207 9.20776056,26.515345 13.0633592,26.5885701 C10.0406773,28.8925467 6.24418895,30.265518 2.10647338,30.265518 C1.39177706,30.265518 0.695888528,30.2236751 0,30.1426044 C3.91202199,32.5851858 8.5468008,34 13.5254936,34 C29.745876,34 38.6231567,20.9162372 38.6231567,9.57157142 C38.6231567,9.194985 38.6150962,8.82885932 38.5989753,8.46011845 C40.3212322,7.25974925 41.8151087,5.74555803 42.9973132,4.02215214 L43,4.01953696 Z" id="Fill-1" fill="#197380" mask="url(#mask-2)"></path>
						                    </g>
						                </g>
						            </g>
						        </g>
						    </g>
						</svg>
					</a>

				<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
