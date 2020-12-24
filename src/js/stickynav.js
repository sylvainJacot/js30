const nav = document.querySelector("#navigation");

function fixNav() {
  const topOfNav = nav.offsetTop;

  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fix_header");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fix_header");
  }
}

window.addEventListener("scroll", fixNav);
