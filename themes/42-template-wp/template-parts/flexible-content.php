<?php
// Check if the flexible content field has rows of data
if (have_rows('layouts')):
    // Loop through the rows of data
    while (have_rows('layouts')):
        the_row();

        // Get the current layout
        $layout = get_row_layout();

        // Include the layout file
        get_template_part('template-parts/layouts/' . $layout);
    endwhile;
endif;
