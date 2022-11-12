import grom from "../../audio/preview/grom.mp3";
import laugh from "../../audio/preview/laugh.mp3";

export function makeSound(){
  function gromSound() {
    const audio = new Audio(grom);
    setTimeout(() => audio.play(), 2000);
  }
  function laughSound(){
    const audio = new Audio(laugh);
    audio.play();
  }
  laughSound();
  gromSound();
}
