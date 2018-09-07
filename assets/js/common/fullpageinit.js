/**
 * fullpageinit.js
 * FullPage init function for use on desktop / mobile js files
 */

// Imports jquery
import $ from 'jquery';

// Imports fullpage.js
import 'fullpage.js/dist/jquery.fullpage';
import 'fullpage.js/dist/jquery.fullpage.extensions.min';
import 'fullpage.js/dist/jquery.fullpage.css';

// The function that initialises FullPage
function FullPageInit(autoScrolling)
{
    // Initialise fullpage
    $("#fullpage").fullpage({
        autoScrolling:autoScrolling,
        scrollBar:true,
        scrollHorizontally: true,
        verticalCentered:false,
        scrollOverflow:false,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",

        // Upon leaving a section
        onLeave: function(origin, destination, direction) {
            // If we're at the front section, show the navbar. If not, hide it
            if (destination === 1)
                $(".navbar").addClass("override-hover");
            else
                $(".navbar").removeClass("override-hover");
        },

        // After loading a section (used just after page load)
        afterLoad: function(origin, destination, direction) {
            console.log(destination);
            // If page loaded on section that's not front, hide navbar
            if (destination !== 1)
                $(".navbar").removeClass("override-hover");
        }
    });

    $(".navbar-brand").click(function(){
        $.fn.fullpage.moveTo(1);
    });

    $("#navlink1, #herogetstarted").click(function(){
        $.fn.fullpage.moveTo(2);
    });

    $("#navlink2, #section2 .getstarted").click(function(){
        $.fn.fullpage.moveTo(3);
    });

    $("#navlink3").click(function(){
        $.fn.fullpage.moveTo(4);
    });

    $("#navlink4").click(function(){
        $.fn.fullpage.moveTo(5);
    });
};

// Exports full page init function
export { FullPageInit };