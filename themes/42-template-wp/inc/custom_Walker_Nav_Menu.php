<?php
class Custom_Walker_Nav_Menu extends Walker_Nav_Menu
{
    // add classes to ul sub-menus
    function start_lvl(&$output, $depth = 0, $args = null)
    {
        // depth dependent classes
        $indent = $depth > 0 ? str_repeat("\t", $depth) : ''; // code indent
        $display_depth = $depth + 1; // because it counts the first submenu as 0
        $classes = ['sub-menu', $display_depth == 1 ? 'sub-menu--main' : '', $display_depth >= 2 ? 'sub-menu--sub' : '', 'menu-depth-' . $display_depth];
        $class_names = implode(' ', $classes);

        // build html
        $output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n";
    }

    // add main/sub classes to li's and links
    function start_el(&$output, $data_object, $depth = 0, $args = null, $current_object_id = 0)
    {
        global $wp_query;

        // Restores the more descriptive, specific name for use within this method.
        $item = $data_object;

        $indent = $depth > 0 ? str_repeat("\t", $depth) : ''; // code indent

        // depth dependent classes
        $depth_classes = ['menu__item', $depth == 0 ? 'menu__item--main' : 'menu__sub-item', $depth >= 2 ? 'menu__sub-sub-item' : '', 'menu-item-depth-' . $depth];
        $depth_class_names = esc_attr(implode(' ', $depth_classes));

        // passed classes
        $classes = empty($item->classes) ? [] : (array) $item->classes;
        $class_names = esc_attr(implode(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item)));

        // build html
        $output .= $indent . '<li id="nav-menu-item-' . $item->ID . '" class="' . $depth_class_names . ' ' . $class_names . '">';

        // link attributes
        $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
        $attributes .= ' class="menu__link ' . ($depth > 0 ? 'menu__link--sub' : 'menu__link--main') . '"';

        $item_output = sprintf('%1$s<a%2$s>%3$s%4$s%5$s</a>%6$s', $args->before, $attributes, $args->link_before, apply_filters('the_title', $item->title, $item->ID), $args->link_after, $args->after);

        // build html
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

function my_nav_menu($args)
{
    $args = array_merge(
        [
            'container' => 'div',
            'container_class' => 'navigation',
            'menu_class' => 'menu',
            'echo' => false,
            'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
            'depth' => 10,
            'walker' => new Custom_Walker_Nav_Menu(),
        ],
        $args,
    );

    echo wp_nav_menu($args);
}

?>
