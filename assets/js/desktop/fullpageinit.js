/**
 * fullpageinit.js
 * Initialises FullPage on desktop
 */

// Imports fullpage initialisation function
import $ from 'jquery';
import { FullPageInit } from '../common/fullpageinit';

$(document).ready(() => {
    FullPageInit(true);
});