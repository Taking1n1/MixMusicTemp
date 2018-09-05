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
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
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