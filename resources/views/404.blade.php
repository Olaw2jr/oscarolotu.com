@extends('layouts.app')

@section('content')
  {{--  @include('partials.page-header')  --}}

  @if (!have_posts())
    <div class="jumbotron text-center bg-white mb-5">
      @include('partials.page-header')
      <p class="lead mb-5">{{ __('Sorry, but the page you were trying to view does not exist.', 'sage') }}.</p>
      <p class="lead">
        <a class="btn btn-outline-secondary" href="<?= esc_url(home_url('/')); ?>" role="button">{{ __('Back Home', 'sage') }}</a>
      </p>
    </div>
  @endif
@endsection
