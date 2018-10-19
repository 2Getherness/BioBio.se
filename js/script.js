$(document).ready(function(){
    $('.menu').on("click", function(){
      $('.hiddenNav').toggleClass('active');
    });
  });
  
  $(document).ready(function(){
    $('.hamburger').on("click", function(){
      $('button').toggleClass('is-active');
    });
  });