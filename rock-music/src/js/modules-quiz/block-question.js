import { blockItems } from "./block-items";
import { createPlayer } from "./main-player";
//

export function createQuestion(a, b) {
  const question = document.querySelector(".task__question-title");
  question.setAttribute("value", blockItems[a][b].id);

  question.innerHTML = `Кто скрывается под маской?`;

  const play = document.querySelector(".task__question");
  createPlayer(play, a, b)
}
