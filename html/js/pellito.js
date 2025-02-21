$(function(){
    // 스크롤 시 헤더 고정
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#pellito-header').addClass('fix');
            $('#pellito-m-header').addClass('fix');
            $('.top-btn').addClass('show');
        }else{
            $('#pellito-header').removeClass('fix');
            $('#pellito-m-header').removeClass('fix');
            $('.top-btn').removeClass('show');
        }
    });

    $('.nav-btn').on('click', function(){
        $(this).toggleClass('slideOn');
    });

    // 콜렉션 호버 텍스트, 이미지 교체
    const texts = [
        {
            title: "<em>FABRIC<br>SOFA</em>",
            sub: "패브릭 소파는 다양한 색상과 패턴으로 인테리어에 활기를 더합니다.<br>부드러운 촉감과 편안함이 특징이며, 통기성이 좋아 여름철에도 쾌적하게 사용할 수 있습니다.<br>또한, 다양한 소재로 제작되어 세탁이 가능하거나 쉽게 관리할 수 있는 제품이 많아 실용적입니다.",
            img: "/img/renewal/pellito/collection-1.jpg"
        },
        {
            title: "<em>LEATHER<br>SOFA</em>",
            sub: "가죽 소파는 고급스러운 느낌과 내구성을 제공합니다.<br>시간이 지날수록 멋스러운 빈티지 느낌을 가지며, 청소가 용이하여 유지 관리가 간편합니다.<br>견고한 구조 덕분에 오랜 사용이 가능하며, 현대적인 스타일과 잘 어울립니다.",
            img: "/img/renewal/pellito/collection-2.jpg"
        },
        {
            title: "<em>DYNAMICA<br>SOFA</em>",
            sub: "디나미카 소파는 고유 3층의 미세 섬유구조로 반려묘가 있는 가정에 특히 좋습니다.<br>중간층의 강력한 스크림 섬유를 중심으로 초극세 섬유가 철망처럼 강하게 얽혀있습니다.<br>독특한 디자인과 실용성을 겸비한 제품으로, 다양한 변형이 가능한 것이 특징입니다.",
            img: "/img/renewal/pellito/collection-3.jpg"
        }
    ];
    
    $('.type').hover(function() {
        let activeIndex = 0; // 현재 활성화된 인덱스 초기화

        // 현재 활성화된 요소에서 active 클래스 제거
        $('.type.active').removeClass('active');

        // 새로 호버한 요소에 active 클래스 추가
        $(this).addClass('active');

        const buttonIndex = $(this).data('index');
        
        // 텍스트와 이미지 숨기기
        $('.coll-title, .coll-sub').addClass('hidden');
        $('.coll-right img').addClass('hidden');

        // 텍스트와 이미지 업데이트
        setTimeout(() => {
            $('.coll-title').html(texts[buttonIndex].title);
            $('.coll-sub').html(texts[buttonIndex].sub);
            $('.coll-right img').attr('src', texts[buttonIndex].img);
            
            // 텍스트와 이미지 다시 보이기
            $('.coll-title, .coll-sub').removeClass('hidden');
            $('.coll-right img').removeClass('hidden');
        }, ); // transition 시간과 일치
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // 모든 depth-01의 li 요소를 선택
    const liElements = document.querySelectorAll('.depth-01 > li');

    // 각 li에 대해 클릭 이벤트 리스너 추가
    liElements.forEach(function (li) {
        li.addEventListener('click', function (e) {
            // depth-02에 포함된 li 클릭 시, 이벤트 전파 막기
            if (e.target.closest('.depth-02')) return;

            // 클릭된 li에 active 클래스 토글
            li.classList.toggle('active');

            // 해당 li 안의 토글 버튼도 같이 active 클래스 토글 (필요한 경우)
            const toggleBtn = li.querySelector('.toggle-btn');
            if (toggleBtn) {
                toggleBtn.classList.toggle('active');
            }
        });
    });
});