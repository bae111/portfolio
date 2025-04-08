AOS.init();

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

gsap.set(".a-wrap", {  
    opacity: 0,
    scale: 0.8 
});

gsap.to(".a-wrap", {  
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

gsap.set(".project-img", {  
    opacity: 0,
});

gsap.to(".project-img", {  
    opacity: 1,
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".project-wrap",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

gsap.set("#renewal", {  
    opacity: 0,
});

gsap.to("#renewal", {  
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#renewal",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

// Company Section - Title
gsap.set("#personal .project-detail", {
    opacity: 0,
    y: -100 
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
    scale: 0.8 
});

gsap.to(".personal-box", {
    duration: 1,
    opacity: 2,
    scale: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#personal",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

document.querySelectorAll(".split").forEach(text => {
    let splitWrap = text.innerText.split('').map(char => `<span class="char">${char}</span>`).join('');
    text.innerHTML = splitWrap;
    text.setAttribute("aria-label", text.innerText);
});

const targets = gsap.utils.toArray(".split");

targets.forEach(target => {
    gsap.from(target.querySelectorAll(".char"), {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1,
        ease: "circ.out",
        stagger: {
            amount: 1,
            from: "random"
        },
        scrollTrigger: {
            trigger: target,
            start: "top bottom",
            end: "+=400",
            markers: false
        }
    });
});

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