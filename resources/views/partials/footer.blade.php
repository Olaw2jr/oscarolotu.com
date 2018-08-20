<footer class="footer footer-light pt-5 pb-3 text-center">
    <div class="container">

        @php(dynamic_sidebar('sidebar-footer'))

        <div class="col-lg-7  mx-auto">
                <h3 class="">Subscribe to my newsletter</h3>

                <form class="form-inline row">
                    <div class="form-group mr-2 col-md-8">
                        <input type="text" class="form-control col-md-12" placeholder="Enter your Email">
                    </div>
                    <button type="submit" class="btn btn-secondary px-5">Subscribe</button>
                    <small class="form-text text-muted mx-auto">Only an Email a month, plus your email wont be shared with anyone else (Promise that 😉).</small>
                </form>
        </div>

        <div class="col-lg-7  mx-auto mt-4">
            <p class="mb-0">
                <a href="<?= esc_url(__('https://wordpress.org/', 'sage')); ?>"><?php printf(__('Proudly powered by %s', 'sage'), 'WordPress'); ?></a>
            </p>
        </div>
    </div>
</footer>
