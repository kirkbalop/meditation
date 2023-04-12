const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");
  const timeSelect = document.querySelectorAll(".time-select button");

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

  // Event Listeners

  sounds.forEach((sound) => {
    sound.addEventListener("click", function () {
      song.src = this.getAttribute("data-sound");
      video.src = this.getAttribute("data-video");
      checkStatus(song);
    });
  });

  play.addEventListener("click", () => {
    checkStatus(song);
  });

  timeSelect.forEach((option) => {
    option.addEventListener("click", function () {
      defaultDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(
        defaultDuration / 60
      )}:${Math.floor(defaultDuration % 60)}`;
    });
  });

  // Play/Pause function
  const checkStatus = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  };

  // Animations
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let timeElapsed = defaultDuration - currentTime;
    let seconds = Math.floor(timeElapsed % 60);
    let minutes = Math.floor(timeElapsed / 60);

    // The Circle Animation
    let circleProgress = length - (currentTime / defaultDuration) * length;
    outline.style.strokeDashoffset = circleProgress;

    // The Timer Animation
    timeDisplay.textContent = `${minutes}:${seconds}`;
    if (currentTime >= defaultDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = "./svg/play.svg";
      video.pause();
    }
  };
};

app();
