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

// Script for dropdown header
const dropdownTrigger = $(".header-dropdown-control");
const dropdownMenu = $(".header__nav");
const submenuTrigger = $(".header-navigation__item--submenu");
const firstSubmenu = $(".first-submenu");
const firstMenuBackTrigger = $(".first-submenu__back-trigger");
const secondSubmenuTrigger = $(".first-submenu-list__item--submenu");
const secondSubmenu = $(".second-submenu");
const secondSubmenuBackTrigger = $(".second-submenu__back-trigger");

document.addEventListener("click", function(e) {
  if (!dropdownMenu[0].contains(e.target) && !dropdownTrigger.contains(e.target)) {
    dropdownTrigger.removeClass("is-open");
    dropdownMenu.removeClass("is-open");
    firstSubmenu.removeClass("is-open");
  }
})

if (dropdownTrigger.length) {
  dropdownTrigger.addEventListener("click", function() {
    dropdownTrigger.toggleClass("is-open");
    dropdownMenu.toggleClass("is-open");
  });
}

if (submenuTrigger.length) {
  submenuTrigger.addEventListener("click", function(e) {
    if (!firstSubmenu.contains(e.target)) {
      submenuTrigger.toggleClass("is-open");
      firstSubmenu.toggleClass("is-open");
    }
  });
}

if (firstMenuBackTrigger.length) {
  firstMenuBackTrigger.addEventListener("click", function(e) {
    e.stopPropagation();
    $(this).parent.removeClass("is-open");
  });
}

if (secondSubmenuTrigger.length) {
  secondSubmenuTrigger.addEventListener("click", function() {
    $(this).find(secondSubmenu).addClass("is-open");
  });
}

if (secondSubmenuBackTrigger.length) {
  secondSubmenuBackTrigger.addEventListener("click", function(e) {
    e.stopPropagation();
    $(this).parent.removeClass("is-open");
  });
}
