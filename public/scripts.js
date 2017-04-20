$("#face").click(function () {
    $(this).addClass('spin').one("animationend", function () {
        $(this).removeClass('spin');
    });
});

// Hide footer when section display
$(".navTitles").click(function () {
    $("#footer").fadeOut();
});

// Show footer when section empty
$(".menuIcon").click(function () {
    $("#footer").fadeIn();
});

$(document).ready(function () {

    // Open navBar
    $(".menuIcon").click(function () {
        $(".menuIcon").toggleClass("openMenu");
        $(".navTitles").toggleClass("openMenu");
    });

    // Close navBar
    $(".navTitles").click(function () {
        $(".menuIcon").removeClass("openMenu");
        $(".navTitles").removeClass("openMenu");
    });
});

// Close other sections when new is selected
$(".menuIcon").click(function () {
    $("#aboutContent").fadeOut();
    $("#workContent").fadeOut();
    $("#radicalContent").fadeOut();
});

// Display About
$("#about").click(function () {
    $("#aboutContent").fadeIn();
});

// Display Work
$("#work").click(function () {
    $("#workContent").fadeIn();
});

// Display Radical
$("#radical").click(function () {
    $("#radicalContent").fadeIn();
});