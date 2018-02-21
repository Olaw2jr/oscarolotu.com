<ul class="post-meta list-inline">
    <!-- <li class="list-inline-item">
        <i class="fa fa-user-circle-o"></i> {{ get_the_author() }}
    </li> -->
    <li class="list-inline-item">
        <i class="fa fa-calendar-o"></i> <time class="updated" datetime="{{ get_post_time('c', true) }}">{{ get_the_date('F Y') }}</time>
    </li>
    <li class="list-inline-item">
        <i class="fa fa-tags"></i> <?php foreach((get_the_category()) as $category) { echo $category->cat_name . ' '; } ?>
    </li>
</ul>