<?php
function wp_load_more_posts()
{
    $paged = isset($_POST['paged']) ? intval($_POST['paged']) : 0;
    $posts_per_page = isset($_POST['posts_per_page']) ? intval($_POST['posts_per_page']) : -1;
    $category = isset($_POST['category']) ? sanitize_text_field($_POST['category']) : '';
    $tag = isset($_POST['tag']) ? sanitize_text_field($_POST['tag']) : '';

    $args = [
        'post_type' => 'post',
        'posts_per_page' => $posts_per_page,
        'paged' => $paged,
        'post_status' => 'publish',
    ];

    if (!empty($category)) {
        $args['category_name'] = $category;
    }

    if (!empty($tag)) {
        $args['tag'] = $tag;
    }

    $query = new WP_Query($args);

    if ($query->have_posts()) {
        ob_start();
        while ($query->have_posts()) {
            $query->the_post();

            if ($category == 'post_1') {
                # get_template_part(...)
            } elseif ($category == 'post_2') {
                # get_template_part(...)
            }
        }
        wp_reset_postdata();
        $output = ob_get_clean();
        echo $output;
    }

    wp_die();
}

function wp_get_post()
{
    if (isset($_POST['post_id']) && is_numeric($_POST['post_id'])) {
        $post_id = intval($_POST['post_id']);

        // Get the post by ID
        $post = get_post($post_id);

        if ($post) {
            ob_start();
            get_template_part('partials/single-post', '', ['id' => $post_id]);
            $output = ob_get_clean();

            $response = [
                'html' => $output,
            ];
            wp_send_json($response);
        } else {
            wp_send_json_error(['message' => 'Post not found']);
        }
    } else {
        wp_send_json_error(['message' => 'Invalid post ID']);
    }

    wp_die();
}

add_action('wp_ajax_wp_load_more_posts', 'wp_load_more_posts');
add_action('wp_ajax_nopriv_wp_load_more_posts', 'wp_load_more_posts');
