AOS.init();

gsap.registerPlugin(ScrollTrigger);

const waveText = document.querySelector('#pellito-info em');
waveText.innerHTML = waveText.textContent.split('').map(char => `<span>${char}</span>`).join('');

const textSpans = document.querySelectorAll('#pellito-info em span');

gsap.to(textSpans, {
    scrollTrigger: {
        trigger: waveText,
        start: "top 80%", 
        end: "bottom 20%", 
        toggleActions: "play none none reset",
    },
    duration: 0.6,
    opacity: 1, 
    ease: "power1.inOut", 
    stagger: {
        amount: 1, 
        from: "start", 
        onStart: function() {
            const startColor = 0; 
            const endColor = 360;

            textSpans.forEach((span, i) => {

                const hue = (startColor + ((i % 10) * 30) + (i * 2)) % endColor; 
                gsap.to(span, {
                    color: '#f1eedc',
                    duration: 1, 
                    delay: (i * 0.1) + Math.abs(Math.sin(i * 0.5)) * 0.1, 
                });
            });
        },
    },
});

function triggerGSAPAnimation(index) {
    if (index === 1){ 
        const tlSec2 = gsap.timeline();
    
        tlSec2.to(".con-title h2", {
            duration: 0.8,
            y: 0,              
            opacity: 1,        
            ease: "power2.out",
            delay: 0.3         
        })
        .to(".con-title p", {  
            duration: 0.6,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 0        
        }, "-=0.1")
        .to(".info", {  
            duration: 0.6,
            x: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 0        
        }, "-=0.2")
        .to(".price-box", {  
            duration: 0.6,
            x: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 0,
            onComplete: function() {
                $(".price-box").addClass("animate");
            }    
        }, "-=0.3")
        .to(".con-text-wrap .one", {  
            duration: 0.6,
            x: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 1, 
        }, "-=1")
        .to(".con-text-wrap .two", {  
            duration: 0.6,
            x: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 1, 
        }, "-=1.1")
        .to(".go-to", {  
            duration: 0.6,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 1, 
        }, "-=1.2")
        .to(".right .img", {  
            duration: 0.6,
            opacity: 1,
            ease: "power2.out",
            delay: 1.5, 
        }, "-=1.7")
        .to(".right .tel", {  
            duration: 0.6,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 1.5,       
        }, "-=1.8");
    }
    if (index === 4){ 
        const tlSec5 = gsap.timeline();
    
        tlSec5.to(".sec5 .text li", {
            duration: 0.8,
            y: 0,              
            opacity: 1,        
            ease: "power2.out",
            delay: 0.3,
            stagger: 0.2 
        }, "-=0.1")
        .to(".sec5 .left img", {  
            duration: 0.6,
            opacity: 1,
            ease: "power2.out",
            delay: 0        
        }, "-=0.1")
        .to(".sec5 .more", {  
            duration: 0.6,
            y: 0,     
            opacity: 1,
            ease: "power2.out",
            delay: 0        
        }, "-=0.1")
        .to(".sec5 .title", {  
            duration: 0.6,
            x: 0,     
            opacity: 1,
            ease: "power2.out",
            delay: 0        
        }, "-=0.1")
        .to(".sec5 .m-info img", {  
            duration: 0.6,
            opacity: 1,
            ease: "power2.out",
            delay: 0,
            stagger: 0.2     
        })
        .to(".sec5 .info-wrap li", {  
            duration: 0.8,
            x: 0,              
            opacity: 1,        
            ease: "power2.out",
            delay: 0.3,
            stagger: 0.2      
        }, "-=0.4");
    }
}