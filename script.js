const xwheel = document.querySelector(".xwheel");
const link1 = document.querySelector(".fa-github-square");
const link2 = document.querySelector(".fa-linkedin");
const link3 = document.querySelector(".fa-folder-open");

window.addEventListener("load", () => {
  xwheel.classList.add("xwheel-animation");
  link1.classList.add("link1-animation");
  link2.classList.add("link2-animation");
  link3.classList.add("link3-animation");

  document.documentElement.style.setProperty(
    "--pseudo-animation1",
    "line1 0.8s ease-in-out 0.5s forwards"
  );

  document.documentElement.style.setProperty(
    "--pseudo-animation2",
    "line2 0.8s ease-in-out 0.5s forwards"
  );
});
