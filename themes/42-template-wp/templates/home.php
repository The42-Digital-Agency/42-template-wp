<?php
/*
Template Name: Home
*/
?>

<?php get_header(); ?>

<main style="padding-top: var(--header-height);" class="flex-auto py-14">
  <section class="container">
    <h1 class="font-secondary text-center text-5xl font-bold uppercase">
      Home page
    </h1>
  </section>

  <?php get_template_part('template-parts/flexible-content'); ?>
</main>

<?php get_footer(); ?>