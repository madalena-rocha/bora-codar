// Funcionalidade dos botões

const musicAlbum = document.querySelector("#music-album");
const audioPlayer = document.querySelector("#audio-player");
const musicTitle = document.querySelector("#music-title");
const musicArtist = document.querySelector("#music-artist");

const buttonPlayBack = document.querySelector("#play-back");
const buttonPlay = document.querySelector("#play");
const buttonPause = document.querySelector("#pause");
const buttonPlayForward = document.querySelector("#play-forward");

const musics = [
  {
    path: "./music/m1.mp3",
    title: "Music M1",
    artist: "By Mixkit 01",
    album: "./images/m1.png",
  },
  {
    path: "./music/m2.mp3",
    title: "Music M2",
    artist: "By Mixkit 02",
    album: "./images/m2.png",
  },
  {
    path: "./music/m3.mp3",
    title: "Music M3",
    artist: "By Mixkit 03",
    album: "./images/m3.png",
  },
];

let id = 0;

const progressBar = document.querySelector("#progress-bar");

function resetMusic() {
  progressBar.style.width = (0 * 100) + "%";

  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
}

function getMusic() {
  musicAlbum.src = musics[id].album;
  audioPlayer.src = musics[id].path;
  musicTitle.innerText = musics[id].title;
  musicArtist.innerText = musics[id].artist;

  resetMusic()
}

getMusic();

function getBackMusic() {
  id = id - 1;
  getMusic();
}

function getForwardMusic() {
  id = id + 1;
  getMusic();
}

buttonPlay.addEventListener("click", function () {
  audioPlayer.play();
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
});

buttonPause.addEventListener("click", function () {
  audioPlayer.pause();
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
});

buttonPlayBack.addEventListener("click", getBackMusic);
buttonPlayForward.addEventListener("click", getForwardMusic);

// Tempo decorrido e tempo restante

const timeRemainingDisplay = document.querySelector("#time-remaining");
const timeElapsedDisplay = document.querySelector("#time-elapsed");

function updateTimeRemaining() {
  const timeRemaining = audioPlayer.duration - audioPlayer.currentTime;

  let minutes = Math.floor(timeRemaining / 60);
  minutes = String(minutes).padStart(2, "0");

  let seconds = (timeRemaining % 60).toFixed(0);
  seconds = String(seconds).padStart(2, "0");

  timeRemainingDisplay.textContent = `${minutes}:${seconds}`;
}

function updateTimeElapsed() {
  const timeElapsed = audioPlayer.currentTime;

  let minutes = Math.floor(timeElapsed / 60);
  minutes = String(minutes).padStart(2, "0");

  let seconds = (timeElapsed % 60).toFixed(0);
  seconds = String(seconds).padStart(2, "0");

  timeElapsedDisplay.textContent = `${minutes}:${seconds}`;
}

audioPlayer.addEventListener(
  "timeupdate",
  updateTimeRemaining,
  updateTimeElapsed
);

setInterval(updateTimeRemaining, 1000);
setInterval(updateTimeElapsed, 1000);

// Barra de progresso

audioPlayer.addEventListener("timeupdate", function() {
  const progress = audioPlayer.currentTime / audioPlayer.duration;
  progressBar.style.width = (progress * 100) + "%";
});
