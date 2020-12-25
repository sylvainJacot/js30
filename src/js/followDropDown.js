const triggers = document.querySelectorAll(".links-container > li");
const dropDownBg = document.querySelector(".dropDownBackground");
const nav = document.querySelector("#mainav");

function handleEnter() {
  // "this" is the trigger item (.links-container > li) used in the forEach function
  this.classList.add("trigger-enter");
  dropDownBg.classList.add("dpopen");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter"))
    {
        this.classList.add("trigger-enter-active");
    }
  }, 150);

  const dropDown = this.querySelector(".DropDownItem");
  const dropDownCoord = dropDown.getBoundingClientRect();
  const navCoord = nav.getBoundingClientRect();

  const coord = {
      height: dropDownCoord.height,
      width: dropDownCoord.width,
      top: dropDownCoord.top - navCoord.top,
      left: dropDownCoord.left - navCoord.left
  }
  dropDownBg.style.setProperty('width', `${coord.width}px`);
  dropDownBg.style.setProperty('height', `${coord.height}px`);
  dropDownBg.style.setProperty('top', `${coord.top}px`);
  dropDownBg.style.setProperty('left', `${coord.left}px`);
}

function handleLeave() {
  this.classList.remove("trigger-enter-active", "trigger-enter");
  dropDownBg.classList.remove("dpopen");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
