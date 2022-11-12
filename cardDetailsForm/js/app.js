// Establishing that content will not load until document is ready
$(document).ready(function(){
    // Graves the input that we will be grabbing value from
    $('input').keyup(function(){
        // sets value equal to the active inputs value
        var value = $(this).val();
        // Sets the inputs innerHTML to whatever is in the value input
        $('.name').text(value);
        // runs the function again every time the input keys up
    }).keyup();
});