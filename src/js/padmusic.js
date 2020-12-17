// const KeyDownHandler = (e) => {
//     console.log(e);
//   };
//   window.addEventListener("keydown", KeyDownHandler(e));

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.padItem[data-key="${e.code}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".padItem");
keys.forEach((key) =>
  // L'événement transitionend est déclenché lorsqu'une transition CSS est terminée. Dans le cas où une transition est supprimée avant la fin, par exemple si transition-property est supprimé ou display est défini sur none, alors l'événement ne pourra pas être généré.
  key.addEventListener("transitionend", removeTransition)
);
