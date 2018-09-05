/**
 * hide.js
 * Allows descriptions to be displayed by clicking / tapping on blocks
 */

import $ from 'jquery';

$(document).ready(function(){
    $("#section3 .block, #section4 .block").click(function() {

        function showTag(handle) {
            handle.removeClass("hide");
            handle.addClass("show");
        }
        function hideTag(handle) {
            handle.removeClass("show");
            handle.addClass("hide");
        }

        // Stores clicked ID
        let clickedID = $(this).attr("id");

        // Goes through each tag already showed
        $(".show").each(function (index) {
            // If this isn't the tag we clicked on, hide it
            if ($(this).attr("id") !== clickedID) {
                hideTag($(this));
            }
        });

        // If it already has hide, show it. If it has show, hide it
        if ($(this).hasClass("hide"))
            showTag($(this));
        else
            hideTag($(this));
    });
});