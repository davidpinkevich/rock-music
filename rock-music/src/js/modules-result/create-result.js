export function createResult() {
  const score = localStorage.getItem("score");

  const result = document.querySelector(".score__info>span");
  result.innerHTML = ` ${score}`;
}