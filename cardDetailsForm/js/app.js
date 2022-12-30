// Fills the name section
function nameFill(){
    $('#name').keyup(function(){
        var alphaExp = /^[a-zA-Z]+$/;
        var value = $(this).val();

        if(/[0-9]/.test(value) == false){
            $('.name .fontAdjust').text(value);
        }
        else{
            alert('There cannot be numbers in your name');
        }
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

    $('#month').on('keypress', function (e) {
        var maxlength = $(this).prop('maxlength');
        if (maxlength !== -1) {  
            // Prevent execute statement for non-set maxlength prop inputs
            var length = $(this).val().trim().length;

            if (length + 1 > maxlength) 
            e.preventDefault();
        }
    });
}

function yearFill(){
    $('#year').keyup(function(){
        var value = $(this).val();
        $('.yearText').text(value);
    }).keyup();

    $('#year').on('keypress', function (e) {
        var maxlength = $(this).prop('maxlength');
        if (maxlength !== -1) {  
            // Prevent execute statement for non-set maxlength prop inputs
            var length = $(this).val().trim().length;

            if (length + 1 > maxlength) 
            e.preventDefault();
        }
    });
}

function cvcFill(){
    $('#cvc').keyup(function(){
        var value = $(this).val();
        $('.backContent.fontAdjust').text(value);
    }).keyup();

    $('#cvc').on('keypress', function (e) {
        var maxlength = $(this).prop('maxlength');
        if (maxlength !== -1) {  
            // Prevent execute statement for non-set maxlength prop inputs
            var length = $(this).val().trim().length;

            if (length + 1 > maxlength) 
            e.preventDefault();
        }
    });
}

var submitContent = `

` ;

var continueButton = $('.continueButton');

function submit(){
    $('button').click( function(){
        $('.formBox').css('display', 'none');
        $('button:not(.continueButton)').css('display', 'none');
        $('.continueContent').css('display', 'flex');
    });
}

function refresh (){
    $('.continueContent').click(function(){
        window.location.reload();
    })
}

$(document).ready(

nameFill(),
numberFill(),
monthFill(), 
yearFill(),
cvcFill(), 
submit(), 
refresh()

)