$(function(){
    $('.nav-btn').on('click', function(){
        $(this).toggleClass('slideOn');
        $('#hanyul-header .right').toggleClass('slideOn');
        $('#hanyul-header').toggleClass('slideOn');
    });

    $(window).on('scroll', function() {
        var scrollCollect = 0;
        var pos = $(window).scrollTop();
        
        if (pos > 0) {
            $('.top-btn').addClass('show');
        } else {
            $('.top-btn').removeClass('show');
        }
    
        if ($(".hanyul-new").length > 0) {
            if (pos >= $(".hanyul-new").offset().top - scrollCollect) {
                $(".hanyul-new").addClass("scroll");
            }
        }
    });

    // 첫 인터렉션 이전에 정지
    var newOffSlide = $(".hanyul-new .hanyul-new-swiper .swiper-slide");
    var prevSlideWd = 0;
    for (var n = 1; n < $(newOffSlide).length; n++) {
        prevSlideWd += $(newOffSlide)
            .eq(n - 1)
            .width();
    
        $(newOffSlide).eq(n).css("transform", `translateX(-${prevSlideWd}px)`);
    }
    
    /* == 슬라이더 시작 인터렉션 == */
    function initNewSwiper() {
        if ($(".hanyul-new").hasClass("on")) return;
        $(".hanyul-new").addClass("init");
        // 인터렉션 1. 슬라이드 스프레드
        setTimeout(function () {
            $(".hanyul-new .hanyul-new-swiper .swiper-slide").css({
                "transform": "translateX(0px)",
                "opacity": 1
            });
        }, 100);
    
        // 인터렉션 2. 슬라이드 이미지(.item-thumbnail-img) 마스킹
        setTimeout(function () {
            $(".hanyul-new").addClass("on");
        }, 2000);

      // autoplay 재생
        setTimeout(function () {
            if (typeof hanyul_new_swiper !== 'undefined') {
                hanyul_new_swiper.update();
                hanyul_new_swiper.autoplay.start();
            }
        }, 3000);
    }

    // aos일시 swiper 작동
    if ($(".hanyul-new").hasClass("scroll")) {
        initNewSwiper();
    }
    $(window).on("scroll", function () {
        if ($(".hanyul-new").hasClass("scroll")) {
            if (!$(".hanyul-new").hasClass("init")) {
            initNewSwiper();
        }
    }
    });
    $(window).on("resize", function () {
        if ($(".hanyul-new").hasClass("scroll")) {
            if (!$(".hanyul-new").hasClass("init")) {
                initNewSwiper();
            }
        }
    });

});