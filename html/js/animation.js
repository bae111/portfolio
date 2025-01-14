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