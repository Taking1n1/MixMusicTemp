/**
 * fullpageinit.js
 * Initialises FullPage on mobile
 */

// Imports jquery
import $ from 'jquery';

// Imports fullpage.js
import 'fullpage.js/dist/jquery.fullpage';
import 'fullpage.js/dist/jquery.fullpage.extensions.min';
import 'fullpage.js/dist/jquery.fullpage.css';

// Imports fullpage initialisation function
import { FullPageInit } from '../common/fullpageinit';

$(document).ready(() => {
    FullPageInit(false);

    // Gets the text area handle
    let textAreaHandle = $("textarea");

    // When user focuses text area, disable fullpage fitting
    textAreaHandle.focus(function() {
        $.fn.fullpage.setFitToSection(false);
    });

    // When user unfocuses textarea, re-enable fullpage fitting
    textAreaHandle.focusout(function() {
        $.fn.fullpage.setFitToSection(true);
    });
});