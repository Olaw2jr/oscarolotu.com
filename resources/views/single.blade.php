@extends('layouts.app')

@section('content')
  <div class="col-md-9 ml-auto mr-auto mb-5">
    @while(have_posts()) @php(the_post())
      @include('partials.content-single-'.get_post_format())
    @endwhile
  </div>
@endsection
