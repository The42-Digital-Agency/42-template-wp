<section
  id="<?= get_sub_field('section_id') ?>"
  x-data="faq"
>
  <div class="container pt-10">

    <?php if (get_sub_field('title')) : ?>
    <h2 class="mb-7 text-3xl uppercase"><?php echo get_sub_field('title'); ?></h2>
    <?php endif; ?>

    <?php if (have_rows('faq_fields')) : ?>
    <ul class="grid">
      <?php $index_item = 0; ?>
      <?php while (have_rows('faq_fields')) : the_row(); ?>
      <li class="border-b border-black">
        <div
          @click="toggle(<?= $index_item ?>)"
          class="md:px-3.75 gap-18 md:py-7.5 group flex cursor-pointer justify-between py-5 align-baseline"
        >
          <h6
            class="text-base font-bold leading-5 transition-all duration-300 md:text-xl md:leading-6"
          >
            <?= get_sub_field('faq_question') ?>
          </h6>
          <svg
            width="24"
            height="15"
            viewBox="0 0 24 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-shrink-0 transition-all duration-300"
            :class="<?php echo $index_item; ?> == index_visible_item ? 'rotate-180' : ''"
          >
            <path
              d="M12.2883 9.40974L21.198 0.5L23.7432 3.04513L12.2883 14.5L0.833417 3.04512L3.37854 0.499998L12.2883 9.40974Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div
          x-cloak
          x-show="<?= $index_item ?> == index_visible_item"
          x-collapse.duration.500ms
          class="md:px-3.75 text-base font-normal leading-5 text-black md:text-xl md:leading-6"
        >
          <div class="md:pb-7.5 pb-5"><?= get_sub_field('faq_answer') ?></div>
        </div>
      </li>
      <?php $index_item++; ?>
      <?php endwhile; ?>
    </ul>
    <?php endif; ?>

  </div>
</section>
