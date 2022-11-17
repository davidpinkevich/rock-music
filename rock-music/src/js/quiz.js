import "../style/quiz/quiz.scss";
import { createBlock } from "./modules-quiz/create-block";
import { createQuestion } from "./modules-quiz/block-question";
import { getRandom } from "./modules-quiz/random";
import { engQuiz } from "./modules-quiz/eng-quiz";
import { ruQuiz } from "./modules-quiz/ru-quiz";

localStorage.removeItem("score");
let rand = getRandom(6);
createBlock(0)
createQuestion(0,rand[0])

if(localStorage.getItem("lang") == "eng") {
  engQuiz();
} else {
  ruQuiz();
}


