import { engVersion } from "./eng-verion";
import { ruVersion } from "./ru-version";
//
export function changeLang() {
  const lang = document.querySelector(".main__item-info.lang");
  if(!lang.classList.contains("eng")){
    lang.classList.add("eng");
    lang.classList.remove("ru");
    localStorage.setItem("lang", "eng");
    engVersion();
  } else {
    lang.classList.add("ru");
    lang.classList.remove("eng");
    localStorage.setItem("lang", "ru");
    ruVersion();
  }
}