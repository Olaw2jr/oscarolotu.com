<article @php( post_class() )>
    <div class="post-content">
        <a href="{{ get_permalink() }}"><h1 class="entry-title">{{ get_the_title() }}</h1></a>
        
        @include( 'partials/entry-meta' )

        <div class="entry-meta">
          @php( the_excerpt() )

          <a href="{{ get_permalink() }}" class="btn btn-outline-secondary px-4">Read More</a>
        </div>
    </div>
</article><!--article-->

