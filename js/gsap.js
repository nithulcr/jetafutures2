document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const isiPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
  const isMobile = window.innerWidth < 600 || isiPhone;

  document.querySelectorAll(".text").forEach(text => {
    if (isMobile) {
      // Mobile: animate on enter/leave without scrub
      ScrollTrigger.create({
        trigger: text,
        start: "top 100%",
        end: "bottom 70%",
        onEnter: () => gsap.to(text, { backgroundSize: "100%", duration: 1, ease: "power3.out" }),
        onLeaveBack: () => gsap.to(text, { backgroundSize: "0%", duration: 1, ease: "power3.in" }),
      });
    } else {
      // Desktop: scrub animation on scroll
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "top 110%",
          end: "bottom 60%",
          scrub: true,
        }
      });
    }
  });
  


 
  gsap.registerPlugin(ScrollTrigger);

  // Horizontal scroll animation for card row
  gsap.to(".trade-cards", {
    xPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".trade-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

  // Card fade-up + blur reveal
  gsap.to('.trade-card', {
  opacity: 1,
  filter: "blur(0)",
  y: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".trade-section",
    start: "top 80%", // adjust as desired
    end: "bottom top",
    toggleActions: "play none none reverse"
  }
});






  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.timeline-progress', {
    height: 'calc(100% - 150px)', // or desired final value
    ease: 'none',
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 90%',
      end: 'bottom 80%',
      scrub: true
    }
  });



});


