<article @php(post_class())>
    <div class="embed-responsive mb-3">
        @php( the_post_thumbnail('oscar-featured-image', ['alt' => get_the_title()]) )
    </div>
    <div class="post-content">
        <h1 class="entry-title" >{{ get_the_title() }}</h1>

        @include('partials/entry-meta')

        <div class="entry-content">
          @php(the_content())
        </div>

        <footer>
          {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
        </footer>
        @php(comments_template('/partials/comments.blade.php'))

    </div>
</article><!-- post article-->
