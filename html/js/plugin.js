// 메인배너 슬라이드
var main_swiper = new Swiper("#pellito-main-banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnlnteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        keyboard: {
            enabled: true,
        },
});

// 샵 슬라이드
var main_shop_swiper = new Swiper("#pellito-shop-swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnlnteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        keyboard: {
            enabled: true,
        },
        
});