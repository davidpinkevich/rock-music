import { blockItems } from "./block-items";
import mask from "../../img/quiz/mask.jpg";
import { getRandom } from "./random";
export function createBlock(n) {
  const blokQuestion = document.querySelector(".task__img");
  blokQuestion.innerHTML = `<img class="task__img-mask" src="${mask}"></img>`;

  let random = getRandom(6);
  console.log(random)
  const blocks = blockItems[n];
  console.log(blocks)
  for (let i = 0; i < blocks.length; i++) {
    let number = random[i];
    const bodyItems = document.querySelector(".options");
    const item = document.createElement("div");
    item.setAttribute("id", blocks[number].id);
    item.className = "options__item";
    item.innerText = blocks[number].name;
    bodyItems.append(item);
    console.log(random[i])
  }
}