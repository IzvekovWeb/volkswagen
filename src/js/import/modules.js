import "./slick.min.js";

import jquery from 'jquery';
window.$ = window.jQuery=jquery;


$('.top_slides').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  prevArrow: $('.arp_1'),
  nextArrow: $('.arn_1'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.models__slider').slick({
  dots: true,
  dotsClass: "my-dots",
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  autoplay: true,
  prevArrow: $('.arp_2'),
  nextArrow: $('.arn_2'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$('.sales__slider-wrapper').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  // variableWidth: true,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  autoplay: false,
  prevArrow: $('.arp_3'),
  nextArrow: $('.arn_3'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});