<?php
# Registering areas for menus
add_action('after_setup_theme', function () {
  register_nav_menus([
    'header_menu' => 'Header menu',
    'footer_menu' => 'Footer menu',
  ]);
});
