$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("active");
      $(".nav").toggleClass("active");
      $("body").toggleClass("active");
    });
  });
  