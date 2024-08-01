import { saveData } from "./page-loader.js";

const answerArray = ["Mars", "William Shakespeare", "Canberra", "Oxygen"];
export const marks = JSON.parse(localStorage.getItem("marks")) || [];
export function answerChecker(choosenOption) {
    let correctAns;
    answerArray.forEach((answer) => {
        if(answer == choosenOption) {
            correctAns = 1
    
        }
    })
    if(!correctAns) {
        console.log("Wrong Answer");
        noRedo()
    }
    else{
        console.log("Correct Answer");
        noRedo()
    }
    return correctAns;
}

function noRedo() {
    document.querySelectorAll(".pointer")
        .forEach((button) => {
            button.classList.add("block")

            button.classList.remove("pointer")
        })
}

export function correctOrNot() {
    let pageNumber;
    document.querySelectorAll(".container")
        .forEach((page) => {
            pageNumber = page.dataset.pageNum;
        })
        console.log(pageNumber);

    document.querySelectorAll(".option")
        .forEach((Answer) => {
            let answer = Answer.dataset.answer;
            let correct = answerChecker(answer)
            if(correct == 1) {
                document.querySelectorAll(".option")
                    .forEach((button) => {
                        let dataAnswer = button.dataset.answer;
                        if(dataAnswer == answer) {
                            button.classList.add("correct-answer")
                        }
                    })
            }
            else{
                document.querySelectorAll(".option")
                .forEach((button) => {
                    let dataAnswer = button.dataset.answer;
                    if(dataAnswer == answer) {
                        button.classList.add("wrong-answer")
                    }
                })
            }

            let html = document.querySelector(".container").innerHTML;
            saveData(wherToSave(pageNumber), html)
        })

        let data = JSON.parse(localStorage.getItem("FirstPage"));
        console.log(data);
}

export function buttonClick() {
    document.querySelectorAll(".option").forEach((button) => {
        const answer = button.dataset.answer;
        button.addEventListener('click', () => {
            let score = answerChecker(answer);
            correctOrNot();
            console.log(answer);
            if(score == 1) {
                marks.push(1);
                saveMarks();
            }
        })
    })
}

export function wherToSave(pageNumber) {
    if(pageNumber == 1) {
        return PageHtmlSaver.page1;
    }
    else if(pageNumber == 2) {
        return PageHtmlSaver.page2;
    }
    else if(pageNumber == 3) {
        return PageHtmlSaver.page3;
    }
    else if(pageNumber == 4) {
        return PageHtmlSaver.page4;
    }
}

export const PageHtmlSaver = {
    page1: "FirstPage",
    page2: "SecondPage",
    page3: "ThirdPage",
    page4: "FourthPage"
}

export function saveMarks() {
    localStorage.setItem("marks", JSON.stringify(marks));
}

