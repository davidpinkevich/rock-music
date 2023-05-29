import { createList } from "./play-list";
import { createSlot } from "./create-slot";
export function songSwith() {
  const next = document.querySelector(".gallery__header-next");
  const past = document.querySelector(".gallery__header-past");
    let n = 0;
  next.addEventListener("click", () => {
    n++;
    if(n==35) n = 0;
    let items = createList(36);
    createSlot(items[Math.abs(n)][0], items[Math.abs(n)][1]);
  })

  past.addEventListener("click", () => {
    n--;
    let items = createList(36);
    if(n == -36) n = 0;
    if(n < 0) createSlot(items[36+n][0], items[36+n][1]);
    if(n > 0) createSlot(items[n][0], items[n][1]);
    if(n == 0) createSlot(items[0][0], items[0][1]);
  })
}