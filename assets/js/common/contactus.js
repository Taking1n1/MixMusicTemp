/**
 * contactus.js
 * Handles contact us logic
 */

// Imports jquery
import $ from 'jquery';

// The callback function run when captcha challenge is complete
let onSubmit = function(token) {

    // Locks form
    $("#contactusbutton").html("SUBMITTING");
    $("#contactusbutton").attr('disabled', true);
    $("#contactusbutton").removeClass("mixmusicbutton");
    $("#contactusbutton").addClass("mixmusicbuttondisable");
    $("input").prop('disabled', true);
    $("textarea").prop('disabled', true);

    // Posts request to send email
    $.post("/contactus", {
        "g-recaptcha-response": token,
        name: $("#contactusform *[name=name]").val(),
        email: $("#contactusform *[name=email]").val(),
        message: $("#contactusform *[name=message]").val()
    }, function (data) {
        if (data === "success")  {
            grecaptcha.reset();
            $("#contactusbutton").html("SUBMITTED!");
        } else
            $("#contactusbutton").html("ERROR! " + data["error"]);
    });
};

// When the submit button is clicked
$("#contactusbutton").click(function(){

    // If this button isn't disabled
    if (!$(this).prop("disabled"))
    {
        // Renders captcha
        grecaptcha.render('contactusbutton', {
            'sitekey' : '6LcRk24UAAAAAGqp3zkam0qNpBVnReB6IOJH12gK',
            'callback' : onSubmit
        });

        // Executes captcha
        grecaptcha.execute();

        // Submits the form
        $("#contactus").submit();
    }
});