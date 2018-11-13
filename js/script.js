$(document).ready(function(){
    //Toggle menu
    $('#menu').on('click', function() {
        var $menu = $(this);
        var $navigation = $('#navigation');
        if($menu.hasClass('active')) {
            $navigation.addClass('slideOutRight');
            $navigation.removeClass('slideInRight');
            $menu.removeClass('active');
        }  else {
            $navigation.addClass('slideInRight');
            $navigation.removeClass('d-none slideOutRight');
            $menu.addClass('active');
        }
    });
    //Bootstrap scrollspy
    $('body').scrollspy({
        target: '#navigation',
        offset: 80
    });
    //Scroll animation
    $('.js-scrollspy-item').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).position().top-50
        }, 1000);
    });
    //Scroll to top
    $(window).on('scroll', function() {
        if (window.pageYOffset >= 120) {
            $('.js-scroll-to-top').show();
        } else {
            $('.js-scroll-to-top').hide();
        }
    });
});