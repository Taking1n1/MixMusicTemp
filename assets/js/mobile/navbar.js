/**
 * navbar.js
 * Logic concerning the navbar (because bootstrap isn't perfect)
 */

// Imports jquery
import $ from 'jquery';

// Imports bootstrap for 'collapse' method
import 'bootstrap/js/dist/collapse';

// When document is clicked
$(document).click(function(e) {
    // If not clicking on the whole top navbar
    if (!$(e.target).is(".navbar, .navbar-toggler, .navbar-toggler-icon")) {
        $(".navbar-collapse").collapse('hide'); // Hide links
        $(".navbar").removeClass("show"); // Hide navbar
    }
});

// When clicking on the toggler, show the links
$(".navbar-toggler").click(function(){
    $(".navbar-collapse").collapse( $(".navbar-collapse").hasClass("show") ? 'hide' : 'show' );
});

// When clicking on the navbar, either show or hide
$(".navbar, .navbar-toggler, .navbar-toggler-icon").click(function(){
    $(".navbar").addClass("show");
});