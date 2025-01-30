// 메인배너 슬라이드
var main_swiper = new Swiper("#pellito-main-banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnlnteraction: false,
    },
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
    autoplay: {
        delay: 3000,
        disableOnlnteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        keyboard: {
            enabled: true,
        },
        
});

var hollys_season_swiper = new Swiper(".hollys-season-swiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnlnteraction: false,
    },
});

var hollys_tab_swiper = new Swiper(".hollys-tab-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnlnteraction: false,
    },
});

$(".hollys-swiper").each(function() {
    var swp = this.swiper;
    $(this).hover(function() {
        swp.autoplay.stop();
    }, function() {
        swp.autoplay.start();
    });
});

var hanyul_main_banner_swiper = new Swiper(".hanyul-main-banner-swiper", {
    // autoplay: {
    //     delay: 3000
    // },
    loop: true
});

var hanyul_best_swiper = new Swiper(".hanyul-best-swiper", {
    // autoplay: {
    //     delay: 3000
    // },
    slidesPerView: 1.5,
    loop: true,
    centeredSlides: true,
});

var hanyul_info_swiper = new Swiper(".hanyul-info-swiper", {
    // autoplay: {
    //     delay: 3000
    // },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

var hanyul_new_swiper = new Swiper(".hanyul-new-swiper", {
    slidesPerView: "auto",
    loop: false,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});

var hanyul_sns_swiper = new Swiper(".hanyul-sns-i-swiper", {
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});