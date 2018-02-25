<article @php( post_class() )>
    <div class="post-content">
        <a href="{{ get_permalink() }}"><h1 class="entry-title">{{ get_the_title() }}</h1></a>
        
        @include( 'partials/entry-meta' )

        <div class="entry-meta">
            @php(the_content())
            
            {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}        
        </div>
    </div>
</article><!--article-->
