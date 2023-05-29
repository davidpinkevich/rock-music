import "../style/result/result.scss";
import { createResult } from "./modules-result/create-result";
import { ruRes } from "./modules-result/ru-res";
import { engRes } from "./modules-result/eng-res";



let score = localStorage.getItem("lang");

if(score == "eng") {
  engRes();
} else {
  ruRes();
}
createResult();