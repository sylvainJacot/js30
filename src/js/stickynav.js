const header = document.querySelector("#header");
const topOfNav = header.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = header.offsetHeight + "px";
    document.body.classList.add("fix_header");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fix_header");
  }
}

window.addEventListener("scroll", fixNav);
