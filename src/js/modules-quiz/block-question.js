import { blockItems } from "./block-items";
import { createPlayer } from "./main-player";
//

export function createQuestion(a, b) {
  let lang = localStorage.getItem("lang");
  const question = document.querySelector(".task__question-title");
  question.setAttribute("value", blockItems[a][b].id);

  if (lang == "eng") {
    question.innerHTML = "Who is behind the mask";
  } else {
    question.innerHTML = `Кто скрывается под маской?`;
  }
  

  const play = document.querySelector(".task__question");
  createPlayer(play, a, b)
}
