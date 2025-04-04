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

    $('.more').on('click', function () {
        $(this).toggleClass('toggle');
    });

    $('.nav-link').on('click', function () {
        $('.more').removeClass('toggle');
    });
});

document.querySelector(".progress-bar-one").style.width = "0%";

window.addEventListener("scroll", function () {
    const scrollTop = document.querySelector("html").scrollTop;
    const scrollHeight = document.querySelector("html").scrollHeight;
    const clientHeight = document.querySelector("html").clientHeight;

    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    document.querySelector(".progress-bar-one").style.width = progress + "%";
});