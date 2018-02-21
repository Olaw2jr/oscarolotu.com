<article @php( post_class('mb-5') )>
    
    <?php $content = apply_filters( 'the_content', get_the_content() );
    $video = get_media_embedded_in_content( $content, ['video', 'object', 'embed', 'iframe']);
    // If not a single post, highlight the video file.
    if ( ! empty( $video ) ) :
        foreach ( $video as $video_html ) {
            echo '<div class="embed-responsive mb-4">';
                echo $video_html;
            echo '</div>';
        }
    endif; ?>
    
    <div class="post-content">
        <a href="{{ get_permalink() }}"><h1 class="post-title">{{ get_the_title() }}</h1></a>
        
        @include( 'partials/entry-meta' )

        <div class="entry-meta">
          @php( the_excerpt() )

          <a href="{{ get_permalink() }}" class="btn btn-outline-secondary px-4">Read More</a>
        </div>
    </div>
</article><!--article-->