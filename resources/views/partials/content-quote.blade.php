<article @php( post_class('mb-5') )>
    <blockquote class="quote">
        @php( the_excerpt() )
        <footer class="blockquote-footer">{{ get_the_title() }}</footer>
    </blockquote>

    {{--  <div class="post-content">
        @include( 'partials/entry-meta' )
    </div>  --}}
</article><!--article-->