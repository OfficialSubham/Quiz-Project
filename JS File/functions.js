const answerArray = ["Mars", "William Shakespeare", "canberra", "Oxygen"];

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
        })
}