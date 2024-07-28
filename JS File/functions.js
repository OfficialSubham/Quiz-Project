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
    }
    else{
        console.log("Correct Answer");
    }
}