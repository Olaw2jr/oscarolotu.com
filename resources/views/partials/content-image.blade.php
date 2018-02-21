<article @php( post_class('mb-5') )>
    <a class="post-thumb mb-4" href="{{ get_permalink() }}">
        @php( the_post_thumbnail('oscar-featured-image', ['class' => 'img-fluid img-thumbnail', 'alt' => get_the_title()]) )
    </a><!--thumb-->
    <div class="post-content">
        <a href="{{ get_permalink() }}"><h1 class="post-title">{{ get_the_title() }}</h1></a>
        
        @include( 'partials/entry-meta' )

        <div class="entry-meta">
          @php( the_excerpt() )

          <a href="{{ get_permalink() }}" class="btn btn-outline-secondary px-4">Read More</a>
        </div>
    </div>
</article><!--article-->

