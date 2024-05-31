<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
  <?php wp_head(); ?>
</head>

<body x-data>
  <div class="flex min-h-full flex-col">
    <header
      id="header"
      class="fixed w-full bg-zinc-400"
    >
      <nav class="container flex items-center justify-between">
        <div class="max-w-10">
          <?php
          if (has_custom_logo()) {
              echo get_custom_logo();
          } ?>
        </div>

        <?php my_nav_menu(['theme_location' => 'header_menu', 'container_id' => 'header_navigation']); ?>
        <div
          @click="$store.mobileMenu.show()"
          class="cursor-pointer"
        >
          MENU
        </div>
      </nav>

      <?php get_template_part('partials/mobile-menu'); ?>
    </header>
