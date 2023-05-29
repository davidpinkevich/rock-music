export function createResult() {
  const score = localStorage.getItem("score");

  const result = document.querySelector(".score__info>span");

  if(!score) {
    result.innerHTML = ` ${0}`;
  } else {
    result.innerHTML = ` ${score}`;
  }
}