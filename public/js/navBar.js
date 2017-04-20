$(document).ready(function() {

    // Open navBar
    $(".menuIcon").click(function() {
        $(".menuIcon").toggleClass("openMenu");
        $(".navTitles").toggleClass("openMenu");
    });

    // Close navBar
    $(".navTitles").click(function() {
        $(".menuIcon").removeClass("openMenu");
        $(".navTitles").removeClass("openMenu");
    });

});
