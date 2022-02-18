$(document).ready(function(){
    $('.bannerItems').slick({
        infinite: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/icon-previous.svg" class="iconSlide" alt=""/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/icon-next.svg" class="iconSlide" alt=""/></button>',
    });
    $('.bannerItemDesk').slick({
        infinite: false,
        arrows: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.thumbBanner',
    });
    $('.thumbBanner').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.bannerItemDesk',
        dots: false,
        focusOnSelect: true
    });
});