//your JS code here. If required.
let sounds = {
  applause: new Audio("./sounds/applause.mp3"),
  boo: new Audio("./sounds/gasp.mp3"),
  gasp: new Audio("./sounds/gasp.mp3"),
  tada: new Audio("./sounds/tada.mp3"),
  victory: new Audio("./sounds/victory.mp3"),
  wrong: new Audio("./sounds/wrong.mp3"),
};
const stopBtn = document.getElementById("stop");
function stopAllSound() {
  Object.values(sounds).forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}

Object.keys(sounds).forEach((key) => {
  const btn = document.getElementById(key);
  if (btn) {
    btn.addEventListener("click", () => {
      stopAllSound();
      sounds[key].play();
    });
  }
});
stopBtn.addEventListener("click", stopAllSound);
