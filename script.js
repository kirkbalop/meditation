const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  //Sound Bank
  const sounds = document.querySelectorAll(".sound-selector button");

  //Time
  const timeDisplay = document.querySelector(".time-display");

  //Total length of outline
  const length = outline.getTotalLength();

  //Total Duration
  let defaultDuration = 600;

  outline.style.strokeDasharray = length;
  outline.style.strokeDashoffset = length;
  let duration = document
    .querySelector(".time-select button data-time")
    .value();

  play.addEventListener("click", () => {
    song.play();
    console.log("CLICK!");
  });
};

app();
