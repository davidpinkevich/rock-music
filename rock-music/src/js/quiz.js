import "../style/quiz/quiz.scss";
import { createBlock } from "./modules-quiz/create-block";
import { createQuestion } from "./modules-quiz/block-question";
import { getRandom } from "./modules-quiz/random";


localStorage.removeItem("score");
let rand = getRandom(6);
createBlock(0)
createQuestion(0,rand[0])



