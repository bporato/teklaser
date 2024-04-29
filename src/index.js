import { burgerMenu } from "./modules/burger-menu.js";
import { laserGallery } from "./modules/laser-gallery.js";

$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    appendArrows: $('.slick-slider-nav'),
    appendDots: $('.slick-slider-dots'),
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
  });
});

burgerMenu()
laserGallery()