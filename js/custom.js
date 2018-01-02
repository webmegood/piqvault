$(function() {
    $('body').on('vmousedown', 'div', function() {
        $(this).addClass('draggable').parents().on('vmousemove', function(e) {
            $('.draggable').offset({
                top: e.pageY - $('.draggable').outerHeight() / 2,
                left: e.pageX - $('.draggable').outerWidth() / 2
            }).on('vmouseup', function() {
                $(this).removeClass('draggable');
            });
        });
        e.preventDefault();
    }).on('vmouseup', function() {
        $('.draggable').removeClass('draggable');
    });
});
