$(function () {
    var mouseX, mouseY;
    var traX, traY;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = 4 * mouseX / $(window).width() + 10; // 비율에 맞게 수정
        traY = 4 * mouseY / $(window).height() + 20; // 비율에 맞게 수정
        
        $(".hd-title").css({ "background-position": traX + "%" + traY + "%" });
        $(".hd-title span").css({ "background-position": traX + "%" + traY + "%" }); // 동일한 비율 적용
        $(".hd-line").css({ "background-position": traX + "%" + traY + "%" }); // 동일한 비율 적용
    });

    $('.fall').each(function(index) {
        $(this).css('--delay', `${index * 0.1}s`); // CSS 변수를 설정
        $(this).addClass('fall'); // CSS 클래스를 추가하여 애니메이션 적용
    });

    $('.mix.card').off('click');

    $('.cover').hover(
        function() {
            $(this).closest('.portfolio-wrapper').find('.caption').css('bottom', '0');
        },
        function() {
            $(this).closest('.portfolio-wrapper').find('.caption').css('bottom', '-100px');
        }
    );
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('.top-btn').addClass('show');
        }else{
            $('.top-btn').removeClass('show');
        }
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
gsap.set("#personal .project-detail", {
    opacity: 0,
    y: -200 
});

gsap.to("#personal .project-detail", {
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
gsap.set(".personal-box", {
    opacity: 0,
    scale: 0 
});

gsap.to(".personal-box", {
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
gsap.set(".a-wrap", {  
    x: 500 
});

gsap.to(".a-wrap", {  
    duration: 2.2,
    x: 0,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
        trigger: ".a-wrap",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

document.querySelector(".progress-bar-one").style.width = "0%";

window.addEventListener("scroll", function () {
    const scrollTop = document.querySelector("html").scrollTop;
    const scrollHeight = document.querySelector("html").scrollHeight;
    const clientHeight = document.querySelector("html").clientHeight;

    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    document.querySelector(".progress-bar-one").style.width = progress + "%";
});