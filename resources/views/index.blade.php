@extends('layouts.app')

@section('content')

  <div class="row">
      <div class="col-md-9 ml-auto mr-auto mb-5">

          <!-- @include('partials.page-header') -->

          @if (!have_posts())
            <div class="alert alert-warning">
              {{ __('Sorry, no results were found.', 'sage') }}
            </div>
            {!! get_search_form(false) !!}
          @endif

          @while (have_posts()) @php(the_post())
            @include('partials.content-'.get_post_format())
          @endwhile

          <nav aria-label="Page navigation oscar" class="mb-5">
              @php(pagination())
          </nav>

      </div>
  </div>

@endsection
