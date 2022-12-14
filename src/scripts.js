$(document).ready(function () {
    $(".fancybox").attr('rel', 'gallery').fancybox();
    $('.slider').slick({
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        dots: false,
        draggable: true,
        dot:true,
        dots:true,
        dotClass: 'slick-dots',
    });
    $('.slick-dots li button').html("");
    var clicks = 0;
    $('.content-title').click(function (){
        clicks += 1;
        const title = $('.content-title').next();
        title.removeClass('active');
        const content = $(this).next();
        if(clicks % 2 != 0){
            content.addClass('active');
        }else{
            content.removeClass('active');

        }

    })
    var clickNav = 0;
    $('.heading-box__bars').click(function (){
        clickNav += 1;
        if(clickNav % 2 != 0){
            $('.heading-box__menu').addClass('active');
            $('.heading-box__bars').addClass('bars-active');
            $('.heading-box__bars a').html('<i class="fas fa-times"></i>');
            $('.heading-box__menu').show();

        }else{
            $('.heading-box__menu').removeClass('active');
            $('.heading-box__bars').removeClass('bars-active');
            $('.heading-box__bars a').html('<i class="fas fa-bars"></i>');
            $('.heading-box__menu').hide();
        }

    })
    $('.top-sellers').click(function (){
        $('.top-sellers').addClass('active');
        $('.featured').removeClass('active');
        $('.most-reviews').removeClass('active');

        $('.content-top-sellers').addClass('active');
        $('.content-featured').removeClass('active');
        $('.content-most-reviews').removeClass('active');
    })
    $('.featured').click(function (){
        $('.top-sellers').removeClass('active');
        $('.featured').addClass('active');
        $('.most-reviews').removeClass('active');

        $('.content-top-sellers').removeClass('active');
        $('.content-featured').addClass('active');
        $('.content-most-reviews').removeClass('active');
    })
    $('.most-reviews').click(function (){
        $('.top-sellers').removeClass('active');
        $('.featured').removeClass('active');
        $('.most-reviews').addClass('active');

        $('.content-top-sellers').removeClass('active');
        $('.content-featured').removeClass('active');
        $('.content-most-reviews').addClass('active');
    })
});;