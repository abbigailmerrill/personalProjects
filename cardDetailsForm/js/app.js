window.addEventListener('resize', () => {
    if($(window).width() > 745){
        $(".one").removeClass('top');
        $(".two").removeClass('bottom');
        $(".one").addClass('left');
        $(".two").addClass('right');
        console.log('The window is bigger than 525')
} else if ($(window).width() < 745){
        $(".one").removeClass('left');
        $(".two").removeClass('right');
        $(".one").addClass('top');
        $(".two").addClass('bottom');
} 
});

$(document).ready(function(){
    
});