$(function(){
    window.toggleChevron = function(button, parentName) {
        // change appearance of the font-awesome element by toggling class on the svg element
        $(button).find('svg').toggleClass('fa-chevron-down fa-chevron-left')

        // expand or contract the project panel by toggling the class on its summary section
        $('#'+parentName).find('#'+parentName+'_summary').toggleClass('projectpanel_body_content-hidden projectpanel_body_content')
    };
});