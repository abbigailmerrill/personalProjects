// Establishing that content will not load until document is ready
$(document).ready(
    function(){
    // Grabs the input that we will be grabbing value from
    $('input').keyup(function(){
        // sets value equal to the active inputs value
        var value = $(this).val();
        // Sets the inputs innerHTML to whatever is in the value input
        $('.name').text(value);
        // runs the function again every time the input keys up

        // next function here
        // get value of the input field
            var newval = '';

            // write regex to remove any space
            value = value.replace(/\s/g, '');

            // iterate through each numver
            for(var i = 0; i < value.length; i++) {

                // add space if modulus of 4 is 0
                if(i%4 == 0 && i > 0) newval = newval.concat(' ');

                // concatenate the new value
                newval = newval.concat(value[i]);
            }

                // update the final value in the html input
                console.log(newval);
            }).keyup();
    });