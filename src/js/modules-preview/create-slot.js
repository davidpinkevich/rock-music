import { createPlayerGallery } from "./player-gallery";
import { blockItems } from "../modules-quiz/block-items";

export function createSlot(a, b){
  const galleryBody = document.querySelector(".gallery__body");
  const lang = localStorage.getItem("lang");
  galleryBody.innerHTML = "";
  //------ создаем блок с плеером и инфой
  const mainBlock = document.createElement("div");
  mainBlock.className = "block";
  galleryBody.append(mainBlock);

  const blockTop = document.createElement("div");
  blockTop.className = "block__header";
  mainBlock.append(blockTop);

  const img = document.createElement("div");
  img.className = "block__header-img";
  img.innerHTML = `<img src = "${blockItems[a][b].fimg}"></img>`;
  blockTop.append(img);

  const info = document.createElement("div");
  info.classList.add("block__header-info");
  blockTop.append(info);

  const title = document.createElement("p");
  title.classList.add("block__header-info-title");
  title.innerHTML = `${blockItems[a][b].name} - ${blockItems[a][b].sound}`;
  info.append(title);

  const blockBot = document.createElement("p");
  blockBot.className = "block__description";
  if(lang == "eng") {
    blockBot.innerHTML = `${blockItems[a][b].engversion}`;
  } else {
    blockBot.innerHTML = `${blockItems[a][b].description}`;
  }
  mainBlock.append(blockBot);
  createPlayerGallery(info, a, b);
}