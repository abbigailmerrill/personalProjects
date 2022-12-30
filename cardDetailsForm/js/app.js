// Fills the name section
function nameFill(){
    $('#name').keyup(function(){
        var value = $(this).val();

        $('.name .fontAdjust').text(value);
    }).keyup();
}

// Fills the number section
function numberFill(){
$('#cardNum').keyup(function(){
    
    var value = $(this).val();
        var newval = '';

        // write regex to remove any space
        value = value.replace(/\s/g, '');

        // iterate through each numver
        for(var i = 0; i < value.length; i++) {

            // add space if number of charcters = 4
            if(i%4 == 0 && i > 0) newval = newval.concat(' ');

            // concatenate the new value
            newval = newval.concat(value[i]);
        }
            $('.cardNumber').text(newval);

            $('#cardNum').on('keypress', function (e) {
                var maxlength = $(this).prop('maxlength');
                if (maxlength !== -1) {  
                    // Prevent execute statement for non-set maxlength prop inputs
                    var length = $(this).val().trim().length;

                    if (length + 1 > maxlength) 
                    e.preventDefault();
                }
            });
        }).keyup();
};

function monthFill(){
    $('#month').keyup(function(){
        var value = $(this).val();
        $('.monthText').text(value);
    }).keyup();

    // if(value >= 12){
    //     alert('Month value cannot exceed 12');
    //     $('#month').value = '';
    // }
}

$(document).ready(

nameFill(),
numberFill(),
monthFill()

)