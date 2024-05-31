<?php
# Connecting styles and js
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('bundle', get_template_directory_uri() . '/dist/bundle.css');
    wp_enqueue_script('bundle', get_template_directory_uri() . '/dist/bundle.js', [], 'null', true);

    //wp_localize_script('bundle', 'post_data', [
    //    'ajaxurl' => admin_url('admin-ajax.php'),
    //    'action' => 'loadmore',
    //]);
});

# Handle AJAX requests
//add_action('wp_ajax_loadmore', 'loadmore', 99);
//add_action('wp_ajax_nopriv_loadmore', 'loadmore', 99);

//function loadmore() { ... code here }

# Registering areas for menus
add_action('after_setup_theme', function () {
    register_nav_menus([
        'header_menu' => 'Header menu',
        'footer_menu' => 'Footer menu',
    ]);
});

# Hide admin bar in front
require get_template_directory() . '/inc/f-clear.php';

# Registers support for various WordPress features. See f-wp_features.php for more details
require get_template_directory() . '/inc/f-wp_features.php';

# Nav Menu
require_once get_template_directory() . '/inc/custom_Walker_Nav_Menu.php';
