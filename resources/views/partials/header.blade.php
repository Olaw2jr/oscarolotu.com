<header class="header mb-5">
    <div class="container">  
        <div class="row">   
            <div class="col-md-12">
            <?php $custom_logo_id = get_theme_mod( 'custom_logo' );
            $image = wp_get_attachment_image_src( $custom_logo_id , 'full' ); ?>
            <img class="profile-image img-fluid float-left rounded-circle img-thumbnail " src="{{ $image[0]}}" alt="{{ get_bloginfo('name', 'display') }}">
            <div class="profile-content pull-left">
                <h1 class="name"><a class="brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a></h1>
                <h2 class="desc">{{ get_bloginfo('description', 'display') }}</h2>   
                <ul class="social list-inline">
                    <li class="list-inline-item"><a href="https://twitter.com/olaw2jr" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="https://instagram.com/olaw2jr" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="https://github.com/olaw2jr" target="_blank"><i class="fa fa-github-alt" aria-hidden="true"></i></a></li>                         
                </ul> 
            </div><!--//profile-->
            <a class="btn btn-outline-secondary float-right" href="https://minshock.com/contact" target="_blank"><i class="fa fa-paper-plane-o" aria-hidden="true"></i> Hire Me</a>
            </div>
        </div>             
    </div><!--//container-->
</header>
