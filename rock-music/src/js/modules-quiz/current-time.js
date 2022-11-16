//----Ф-ция отображения текущего времени-----
export function sayTime(time, block) {
  const blockMinStart = document.querySelector(`.${block}`).firstChild;
  const blockSecStart = document.querySelector(`.${block}`).lastChild;

  const current = time;

  let min = Math.floor(current / 60);
  blockMinStart.innerHTML = `0${min}`;

  let sec = Math.floor(current - 60 * min);

  if(sec <= 9) {
    blockSecStart.innerHTML = `0${sec}`;
  } else {
    blockSecStart.innerHTML = `${sec}`;
  }
}