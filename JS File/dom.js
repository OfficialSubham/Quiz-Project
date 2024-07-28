import { answerChecker } from "./functions.js";

document.querySelectorAll(".option").forEach((button) => {
        const answer = button.dataset.answer;
        button.addEventListener('click', () => {
            answerChecker(answer);
            console.log(answer);
        })
    })