jQuery(document).ready(function ($) {
    jQuery('.toggler').on('click', function () {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
        } else {
            jQuery(this).addClass('active');
        }
    });
    $("#trip").focusout(function () {
        if (!$(this).val()) {
            $('.largeInput a').css("display", 'none')

        } else {
            $('.largeInput a').css("display", 'block')
        }
    });

});