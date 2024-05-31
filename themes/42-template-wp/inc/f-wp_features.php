<?php

/*
  Adds the ability to upload a logo image in the theme settings in the admin.
  Appearance -> Customize -> Site Identity -> Logo
*/
add_theme_support('custom-logo', ['flex-width' => true, 'flex-height' => true, 'header-text' => 'Logo']);

/*
  Adds SVG to the list of files allowed for uploading
*/
// Allow SVG
add_filter(
    'wp_check_filetype_and_ext',
    function ($data, $file, $filename, $mimes) {
        global $wp_version;
        if ($wp_version !== '4.7.1') {
            return $data;
        }

        $filetype = wp_check_filetype($filename, $mimes);

        return [
            'ext' => $filetype['ext'],
            'type' => $filetype['type'],
            'proper_filename' => $data['proper_filename'],
        ];
    },
    10,
    4,
);

function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function fix_svg()
{
    echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action('admin_head', 'fix_svg');

?>
