import $ from 'jquery';

$(document).ready(function() {
  $('.hamburger').on('click', function(e) {
    console.log('start');
    e.preventDefault();
    $(this).toggleClass('active');
    $('#menu').toggleClass('menu-mobile__toggle');
  });
});
