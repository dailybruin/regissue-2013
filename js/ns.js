$(window).load(function(){
    $('#slider').twentytwenty({default_offset_pct: 0.17});
});

$(document).ready(function(){
    $('.map-descriptor, .map-building').hide();
    $('.map-highlight').hover(
        function(){
            $(this).css('z-index', 201).find('.map-building').show();
            $(this).find('.map-descriptor').fadeIn('fast');
        },
        function(){
            $(this).css('z-index', 200).find('.map-building').hide();
            $(this).find('.map-descriptor').fadeOut('fast');
    });
});