import { blockItems } from "./block-items";
import mask from "../../img/quiz/mask.jpg";
import { getRandom } from "./random";
export function createBlock(n) {
  const blokQuestion = document.querySelector(".task__img");
  blokQuestion.innerHTML = `<img class="task__img-mask" src="${mask}"></img>`;

  const blocks = blockItems[n];
  for (const block of blocks) {
    const bodyItems = document.querySelector(".options");
    const item = document.createElement("div");
    item.setAttribute("id", block.id);
    item.className = "options__item";
    item.innerText = block.name;
    bodyItems.append(item);
  }
}