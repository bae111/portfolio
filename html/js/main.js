$(function () {
    var mouseX, mouseY;
    var ww = $(window).width();
    var wh = $(window).height();
    var traX, traY;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = 4 * mouseX / 350 + 10;
        traY = 4 * mouseY / 350 + 20;
        $(".hd-title ").css({ "background-position": traX + "%" + traY + "%" });
        $(".hd-title span").css({ "background-position": traY + "%" + traX + "%" });
    });

    $('.fall').each(function(index) {
        $(this).css('--delay', `${index * 0.1}s`); // CSS 변수를 설정
        $(this).addClass('fall'); // CSS 클래스를 추가하여 애니메이션 적용
    });
});


gsap.registerPlugin(ScrollTrigger);

// hd-title 애니메이션
gsap.set(".hd-title", {
    y: -100,
    opacity: 0,
});

gsap.to(".hd-title", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3, // 각 요소마다 0.3초 간격으로 애니메이션
    scrollTrigger: {
        trigger: "#header",
        start: "top center",
        end: "center",
        markers: false 
    }
});

// Company Section - Title
gsap.set("#personal .title, .detail", {
    opacity: 0,
    y: -200 
});

gsap.to("#personal .title, .detail", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#personal",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

// Company section - Image
gsap.set(".hard-box", {
    opacity: 0,
    scale: 0 
});

gsap.to(".hard-box", {
    duration: 1.6,
    delay: 0.1,
    opacity: 1,
    scale: 1,
    transformOrigin: "top right",
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#personal",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

// Project section - content section
gsap.set("#design", {
    x: -200,
    y: -200,
    opacity: 0 
});

gsap.to("#design", {
    duration: 1.6,
    x: 0,
    y: 0,
    opacity: 1,
    delay: 0.2,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
        trigger: "#design",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

// Project section - Right
// gsap.set("#about", {  
//     x: 500 
// });

// gsap.to("#about", {  
//     duration: 2.2,
//     x: 0,
//     ease: "power2.inOut",
//     yoyo: true,
//     scrollTrigger: {
//         trigger: "#about",
//         start: "top center",
//         end: "center",
//         markers: false 
//     } 
// });

gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: {scrub: 0.3}
});

