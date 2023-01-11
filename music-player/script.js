const musicAlbum = document.querySelector("#music-album");
const audioPlayer = document.querySelector('#audio-player');
const musicTitle = document.querySelector("#music-title");
const musicArtist = document.querySelector("#music-artist");

const buttonPlayBack = document.querySelector("#play-back");
const buttonPlay = document.querySelector("#play");
const buttonPlayForward = document.querySelector("#play-forward");

const musics = [
  {
    path: "./music/m1.mp3",
    title: "Music M1",
    artist: "By Mixkit 01",
    album: "./images/m1.png"
  },
  {
    path: "./music/m2.mp3",
    title: "Music M2",
    artist: "By Mixkit 02",
    album: "./images/m2.png"
  },
  {
    path: "./music/m3.mp3",
    title: "Music M3",
    artist: "By Mixkit 03",
    album: "./images/m3.png"
  },
];

let id = 1;

function getMusic() { 
    musicAlbum.src = musics[id].album;
    audioPlayer.src = musics[id].path;
    musicTitle.innerText = musics[id].title;
    musicArtist.innerText = musics[id].artist;
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
    audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
});

buttonPlayBack.addEventListener('click', getBackMusic);
buttonPlayForward.addEventListener('click', getForwardMusic);
