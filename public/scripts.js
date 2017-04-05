// ---------SPIN-----------------

// HTML
// <div id="target"></div>

// CSS
//  #target {
//   width: 100px;
//   height: 100px;
//   background-color: blue;
// }
//
// .spin {
//   animation: spin .75s linear;
// }
//
// @keyframes spin {
//   0% {
//     transform:rotate(0deg);
//   }
//   50% {
//     width: 150px;
//     height: 150px;
//   }
//   100% {
//     transform:rotate(360deg);
//     width: 100px;
//     height:100px;
//   }
// }

// JS
// $("#target").click(function() {
//   	$(this).addClass('spin').one("animationend", function() {
//     	$(this).removeClass('spin');
//     });
//   });

$(document).ready(function () {
    $(".menuIcon").click(function () {
        $(this).toggleClass("openMenu");
        $(".mobileNavTitles").toggleClass("openMenu");
    });
});