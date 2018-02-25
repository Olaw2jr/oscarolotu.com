<article @php( post_class() )>
    <blockquote class="quote">
        <i class="fas fa-quote-left fa-3x fa-pull-left fa-border"></i>
        @php( the_excerpt() )
        <footer class="blockquote-footer">{{ get_the_title() }}</footer>
    </blockquote>
</article><!--article-->