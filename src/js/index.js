import "./import/modules";
import "./import/components";
import $ from "jquery";
import "slick-carousel";

if ($(".slider").length) {
  $(".slider").slick({
    infinite: true,
    mobileFirst: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });
}
