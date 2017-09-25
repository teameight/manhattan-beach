<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'jennifer_wordpress_dv601aodkgift1');

/** MySQL database username */
define('DB_USER', 'wpuserkxc5c9unas');

/** MySQL database password */
define('DB_PASSWORD', 'Ha5k77aIr7');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'xoyp2dyjh2cf7fhw1kh9vl7w3b5m7c2q2kn8li85mwniflhtx67uobdjssp31nbw');
define('SECURE_AUTH_KEY',  '6xfmwrrbknl7bsquugx1prx1o3mohgyv5p4yd3w0y6vs3q7h0u51bgg63ptdpahg');
define('LOGGED_IN_KEY',    'wig56s7mwhvjnhn7yjb9mw7kiws1k3n8ujl5itk6yftiy4lill9hvqpdnjmugq73');
define('NONCE_KEY',        'jbdp3gcpnypcw5cifq7k5wra9jtaxjm4yrhwargygw9kilxxyu7hvm7mp3l6fwts');
define('AUTH_SALT',        '1rwwbkysf1mlwsy3gr7l6c4gcp2i0tthkr2od3yj4c4iy7ii6qk8lfu4lfsm0cr4');
define('SECURE_AUTH_SALT', 'dwq0o5w78gtm6g05pgastpclocdsm8sa8hj7g00rhi5igl04fojx10c5hd9irasd');
define('LOGGED_IN_SALT',   'o8sg0sf28b624w2ur6rbmgy9lvmmj1p5mrbnhoaqmg4vwddwhlki6n5hntlwn0hk');
define('NONCE_SALT',       'yduvpdr3vvft50r1qhu9mr9d1sd1jc1v2wjc1ogto31rpu17p6madbw3nmtsh9nx');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_xfzxlo_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 * Defining this constant one of three ways allows you to blanket-enable,
 * or blanket-disable several types of core updates at once.
 */
define( 'WP_AUTO_UPDATE_CORE', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
