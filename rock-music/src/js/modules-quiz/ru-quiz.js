export function ruQuiz() {
  const score = document.querySelector(".header__score");
  score.innerHTML = "Баллы(ром): <span>0</span>";

  const allGenre = document.querySelectorAll(".genre__item");
  allGenre[0].innerHTML = "Зарубежный рок (90-х)";
  allGenre[1].innerHTML = "Метал";
  allGenre[2].innerHTML = "Русский рок";
  allGenre[3].innerHTML = "Зарубежный панк";
  allGenre[4].innerHTML = "Зарубежный рок (00-х)";
  allGenre[5].innerHTML = "Русский панк";

  const title = document.querySelector(".info-text");
  title.innerHTML = "Кто скрывается под маской?";
  
  const quest = document.querySelector(".info-text");
  quest.innerHTML = "Послушай песню и реши, кто этот злобный гений...";

  const btn = document.querySelector(".main__options-btn");
  btn.innerHTML = "Продолжим путь...";

  const btnNext = document.querySelector(".main__options-result");
  btnNext.innerHTML = "Узнаем же, кто Шут, а кто Король...";
}