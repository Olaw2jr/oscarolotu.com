<?php

namespace App;

use Sober\Controller\Controller;

class App extends Controller
{
    public function siteName()
    {
        return get_bloginfo('name');
    }

    public static function title()
    {
        if (is_home()) {
            if ($home = get_option('page_for_posts', true)) {
                return get_the_title($home);
            }
            return __('Latest Posts', 'sage');
        }
        if (is_archive()) {
            return get_the_archive_title();
        }
        if (is_search()) {
            return sprintf(__('Search Results for %s', 'sage'), get_search_query());
        }
        if (is_404()) {
            return __('Not Found', 'sage');
        }
        return get_the_title();
    }

    public static function logo() {
        $custom_logo_id = get_theme_mod( 'custom_logo' );
        $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
        return $image[0];
    }

    public static function getVideo() {
        $content = apply_filters( 'the_content', get_the_content() );
        $video = get_media_embedded_in_content( $content, ['video', 'object', 'embed', 'iframe']);
        // If not a single post, highlight the video file.
        if ( ! empty( $video ) ) :
            foreach ( $video as $video_html ) {
                return $video_html;
            }
        endif; 
    }
}
