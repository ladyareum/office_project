// Favicon 브라우저 다크모드인지 쿠키값을 저장 후 php에서 구분할 수 있는 형태로 사용가능?
//(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";

// load2
let t1 = gsap.timeline();

t1.from(".imsrk", {
  opacity: 0,
  xPercent: -100,
  delay: 0.3,
  duration: 0.8,
  ease: "power1.out",
  yoyo: true,
});

t1.from(
  ".dot",
  {
    opacity: 0,
    yPercent: 100,
    delay: 0.3,
    repeatDelay: 0.8,
    duration: 0.8,
    ease: "power1.out",
  },
  0.01
);

t1.to(".dot", {
  x: 20,
  duration: 0.5,
  ease: "power1.out",
});

t1.to(".dot", {
  x: -10,
  duration: 0.4,
  ease: "power1.out",
});

t1.to(".imsrk", {
  opacity: 0,
  xPercent: -100,
  duration: 0.3,
  ease: "power1.out",
  yoyo: true,
});

t1.to(
  ".dot",
  {
    opacity: 0,
    duration: 0.5,
    ease: "expo.out",
  },
  2
);

t1.to(
  ".cover",
  {
    xPercent: -100,
    duration: 0.8,
    ease: "power1.out",
  },
  2
);

///////

t1.to(
  ".cover-2",
  {
    xPercent: -100,
    duration: 0.5,
    ease: "power1.out",
  },
  2.2
);

t1.to(
  ".cover-3",
  {
    xPercent: -100,
    duration: 0.5,
    ease: "power1.out",
  },
  2.4
);

t1.to(
  ".cover-4",
  {
    xPercent: -100,
    duration: 0.5,
    ease: "power1.out",
  },
  2.6
);

t1.from(
  ".imsrk2",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
    opacity: 0,
  },
  2.8
);

t1.from(".cover-5", {
   xPercent: 100,
   duration: 1,
   ease: "power1.out",
   delay: 0.3,
});

// t1.from(".cover-5", {
//   opacity:0,
//   duration: 1,
//   ease: "power1.out",
//   delay: 0.3,
// });

// Animation
function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("item_reveal_left")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("item_reveal_right")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".content_item_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
});

window.onload = function () {
  $(".btn_menu").click(function () {
    $(".btn_menu").toggleClass("active");
    $(".overlay").toggleClass("show");
    $("body").toggleClass("active");
  });
};


// GSAP Side Scroll
const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
const listEl = document.querySelector('.side-scroll-list');
gsap.to(listEl, {
  x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.side-scroll',
    start: 'top top', // 요소의 상단(top)이 뷰포트 상단(top)에 왔을 때
    end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  }
});

