<footer class="footer footer-light pt-5 pb-3">
  <div class="container">
      
      @php(dynamic_sidebar('sidebar-footer'))

      <div class="col-lg-7  mx-auto">
          <h3 class="text-center">Subscribe to my newsletter</h3>
          <form id="widget-subscribe-form" action="" role="form" method="post" class="mb-0">
              <div class="input-group ">
                  <input type="email" name="widget-subscribe-form-email" class="form-control required" placeholder="Enter your Email">
                  <span class="input-group-btn">
                      <button class="btn btn-secondary px-5" type="submit">Subscribe</button>
                  </span>
              </div>
              <small id="emailHelp" class="form-text text-muted text-center">Only an Email a month, plus your email won't be shared with anyone else (Promise that 😉).</small>
          </form>
      </div>

      <div class="col-lg-7  mx-auto text-center mt-4">
        <p>
          <a href="<?= esc_url(__('https://wordpress.org/', 'sage')); ?>"><?php printf(__('Proudly powered by %s', 'sage'), 'WordPress'); ?></a>
        </p>
      </div>
  </div>
</footer>
