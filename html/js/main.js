gsap.registerPlugin(ScrollTrigger);

// Company Section - Title
gsap.set("#hard-coding .title, .detail", {
    opacity: 0,
    y: -200 
});

gsap.to("#hard-coding .title, .detail", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#hard-coding",
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
        trigger: "#hard-coding",
        start: "top center",
        end: "center",
        markers: false 
    } 
});





// Project section - content section
gsap.set("#graphic-design", {
    x: -200,
    y: -200,
    opacity: 0 
});

gsap.to("#graphic-design", {
    duration: 1.6,
    x: 0,
    y: 0,
    opacity: 1,
    delay: 0.2,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
        trigger: "#graphic-design",
        start: "top center",
        end: "center",
        markers: false 
    } 
});


// Project section - Right
gsap.set("#about", {  
    x: 500 
});

gsap.to("#about", {  
    duration: 2.2,
    x: 0,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "center",
        markers: false 
    } 
});