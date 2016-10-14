jQuery(document).ready(function ($) {
    jQuery('.toggler').on('click', function () {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
        } else {
            jQuery(this).addClass('active');
        }
    });
});