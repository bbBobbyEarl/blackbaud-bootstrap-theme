!function($) {

	$(function() {

		// Main purpose was driven by 'A' not being allowed in nav-bar and styled as btn.
		$(document).on('click', 'button[data-href]', function(e) {
			e.preventDefault();
			location.href = $(this).data('href');
		});

	})

}(jQuery);