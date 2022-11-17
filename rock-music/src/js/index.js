import "../style/preview/preview.scss";
import { openRule } from "./modules-preview/open-rule";
import { closeRule } from "./modules-preview/close-rule";
import { changeLang } from "./modules-preview/language-prew";
import { engVersion } from "./modules-preview/eng-verion";
import { ruVersion } from "./modules-preview/ru-version";
//
// changeLang();
openRule();
closeRule();

const lang = document.querySelector(".main__item-info.lang");
if(localStorage.getItem("lang") == "eng") {
  lang.classList.add("eng");
    engVersion();
} else {
  lang.classList.add("ru");
  ruVersion();
}

lang.addEventListener("click", changeLang);


