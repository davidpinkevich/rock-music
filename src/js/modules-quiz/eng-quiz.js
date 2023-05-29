export function engQuiz() {
  const score = document.querySelector(".header__score");
  score.innerHTML = "Points(rum): <span>0</span>";

  const allGenre = document.querySelectorAll(".genre__item");
  allGenre[0].innerHTML = "Foreign rock (90s)";
  allGenre[1].innerHTML = "Metal";
  allGenre[2].innerHTML = "Russian rock";
  allGenre[3].innerHTML = "foreign punk";
  allGenre[4].innerHTML = "Foreign rock (00s)";
  allGenre[5].innerHTML = "Russian punk";

  const title = document.querySelector(".task__question-title");
  title.innerHTML = "Who is behind the mask?";

  const quest = document.querySelector(".info-text");
  quest.innerHTML = "Listen to the song and decide who this evil genius is...";

  const btn = document.querySelector(".main__options-btn");
  btn.innerHTML = "Let's continue the path...";

  const btnNext = document.querySelector(".main__options-result");
  btnNext.innerHTML = "Let's find out who is the Jester and who is the King...";
}