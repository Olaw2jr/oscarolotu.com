<article @php( post_class('mb-5') )>

    <div id="Indicators" class="carousel slide mb-4" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#Indicators" data-slide-to="0" class="active"></li>
            <li data-target="#Indicators" data-slide-to="1"></li>
            <li data-target="#Indicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <?php if ( get_post_gallery() ) :
                $gallery = get_post_gallery( get_the_ID(), false );
                
                /* Loop through all the image and output them one by one */
                foreach( $gallery['src'] as $src ) : ?>
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="<?php echo $src; ?>" alt="" class="img-fluid">
                    </div>
                    <?php
                endforeach;
            endif; ?>
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
        <a href="{{ get_permalink() }}"><h1 class="post-title">{{ get_the_title() }}</h1></a>
        
        @include( 'partials/entry-meta' )

        <div class="entry-meta">
          @php( the_excerpt() )

          <a href="{{ get_permalink() }}" class="btn btn-outline-secondary px-4">Read More</a>
        </div>
    </div>
</article><!--article-->