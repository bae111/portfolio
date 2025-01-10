$(function() {
    $('#fullpage').fullpage({		      
        anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
        scrollingSpeed: 1000,
        scrollOverflow: false,
    });
    $('.sec5 .right .m-info li img').hover(function() {
        var newSrc = $(this).attr('src').replace('/renewal/hollys/logo-m-s-', '/renewal/hollys/logo-m-b-');
        $('.sec5 .left img').attr('src', newSrc);
    }, function() {
        $('.sec5 .left img').attr('src', '/img/renewal/hollys/logo-m-b-r.png');
    });
});
