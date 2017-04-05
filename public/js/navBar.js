$(document).ready(function() {
    $(".menuIcon").click(function() {
        $(this).toggleClass("openMenu");
        $(".mobileNavTitles").toggleClass("openMenu");
    });
});
