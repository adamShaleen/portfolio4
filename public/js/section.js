// Close other sections when new is selected
$(".menuIcon").click(function() {
    $("#aboutContent").fadeOut();
    $("#workContent").fadeOut();
    $("#radicalContent").fadeOut();
});

// Display About
$("#about").click(function() {
    $("#aboutContent").fadeIn();
});

// Display Work
$("#work").click(function() {
    $("#workContent").fadeIn();
});

// Display Radical
$("#radical").click(function() {
    $("#radicalContent").fadeIn();
});
