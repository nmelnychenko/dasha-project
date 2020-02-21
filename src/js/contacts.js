import $ from 'jquery';

const modalOuter = $(".thank-you-modal__underlay");

modalOuter.on("click", function(e) {
  $(".thank-you-modal").removeClass("is-active");
})