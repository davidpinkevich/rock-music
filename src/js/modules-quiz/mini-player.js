import { blockItems } from "./block-items";
import { sayTime } from "./current-time";

//---- ф-ция PLay---------------------
export function playMusicMini(aud) {
  const mainSound = document.querySelector(".play-mini");
  if(mainSound) mainSound.classList.add("sound-on-mini");
  aud.play();
}
//---- ф-ция Stop---------------------
export function pauseMusicMini(aud) {
  const mainSound = document.querySelector(".play-mini");
  if(mainSound) mainSound.classList.remove("sound-on-mini")
  aud.pause();
}

export function createPlayerMini (app, a, b) {
//-------------------------------------
  const audio = new Audio(blockItems[a][b].audio);
  const playerBlock = document.createElement("div");
  playerBlock.className = "player-mini";

  app.append(playerBlock);

  const progressBody = document.createElement("div");
  progressBody.className = "progress-body-mini";
  playerBlock.append(progressBody);

  const progressWrap = document.createElement("div");
  progressWrap.className = "progress__wrap-mini";
  progressBody.append(progressWrap);

  const progress = document.createElement("div");
  progress.className = "progress-mini";
  progressWrap.append(progress);

  //---для текущего времени проигрыша 
const progressInfo = document.createElement("div");
progressInfo.className = "progress__info-mini";
progressBody.append(progressInfo);

const progressStart = document.createElement("div");
progressStart.className = "progress__info-start-mini";
progressStart.innerHTML = "<span>00</span>:<span>00</span>";
progressInfo.append(progressStart);

const progressFinish = document.createElement("div");
progressFinish.className = "progress__info-finish-mini";
progressFinish.innerHTML = "<span>00</span>:<span>00</span>";
progressInfo.append(progressFinish);
//-----------------------------------------------

  const blockPlaySound = document.createElement("div");
  blockPlaySound.className = "play-sound-mini";
  playerBlock.append(blockPlaySound);

  const play = document.createElement("div");
  play.className = "play-mini";
  blockPlaySound.append(play);

//-----------Регулятор громкости---------------------
  const volume = document.createElement("div");
  volume.className = "volume-mini";
  blockPlaySound.append(volume);

  const inputeSound = document.createElement("input");
  inputeSound.className = "play-sound__range-mini";
  inputeSound.setAttribute("min", "0");
  inputeSound.setAttribute("max", "100");
  inputeSound.setAttribute("vaule", "30");
  inputeSound.setAttribute("type", "range");
  volume.append(inputeSound);

//---------События на саму Audio (чтобы было видно шкалу прогресса)
audio.addEventListener("timeupdate", function(event) {
  if (document.querySelector(".player-mini")){
    const duration = audio.duration;
    const currentTime = audio.currentTime;
  
    const percent = currentTime / duration * 100;
    const progress = document.querySelector(".progress-mini");
    if (progress) progress.style.width = `${percent}%`;
    
    if(currentTime == duration) {
      pauseMusicMini(audio);
      audio.currentTime = 0;
    }
  //------------текущее время песни 
  sayTime(audio.currentTime, "progress__info-start-mini");
  //-------------отображение длительности всей пенсни
    const blockMinFinish = document.querySelector(".progress__info-finish-mini").firstChild;
    const blockSecFinish = document.querySelector(".progress__info-finish-mini").lastChild;
    const min = Math.floor(duration / 60);
    const sec = Math.floor(duration - min * 60);
    blockMinFinish.innerHTML = `0${min}`;
    if (sec < 9) {
      blockSecFinish.innerHTML = `0${sec}`;
    } else {
      blockSecFinish.innerHTML = `${sec}`;
    }
    
    
  }
})
//---События на шкалу перемеотки
progressWrap.addEventListener("click", function(event) {
const width = this.clientWidth;
const rangeX = event.offsetX;
const duration = audio.duration;
audio.currentTime = (rangeX / width) * duration;
})

//----------События для кнопки PLay--------------
  document.querySelector(".play-mini").addEventListener("click", () => {
    const isSoundPlay = play.classList.contains("sound-on-mini");
    if(isSoundPlay) {
      pauseMusicMini(audio)
    } else {
      playMusicMini(audio)
    }
  })
  //--------События для регулировки громкости--------------
  const range = document.querySelector(".play-sound__range-mini");
  range.addEventListener("input", function(event) {
    console.log(this.value)
    audio.volume = this.value/100;
  })

//---------------------------------------------------
  const allOptions = document.querySelectorAll(".options__item");
  for (const opt of allOptions) {
    opt.addEventListener("click", function() {
      pauseMusicMini(audio);
      audio.currentTime = 0;
    })
  }
  const bottomBtn = document.querySelector(".main__options-btn");
  bottomBtn.addEventListener("click", function(event){
    if(bottomBtn.classList.contains("active")){
      audio.currentTime = 0;
      pauseMusicMini(audio);
    }
    pauseMusicMini(audio)
  })
}