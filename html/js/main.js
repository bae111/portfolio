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

    

    // // 윈도우 스크롤 이벤트 리스너
    // window.addEventListener('scroll', function() {
    //     let currentScroll = window.scrollY;
        
    //     // 모든 섹션의 ID 가져오기
    //     const sections = document.querySelectorAll('section');
    //     const navLinks = document.querySelectorAll('.nav-link');

    //     // 각 섹션을 확인하여 스크롤 위치에 따라 active 클래스를 변경
    //     let sectionInView = false;  // 현재 보고 있는 섹션 플래그
    //     sections.forEach(function(section) {
    //         const sectionTop = section.offsetTop - 200; // 섹션의 상단 위치
    //         const sectionBottom = sectionTop + section.offsetHeight; // 섹션의 하단 위치

    //         // 현재 스크롤 위치가 섹션 범위 내에 있으면
    //         if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
    //             sectionInView = true;
    //             navLinks.forEach(function(link) {
    //                 link.classList.remove('active');
    //             });
    //             const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
    //             if (activeLink) {
    //                 activeLink.classList.add('active');
    //             }
    //         }
    //     });

    //     // 만약 어떤 섹션도 보이지 않으면 첫 번째 섹션에 active 클래스를 추가
    //     if (!sectionInView) {
    //         navLinks.forEach(function(link) {
    //             link.classList.remove('active');
    //         });
    //         const firstLink = document.querySelector('.nav-link[href="#header"]'); // 첫 번째 섹션
    //         if (firstLink) {
    //             firstLink.classList.add('active');
    //         }
    //     }

    //     $('.nav-link').on('click', function() {
    //         $('.nav-link').removeClass('active'); 
    //         $(this).addClass('active');           
    //     });
    // });

    // const sections = document.querySelectorAll('section');
    // const navLinks = document.querySelectorAll('.nav-link');

    // let currentScroll = window.scrollY;
    // let sectionInView = false;
    // sections.forEach(function(section) {
    //     const sectionTop = section.offsetTop - 50; 

    //     if (currentScroll >= sectionTop && currentScroll < (sectionTop + section.offsetHeight)) {
    //         sectionInView = true;
    //         navLinks.forEach(function(link) {
    //             link.classList.remove('active');
    //         });
    //         const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
    //         if (activeLink) {
    //             activeLink.classList.add('active');
    //         }
    //     }
    // });

    // if (!sectionInView) {
    //     navLinks.forEach(function(link) {
    //         link.classList.remove('active');
    //     });
    //     const firstLink = document.querySelector('.nav-link[href="#header"]');
    //     if (firstLink) {
    //         firstLink.classList.add('active');
    //     }
    // }



    // var $html = $("html, body");
    // var page = 1;  
    // var lastPage = $(".container_rol").length;
    
    // $(window).on("wheel", function(e) {
    //     if ($html.is(":animated")) return; // 애니메이션 진행 중일 때 추가 스크롤 방지

    //     // 휠 방향에 따라 페이지 증가/감소
    //     if (e.originalEvent.deltaY > 0) {
    //         if (page < lastPage) {
    //             page++;
    //         }
    //     } else if (e.originalEvent.deltaY < 0) {
    //         if (page > 1) {
    //             page--;
    //         }
    //     }

    //     // 목표 위치 계산
    //     var posTop = (page - 1) * $(window).height();
    //     $html.animate({ scrollTop: posTop }, 200); // 부드러운 스크롤 애니메이션
    //     e.preventDefault(); // 기본 스크롤 동작 방지
    // });
    
    $('.mix.card').off('click');

    $('.cover').hover(
        function() {
            $(this).closest('.portfolio-wrapper').find('.caption').css('bottom', '0');
        },
        function() {
            $(this).closest('.portfolio-wrapper').find('.caption').css('bottom', '-100px');
        }
    );
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
// 
// gsap.to("progress", {
//     value: 100,
//     ease: "none",
//     scrollTrigger: {scrub: 0.3}
// });

document.querySelector(".progress-bar-one").style.width = "0%";

window.addEventListener("scroll", function () {
    
    const scrollTop = document.querySelector("html").scrollTop;
    const scrollHeight = document.querySelector("html").scrollHeight;
    const clientHeight = document.querySelector("html").clientHeight;

    // console.log("scrollTop: ", scrollTop);
    // console.log("clientHeight: ", clientHeight);
    // console.log("scrollHeight: ", scrollHeight);

    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    document.querySelector(".progress-bar-one").style.width = progress + "%";
});