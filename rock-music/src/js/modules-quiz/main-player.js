import { blockItems } from "./block-items";
import { sayTime } from "./current-time";

//---- ф-ция PLay---------------------
export function playMusic(aud) {
  const mainSound = document.querySelector(".play");
  mainSound.classList.add("sound-on");
  aud.play();
}
//---- ф-ция Stop---------------------
export function pauseMusic(aud) {
  const mainSound = document.querySelector(".play");
  mainSound.classList.remove("sound-on")
  aud.pause();
}

export function createPlayer (app, a, b) {

//-------------------------------------
  const audio = new Audio(blockItems[a][b].audio);
  const playerBlock = document.createElement("div");
  playerBlock.className = "player";

  app.append(playerBlock);

  const progressBody = document.createElement("div");
  progressBody.className = "progress-body";
  playerBlock.append(progressBody);
//-----Обёртка для полосы проигрыша
  const progressWrap = document.createElement("div");
  progressWrap.className = "progress__wrap";
  progressBody.append(progressWrap);

  const progress = document.createElement("div");
  progress.className = "progress";
  progress.style.width = "0%";
  progressWrap.append(progress);

//---для текущего времени проигрыша 
const progressInfo = document.createElement("div");
progressInfo.className = "progress__info";
progressBody.append(progressInfo);

const progressStart = document.createElement("div");
progressStart.className = "progress__info-start";
progressStart.innerHTML = "<span>00</span>:<span>00</span>";
progressInfo.append(progressStart);

const progressFinish = document.createElement("div");
progressFinish.className = "progress__info-finish";
progressFinish.innerHTML = "<span>00</span>:<span>00</span>";
progressInfo.append(progressFinish);
//-------------------------------------------

  const blockPlaySound = document.createElement("div");
  blockPlaySound.className = "play-sound";
  playerBlock.append(blockPlaySound);
//------------------------------------------------

  const play = document.createElement("div");
  play.className = "play";
  blockPlaySound.append(play);
//-------------------Регулятор громкости----------------------------
  const volume = document.createElement("div");
  volume.className = "volume";
  blockPlaySound.append(volume);

  
  const inputeSound = document.createElement("input");
  inputeSound.className = "play-sound__range";
  inputeSound.setAttribute("min", "0");
  inputeSound.setAttribute("max", "100");
  inputeSound.setAttribute("vaule", "30");
  inputeSound.setAttribute("type", "range");
  volume.append(inputeSound);
  
//---------События на саму Audio (чтобы было видно шкалу прогресса)
  audio.addEventListener("timeupdate", function(event) {
    const duration = 20;
    const currentTime = audio.currentTime;

    const percent = currentTime / duration * 100;
    const progress = document.querySelector(".progress");
    progress.style.width = `${percent}%`;
    if(currentTime > 20) {
      pauseMusic(audio)
      audio.currentTime = 0;
    }

    sayTime(audio.currentTime, "progress__info-start")

//-------------отображение длительности всей пенсни
    const blockSecFinish = document.querySelector(".progress__info-finish").lastChild;
    blockSecFinish.innerHTML = `20`;
  })
//---События на шкалу перемеотки
progressWrap.addEventListener("click", function(event) {
  const width = this.clientWidth;
  const rangeX = event.offsetX;
  const duration = 20;
  audio.currentTime = (rangeX / width) * duration;
})

//----------События для кнопки PLay--------------
  document.querySelector(".play").addEventListener("click", () => {
    const isSoundPlay = play.classList.contains("sound-on");
    if(isSoundPlay) {
      pauseMusic(audio)
    } else {
      playMusic(audio)
    }
  })
//--------События для регулировки громкости--------------
  const range = document.querySelector(".play-sound__range");
  range.addEventListener("input", function(event) {
    console.log(this.value)
    audio.volume = this.value/100;
  })

//---------------------------------------------------
  const allOptions = document.querySelectorAll(".options__item");
  for (const opt of allOptions) {
    opt.addEventListener("click", function(event) {
      if ("count"==event.currentTarget.id){
        pauseMusic(audio)
      }
    })
  }
  const bottomBtn = document.querySelector(".main__options-btn");
  bottomBtn.addEventListener("click", function(){
    if(bottomBtn.classList.contains("active")){
      audio.currentTime = 0;
      pauseMusic(audio);
    }
    pauseMusic(audio)
  })
}