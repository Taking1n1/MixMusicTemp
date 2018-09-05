/**
 * scrollrevealinit.js
 * Enables ScrollReveal on mobile
 */

// Gets jquery
import $ from 'jquery';

// Gets scrollreveal
import ScrollReveal from 'scrollreveal/dist/scrollreveal';

/* -----------
    Functions
   ----------- */
function getRandomNo(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

$(document).ready(function ()
{
    // General setting
    window.sr = ScrollReveal({ reset: false });

    /* -----------
        Section 1
       ----------- */

    // Heading
    sr.reveal('#section1 h1', {duration: 1500});

    // Button
    sr.reveal('#section1 .mixmusicbutton', {delay: 1000, duration: 1500});

    /* -----------
        Section 2
       ----------- */

    // Heading
    sr.reveal('#section2 h1', {
        distance: '100%',
        origin: 'top',
        duration: 1500
    });

    // Paragraph
    sr.reveal('#section2 .description', {
        distance: '100%',
        origin: 'top',
        duration: 1500,
        delay: 500
    });

    // Get started
    sr.reveal('#section2 .getstarted', {
        distance: '100%',
        origin: 'bottom',
        duration: 1500,
        delay: 700
    });

    /* -----------
        Section 3
       ----------- */

    // Heading
    sr.reveal('#section3 h1', {
        distance: '100%',
        origin: 'top',
        duration: 1500
    });

    // Blocks
    sr.reveal('#s3-block1', {
        distance: '100%',
        origin: 'left',
        duration: 1500,
        delay: 500,
        rotate: {
            z: -100
        }
    });

    sr.reveal('#s3-block2', {
        distance: '100%',
        origin: 'left',
        duration: 1500,
        delay: 700,
        rotate: {
            z: -100
        }
    });

    sr.reveal('#s3-block3', {
        distance: '100%',
        origin: 'left',
        duration: 1500,
        delay: 900,
        rotate: {
            z: -100
        }
    });

    /* -----------
        Section 4
       ----------- */

    // Blocks
    sr.reveal('#s4-block1', {
        distance: '100%',
        origin: 'left',
        duration: 1500,
        rotate: {
            z: -100
        }
    });

    sr.reveal('#s4-block2', {
        distance: '100%',
        origin: 'left',
        delay:200,
        duration: 1500,
        rotate: {
            z: -100
        }
    });

    sr.reveal('#s4-block3', {
        distance: '100%',
        origin: 'left',
        delay:400,
        duration: 1500,
        rotate: {
            z: -100
        }
    });

    /* -----------
        Contact us
       ----------- */

    // Header
    sr.reveal('#contactus h1', {
        distance: '100%',
        origin: 'top',
        duration: 1500
    });

    // Paragraph
    sr.reveal('#contactus p', {
        distance: '100%',
        origin: 'top',
        delay:400,
        duration: 1500
    });
});