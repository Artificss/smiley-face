jQuery(document).ready(function ($) {
    $('.has-option').click(function () {
        if($(this).data('for')){
            var For = $(this).data('for');

            $('#'+For).toggleClass('on');
        }
    });
});