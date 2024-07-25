const scroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true,
  lerp: 0.04,
});

var tl = gsap.timeline();

tl.from("#t", {
  x: -80,
  y: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.7,
  stagger: 0.3,
});

tl.from("#l", {
  y: 80,
  x: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});
