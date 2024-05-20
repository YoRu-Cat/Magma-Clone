function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.08,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // following line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  // // --- RED PANEL ---
  // gsap.from(".line-1", {
  //   scrollTrigger: {
  //     trigger: ".line-1",
  //     scroller: "#main",
  //     scrub: true,
  //     start: "top bottom",
  //     end: "top top"
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none"
  // });

  // // --- ORANGE PANEL ---
  // gsap.from(".line-2", {
  //   scrollTrigger: {
  //     trigger: ".orange",
  //     scroller: "#main",
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%"
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none"
  // });

  // // --- PURPLE/GREEN PANEL ---
  // var tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".purple",
  //     scroller: "#main",
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%"
  //   }
  // });

  // tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
  //   .from(
  //     ".line-3",
  //     { scaleX: 0, transformOrigin: "left center", ease: "none" },
  //     0
  //   )
  //   .to(".purple", { backgroundColor: "#28a92b" }, 0);

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco();

var clutter = "";

document
  .querySelector("#page2>h1")
  .textContent.split("")
  .forEach(function (dets) {
    clutter += `<span>${dets}</span>`;

    document.querySelector("#page2>h1").innerHTML = clutter;
  });

gsap.to("#page2>h1>span", {
  scrollTrigger: {
    trigger: `#page2>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: 0.5,
  },
  stagger: 0.2,
  color: `#fff`,
});

// var clutter = "";

// document
//   .querySelector("#page2>h1")
//   .textContent.split(" ")
//   .forEach(function (dets) {
//     clutter += `<span> ${dets} </span>`;
//     document.querySelector("#page2>h1").innerHTML = clutter;
//   });
// gsap.to("#page2>h1>span", {
//   ScrollTrigger: {
//     trigger: `#page2>h1>span`,
//     start: `top bottom`,
//     end: `bottom top`,
//     scroller: `#main`,
//     scrub: 0.5,
//   },
//   stagger: 0.2,
//   color: `#fff`,
// });
