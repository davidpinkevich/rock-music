import grom from "../../audio/preview/grom.mp3";
import voron from "../../audio/preview/voron.mp3";
import laugh from "../../audio/preview/laugh.mp3";

export function makeSound(){
  function gromSound() {
    const audio = new Audio(grom);
    setTimeout(() => audio.play(), 3000);
    setInterval(() => audio.play(), 16000);
  }
  
  function voronSound() {
    const audio = new Audio(voron);
    setTimeout(() => audio.play(), 5000);
    setInterval(() => audio.play(), 20000);
  }
  
  function laughSound(){
    const audio = new Audio(laugh);
    audio.play();
    setInterval(() => audio.play(), 12000);
  }
  
  const soundon = document.querySelector(".main__item.item-sound");
  soundon.addEventListener("click", function() {
    const item = document.querySelector(".main__item.item-sound");
    item.classList.toggle("sound-off");
    item.classList.toggle("sound-on");
    laughSound()
    gromSound()
    voronSound()
  })

  // const soundoff = document.querySelector(".sound-off");
  // soundoff.addEventListener("click", function() {
  //   const item = document.querySelector(".main__item.sound-off");
  //   item.classList.toggle("sound-off");
  //   console.log("adasds")
  //   item.classList.toggle("item-sound");
  // })
}
