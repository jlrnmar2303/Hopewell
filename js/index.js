//this is a custom JS //

//when the "join-now" button is clicked the form will hide and the hidden message of "THANK YOU!"
//will appear

$('#button').click(function() {
    $('#form').toggle();
    $('#thankyou').show();
});
