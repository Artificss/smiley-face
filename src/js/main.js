jQuery(document).ready(function ($) {
    $('.has-option').click(function () {
        if($(this).data('for')){
            var For = $(this).data('for');

            $('#'+For).toggleClass('on');
        }
    });

    $('input[type=checkbox].option').change(function () {
        var target = $(this).data('target');
        var val = $(this).data('value');

        $(target).toggleClass(val);
    });
});