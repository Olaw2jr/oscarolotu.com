<article @php(post_class())>
    <div id="Indicators" class="carousel slide mb-4" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="@asset('images/entry2.jpg')" alt="" class="img-fluid">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="@asset('images/entry2.jpg')" alt="" class="img-fluid">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="@asset('images/entry2.jpg')" alt="" class="img-fluid">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
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
