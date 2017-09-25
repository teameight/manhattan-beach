<?php
/**
 * Manhattan Beach functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Manhattan_Beach
 */

if ( ! function_exists( 'manhattan_beach_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function manhattan_beach_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Manhattan Beach, use a find and replace
		 * to change 'manhattan-beach' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'manhattan-beach', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'manhattan-beach' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'manhattan_beach_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'manhattan_beach_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function manhattan_beach_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'manhattan_beach_content_width', 640 );
}
add_action( 'after_setup_theme', 'manhattan_beach_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function manhattan_beach_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'manhattan-beach' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'manhattan-beach' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'manhattan_beach_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function manhattan_beach_scripts() {
	wp_enqueue_style( 'manhattan-beach-style', get_stylesheet_uri() );

	wp_enqueue_style( 'manhattan-beach-style-custom', get_template_directory_uri() . '/css/style.css' );

	wp_enqueue_script( 'manhattan-beach-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'manhattan-beach-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_enqueue_script( 'jquery' );

	wp_enqueue_script( 'mb_scripts', get_template_directory_uri() . '/js/scripts.js', array('jquery') );
}
add_action( 'wp_enqueue_scripts', 'manhattan_beach_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}



add_action( 'init', 'jegan_book_init' );
/**
 * Register a book post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */

function jegan_book_init() {

	add_theme_support( 'post-thumbnails' );

	$labels = array(
		'name'              => _x( 'Books', 'taxonomy general name' ),
		'singular_name'     => _x( 'Book', 'taxonomy singular name' ),
		'search_items'      => __( 'Search Books' ),
		'all_items'         => __( 'All Books' ),
		'parent_item'       => __( 'Parent Book' ),
		'parent_item_colon' => __( 'Parent Book:' ),
		'edit_item'         => __( 'Edit Book' ),
		'update_item'       => __( 'Update Book' ),
		'add_new_item'      => __( 'Add New Book' ),
		'new_item_name'     => __( 'New Book' ),
		'menu_name'         => __( 'Book' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => 'Books',
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'book' )
	);
	register_taxonomy( 'book', array( 'books', 'reviews', 'interviews', 'post' ), $args );

/**/

// Creates Slideshow post type
	$args = array(
		'label'             => 'Slideshows',
		'public'			 => true,
		'rewrite'            => array( 'slug' => 'slideshow' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'menu_icon'			=> 'dashicons-images-alt',
		'hierarchical'       => false,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'comments' )
	);

	register_post_type( 'slideshows', $args );

// Creates Reviews post type
	$args = array(
		'label'             => 'Reviews',
		'public'			 => true,
		'taxonomies'         => array('book'),
		'rewrite'            => array( 'slug' => 'reviews' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'menu_icon'			=> 'dashicons-welcome-write-blog',
		'hierarchical'       => false,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'comments' )
	);

	register_post_type( 'reviews', $args );

// Creates Interviews post type
	$args = array(
		'label'             => 'Interviews',
		'public'			 => true,
		'taxonomies'         => array('book'),
		'rewrite'            => array( 'slug' => 'interviews' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'menu_icon'			=> 'dashicons-microphone',
		'hierarchical'       => false,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'comments' )
	);
	register_post_type( 'interviews', $args );

	$labels = array(
		'name'               => _x( 'Books', 'post type general name', 'your-plugin-textdomain' ),
		'singular_name'      => _x( 'Book', 'post type singular name', 'your-plugin-textdomain' ),
		'menu_name'          => _x( 'Books', 'admin menu', 'your-plugin-textdomain' ),
		'name_admin_bar'     => _x( 'Book', 'add new on admin bar', 'your-plugin-textdomain' ),
		'add_new'            => _x( 'Add New', 'book', 'your-plugin-textdomain' ),
		'add_new_item'       => __( 'Add New Book', 'your-plugin-textdomain' ),
		'new_item'           => __( 'New Book', 'your-plugin-textdomain' ),
		'edit_item'          => __( 'Edit Book', 'your-plugin-textdomain' ),
		'view_item'          => __( 'View Book', 'your-plugin-textdomain' ),
		'all_items'          => __( 'All Books', 'your-plugin-textdomain' ),
		'search_items'       => __( 'Search Books', 'your-plugin-textdomain' ),
		'parent_item_colon'  => __( 'Parent Books:', 'your-plugin-textdomain' ),
		'not_found'          => __( 'No books found.', 'your-plugin-textdomain' ),
		'not_found_in_trash' => __( 'No books found in Trash.', 'your-plugin-textdomain' )
	);

	$args = array(
		'labels'          	=> $labels,
		'public'			 			=> true,
		'taxonomies'      	=> array('book'),
		'rewrite'         	=> array( 'slug' => 'books' ),
		'capability_type' 	=> 'post',
		'has_archive'     	=> true,
		'hierarchical'   		=> false,
		'menu_icon'					=> 'dashicons-book-alt',
		'supports'        	=> array( 'title', 'editor', 'author', 'thumbnail', 'comments' )
	);

	register_post_type( 'books', $args );

	$labels = array(
		'name'               => _x( 'Non-Fiction', 'post type general name', 'your-plugin-textdomain' ),
		'singular_name'      => _x( 'Non-Fiction', 'post type singular name', 'your-plugin-textdomain' ),
		'menu_name'          => _x( 'Non-Fiction', 'admin menu', 'your-plugin-textdomain' ),
		'name_admin_bar'     => _x( 'Non-Fiction', 'add new on admin bar', 'your-plugin-textdomain' ),
		'add_new'            => _x( 'Add New', 'book', 'your-plugin-textdomain' ),
		'add_new_item'       => __( 'Add New Non-Fiction', 'your-plugin-textdomain' ),
		'new_item'           => __( 'New Non-Fiction', 'your-plugin-textdomain' ),
		'edit_item'          => __( 'Edit Non-Fiction', 'your-plugin-textdomain' ),
		'view_item'          => __( 'View Non-Fiction', 'your-plugin-textdomain' ),
		'all_items'          => __( 'All Non-Fiction', 'your-plugin-textdomain' ),
		'search_items'       => __( 'Search Non-Fiction', 'your-plugin-textdomain' ),
		'parent_item_colon'  => __( 'Parent Non-Fiction:', 'your-plugin-textdomain' ),
		'not_found'          => __( 'No non-fiction found.', 'your-plugin-textdomain' ),
		'not_found_in_trash' => __( 'No non-fiction found in Trash.', 'your-plugin-textdomain' )
	);

	$args = array(
		'labels'          	=> $labels,
		'public'			 			=> true,
		'rewrite'         	=> array( 'slug' => 'non-fiction' ),
		'capability_type' 	=> 'post',
		'has_archive'     	=> true,
		'hierarchical'   		=> false,
		'menu_icon'					=> 'dashicons-welcome-write-blog',
		'supports'        	=> array( 'title', 'editor', 'author', 'thumbnail' )
	);

	register_post_type( 'non-fiction', $args );

}

