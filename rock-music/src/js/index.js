import "../style/preview/preview.scss";
import { openRule } from "./modules-preview/open-rule";
import { closeRule } from "./modules-preview/close-rule";
import { changeLang } from "./modules-preview/language-prew";
import { engVersion } from "./modules-preview/eng-verion";
import { ruVersion } from "./modules-preview/ru-version";
import { openGallery } from "./modules-preview/open-gallery";
import { closeGallery } from "./modules-preview/close-gallery";
import { createSlot } from "./modules-preview/create-slot";
import { songSwith } from "./modules-preview/song-switcher";

closeGallery();
openRule();
closeRule();
songSwith();

const openGall = document.querySelector(".items");
openGall.addEventListener("click", () => {
  openGallery();
  createSlot(0,0);
})
const lang = document.querySelector(".main__item-info.lang");
if(localStorage.getItem("lang") == "eng") {
  lang.classList.add("eng");
    engVersion();
} else {
  lang.classList.add("ru");
  ruVersion();
}

lang.addEventListener("click", changeLang);

console.log("Все пункты выполнены, 270");


