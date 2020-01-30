import "./import/modules";
import "./import/components";
import $ from "jquery";
import "slick-carousel";

$(".slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
});