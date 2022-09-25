var wholeName = $('#wholeName');
var nameValue = wholeName.value;
var submit = $('#submit');

submit.click(function(e){
    e.preventDefault();
    console.log("cows");
    console.log("The whole name on this card is " + nameValue);
});