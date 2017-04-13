$("#face").click(function () {
  $(this).addClass('spin').one("animationend", function () {
    $(this).removeClass('spin');
  });
});

$(document).ready(function () {
  $(".menuIcon").click(function () {
    $(".menuIcon").toggleClass("openMenu");
    $(".mobileNavTitles").toggleClass("openMenu");
  });
});