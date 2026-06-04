// 1. Define the sound sources mapping
let soundSources = {
  applause: "./sounds/applause.mp3",
  boo: "./sounds/gasp.mp3", // Note: kept your original fallback path here
  gasp: "./sounds/gasp.mp3",
  tada: "./sounds/tada.mp3",
  victory: "./sounds/victory.mp3",
  wrong: "./sounds/wrong.mp3",
};

let sounds = {};

// 2. Dynamically create <audio> tags and append them to the DOM
Object.keys(soundSources).forEach((key) => {
  const audio = document.createElement("audio");
  audio.id = `audio-${key}`; // Give it a unique ID
  audio.src = soundSources[key];
  document.body.appendChild(audio); // This makes Cypress happy!
  
  sounds[key] = audio;
});

const stopBtn = document.getElementById("stop");

// 3. Stop all sounds
function stopAllSound() {
  Object.values(sounds).forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}

// 4. Attach event listeners to your buttons
Object.keys(sounds).forEach((key) => {
  const btn = document.getElementById(key);
  if (btn) {
    btn.addEventListener("click", () => {
      stopAllSound();
      sounds[key].play();
    });
  }
});

if (stopBtn) {
  stopBtn.addEventListener("click", stopAllSound);
}