import $ from 'jquery';

$(".js-modal-trigger").on("click", function() {
    const href = $(this).attr("data-href");

    $(".js-modal").addClass("is-visible");
    $(".js-order-link").attr("href", href);
});

$(".js-modal-close").on("click", function() {
    $(".js-modal").removeClass("is-visible");
})