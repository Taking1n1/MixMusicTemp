/**
 * loadingsplash.js
 * Fades out the splash screen upon load
 */

// jquery
import $ from 'jquery';

// When document is ready
$(document).ready(function () {
    $("#loading-splash").fadeOut();
});