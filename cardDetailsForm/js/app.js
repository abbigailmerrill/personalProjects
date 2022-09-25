var name = jQuery('#name').val();
var submit = jQuery('#submit');

submit.click(function(){
    console.log(name);
});

// console.log is not registering the name on click