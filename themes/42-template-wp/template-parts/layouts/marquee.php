<?php
$direction_value = get_sub_field('direction');
$speed_value = get_sub_field('speed');

$speed = empty($speed_value) ? '140' : $speed_value;
$direction = empty($direction_value) ? 'rtl' : $direction_value;
$pause_on_hover = get_sub_field('pause_on_hover');

$title = get_sub_field('title');
?>

<?php if (have_rows('items')) : ?>
<section
  id="<?= get_sub_field('section_id') ?>"
  x-data="marquee"
  class="z-5 relative overflow-hidden"
>
  <div class="py-20">
    <?php if ($title) : ?>
    <h2 class="container mb-7 text-3xl uppercase"><?php echo $title; ?></h2>
    <?php endif; ?>

    <scrolling-items
      class="relative z-0 flex"
      data-scrolling-speed="<?php echo $speed; ?>"
      data-scrolling-direction="<?php echo $direction; ?>"
      data-pause-on-hover="<?php echo $pause_on_hover ? 'true' : 'false'; ?>"
      dir="<?php echo $direction; ?>"
    >
      <div class="flex items-center">
        <?php while (have_rows('items')) : the_row(); ?>
        <?php $image = get_sub_field('item'); ?>
        <?php if ($image) : ?>
        <div class="h-25 w-25 flex">
          <img
            class="object-contain"
            src="<?php echo $image['url']; ?>"
            alt="<?php echo $image['alt']; ?>"
          >
        </div>
        <?php endif; ?>
        <?php endwhile; ?>
      </div>
    </scrolling-items>
  </div>
</section>
<?php endif; ?>
