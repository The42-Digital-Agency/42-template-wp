<?php

define('VERSION', date('Hsi'));
define('THEME_DIRECTORY', get_template_directory());
define('THEME_DIRECTORY_URI', get_template_directory_uri());

# Connecting styles and js
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('bundle', THEME_DIRECTORY_URI . '/dist/bundle.css', [], VERSION);
    wp_enqueue_script('bundle', THEME_DIRECTORY_URI . '/dist/bundle.js', [], VERSION, true);

    wp_localize_script('bundle', 'admin_data', [
        'ajaxurl' => admin_url('admin-ajax.php'),
        'action_get_post' => 'get_post',
    ]);
});

require THEME_DIRECTORY . '/inc/ajax-post.php';
require THEME_DIRECTORY . '/inc/menus.php';
require THEME_DIRECTORY . '/inc/custom_Walker_Nav_Menu.php';
require THEME_DIRECTORY . '/inc/f-clear.php';
require THEME_DIRECTORY . '/inc/f-wp_features.php';
