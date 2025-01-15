$(function() {
    $('#fullpage').fullpage({
        anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6', 'sec7', 'sec8'],
        scrollingSpeed: 1000,
        scrollOverflow: false,
        afterLoad: function(anchorLink, index) {
            // index가 객체일 경우 숫자로 변환
            if (typeof index === 'object') {
                index = index.index;
            }
            if (index === 7) {
                $('#hollys-header').css('background', '#fff');
            } else {
                $('#hollys-header').css('background', '');
            }
            triggerGSAPAnimation(index);
        }
    });
    $('.sec5 .right .m-info li img').hover(function() {
        var newSrc = $(this).attr('src').replace('/renewal/hollys/logo-m-s-', '/renewal/hollys/logo-m-b-');
        $('.sec5 .left img').attr('src', newSrc).removeClass('flipped').addClass('flipped');
    }, function() {
        $('.sec5 .left img').attr('src', '/img/renewal/hollys/logo-m-b-r.png').removeClass('flipped');
    });
    $('.sec5 .left img').on('animationend', function() {
        $(this).removeClass('flipped');
    });
});