gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".container .panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".side-scrolling-wrapper",
    pin: true,
    start: "top +=10px",
    markers: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      duration: {min: 0.2, max: 0.3},
      delay: 0
    },
    // Base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + (document.querySelector(".container").offsetWidth / 5)
  }
});