const xwheel = document.querySelector(".xwheel");
const link1 = document.querySelector(".fa-github-square");
const link2 = document.querySelector(".fa-linkedin");
const link3 = document.querySelector(".fa-folder-open");
const body = document.querySelector("body");
const ring = document.querySelector(".loading-animation");

const buttons = document.querySelectorAll("[data-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.button === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

window.addEventListener("load", () => {
  body.classList.remove("hideScrollbar");
  xwheel.classList.add("xwheel-animation");
  link1.classList.add("link1-animation");
  link2.classList.add("link2-animation");
  link3.classList.add("link3-animation");
  ring.classList.add("ringRemove");

  document.documentElement.style.setProperty(
    "--pseudo-animation1",
    "line1 0.8s ease-in-out 0.5s forwards"
  );

  document.documentElement.style.setProperty(
    "--pseudo-animation2",
    "line2 0.8s ease-in-out 0.5s forwards"
  );
});
