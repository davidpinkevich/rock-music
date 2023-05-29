import { makeSound } from "./sound";

export function openRule() {
  const buttonRule = document.querySelector(".item-sound");
  buttonRule.addEventListener("click", function(){
    const rule = document.querySelector(".footer__rule");
    rule.classList.toggle("active");
    makeSound();
  })
}