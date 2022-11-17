const score = localStorage.getItem("score");
console.log(score)

export function createResult() {
  const score = localStorage.getItem("score");

  const result = document.querySelector(".score__info>span");
  result.innerHTML = ` ${score}`;

  const scoreText = document.querySelector(".score__text");
  if(score == 30) scoreText.innerHTML ="Браво! Ты победил, но Король всё равно один...";
}