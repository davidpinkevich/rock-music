export function engRes(){
  const score = document.querySelector(".score__info");
  score.innerHTML = "Your result:<span></span>";

  const scoreText = document.querySelector(".score__text");
  scoreText.innerHTML = "You're almost a King... But you need 30 shots of rum, try again...";

  const btnRestart = document.querySelector(".btn__restart");
  btnRestart.innerHTML = "<p>Restart</p>";

  const btnHome = document.querySelector(".btn__main-menu");
  btnHome.innerHTML = "<p>At home</p>";
  
}