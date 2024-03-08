$(document).ready(function() {
    $('.read-more').click(function(e) {
        e.preventDefault();
        $(this).hide();
        $(this).siblings('.extended-text').show();
    });

    $('.toggle-text').click(function(e) {
        e.preventDefault();
        $(this).siblings('.extended-text').hide();
        $(this).closest('.card-body').find('.read-more').show();
    });
});