import { blockItems } from "./block-items";
import { getRandom } from "./random";


import mask from "../../img/quiz/mask.jpg";
import { createBlockInfo } from "./block-info";
import { createQuestion } from "./block-question";

import imgBase from "../../img/quiz/icons/base.jpg";
import imgYes from "../../img/quiz/icons/yes.jpg";
import imgNo from "../../img/quiz/icons/no.jpg";

import yes from "../../audio/quiz/yes-no/yes.mp3";
import no from "../../audio/quiz/yes-no/no.mp3";

let click = 0;

export function createBlock(n) {
  const btnResult = document.querySelector(".main__options-result");
  btnResult.style.display = "none";

//---------полоска из 6 названий жанров
const genreItems = document.querySelectorAll(".genre__item");
genreItems[click].classList.add("active");
if(genreItems[click - 1]) genreItems[click - 1].classList.remove("active");

  let rand = getRandom(6);
  const blokQuestion = document.querySelector(".task__img");
  blokQuestion.innerHTML = `<img class="task__img-mask" src="${mask}"></img>`;

  const blocks = blockItems[n];
  for (const block of blocks) {

    const sayYes = new Audio(yes);
    const sayNo = new Audio(no);

    const bodyItems = document.querySelector(".options");
    const item = document.createElement("div");
    item.setAttribute("id", block.id);
    item.setAttribute("name", block.name);
    item.className = "options__item";
    bodyItems.append(item);

    const itemImg = document.createElement("div");
    itemImg.className = "options__item-img";
    itemImg.innerHTML = `<img src="${imgBase}"></img>`;
    item.append(itemImg);

    const itemIext = document.createElement("div");
    itemIext.className = "options__item-text";
    itemIext.innerHTML = `<p>${block.name}</p>`;
    item.append(itemIext);

    item.addEventListener("click", function(event){
      createBlockInfo(n,block.id-1);

      const valueQuestion = document.querySelector(".task__question-title").getAttribute("value");
      if(valueQuestion == event.currentTarget.id) {
        event.currentTarget.setAttribute("id", "count")
        click++;
        console.log(click)
//-------при верном ответе открывается имя группы
        const question = document.querySelector(".task__question-title");
        const idQuest = question.getAttribute("value");
        question.innerHTML = `${blockItems[click-1][idQuest-1].name}`;

// -------------отображение очков
        const allImg = document.querySelectorAll(".img__no");
        let score = Math.abs(allImg.length-5);
        const mainScore = document.querySelector(".header__score>span");
        mainScore.innerHTML = +mainScore.innerHTML + +score;
//-----------------------------------------------------------------------
        const blokQuestion = document.querySelector(".task__img");
        blokQuestion.innerHTML = "";
        blokQuestion.innerHTML = `<img class="task__img-mask" src="${block.fimg}"></img>`;

        const btn = document.querySelector(".main__options-btn");
        btn.classList.add("active");
        const activeBtn = document.querySelector(".main__options-btn.active");
        if(click == 6) {
          btn.style.display = "none";
          btnResult.style.display = "block";
          btnResult.classList.add("active");
        } else {
          btn.style.pointerEvents = "auto";
        }
        
//--------событие на кнопку снизу (для перехода)
        activeBtn.addEventListener("click", function(event) {
          const playerQuest = document.querySelector(".player");
          const bodyItems = document.querySelector(".options");
          const questions = document.querySelector(".info");
          playerQuest.remove();
          questions.innerHTML = "Послушай песню и реши, кто этот злобный гений...";
          bodyItems.innerHTML = "";
          createBlock(click);
          createQuestion(click, rand[0]);
          document.querySelector(".main__options-btn").classList.remove("active");
          activeBtn.style.pointerEvents = "none";
        })
//-----------------------------------------------------------------------------------------------------------
        itemImg.innerHTML = "";
        itemImg.innerHTML = `<img src="${imgYes}"></img>`;
        sayYes.play();

      } 
      // else {
        if(!document.querySelector(".main__options-btn").classList.contains("active")){
          itemImg.innerHTML = "";
          itemImg.innerHTML = `<img class="img__no" src="${imgNo}"></img>`;
        }
        sayNo.play();
      // }
    });
    item.addEventListener("click", function() {
      if (document.querySelector(".main__options-btn").classList.contains("active")) {
        sayNo.pause();
      }
    })
  }
}




