export function ruRes(){
  const score = document.querySelector(".score__info");
  score.innerHTML = "Твой результат:<span></span>";

  const scoreText = document.querySelector(".score__text");
  scoreText.innerHTML = "Ты почти Король... Но нужно 30 рюмок рома, попробуй ещё раз...";

  const btnRestart = document.querySelector(".btn__restart");
  btnRestart.innerHTML = "<p>Заново</p>";

  const btnHome = document.querySelector(".btn__main-menu");
  btnHome.innerHTML = "<p>Домой</p>";
}