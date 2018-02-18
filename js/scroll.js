$(function() {
    // fade everything out
    $('.projectpanel').css( {'opacity':'0'} );

    // fade in the first project panel
    $('.projectpanel:first').animate( {'opacity':'1'}, 750 );

    // fade in the rest on scroll
    $(window).scroll(function(){
        $('.projectpanel').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},750);                    
            }
        });
    });
})