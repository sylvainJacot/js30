function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.padItem[data-key="${e.code}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

function playSoundOnClick(e) {
  const keyTar = e.target.dataset.key;
  const audio = document.querySelector(`audio[data-key="${keyTar}"]`);
  const key = document.querySelector(`.padItem[data-key="${keyTar}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".padItem");

keys.forEach((key) =>
  // L'événement transitionend est déclenché lorsqu'une transition CSS est terminée. Dans le cas où une transition est supprimée avant la fin, par exemple si transition-property est supprimé ou display est défini sur none, alors l'événement ne pourra pas être généré.
  key.addEventListener("transitionend", removeTransition)
);

keys.forEach((key) => key.addEventListener("click", playSoundOnClick));

const playButton = document.querySelector(".play_button");
playButton.addEventListener("click", function () {
  const audios = document.querySelectorAll("audio");
  const keys = document.querySelectorAll(".padItem");
  // console.log(audios);

  audios[0].play();
  keys[0].classList.add("playing");
  setTimeout(function () {
    audios[1].play();
    keys[1].classList.add("playing");
  }, 500);
  setTimeout(function () {
    audios[2].play();
    keys[2].classList.add("playing");
  }, 1000);
  setTimeout(function () {
    audios[3].play();
    keys[3].classList.add("playing");
  }, 1500);
  setTimeout(function () {
    audios[4].play();
    keys[4].classList.add("playing");
  }, 2000);
});
