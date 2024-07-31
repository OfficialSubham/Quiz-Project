import { buttonClick } from "./functions.js";

const QuestionArray = [
    {
        page: 1,
        question: "What Planet is known as Red Planet",
        options: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Venus"
        }
    },
    {
        page: 2,
        question: 'Who wrote "Romeo And Juliet"?',
        options: {
            a: "Charles",
            b: "Mark Twain",
            c: "William Shakespeare",
            d: "Jane Austen"
        }
    },
    {
        page: 3,
        question: "What is the Capital of Australia?",
        options: {
            a: "Sydney",
            b: "Melbourne",
            c: "Canberra",
            d: "Brisbane"
        }
    },
    {
        page: 4,
        question: `Which element's Chemical symbol is "O"`,
        options: {
            a: "Gold",
            b: "Silver",
            c: "Oxygen",
            d: "Osmium"
        }
    }
]

export function pageLoader() {
    buttonClick()
    let html = ``;
    let pageNumber;
    document.querySelectorAll(".container")
        .forEach((page) => {
            pageNumber = page.dataset.pageNum;
        })

            if(pageNumber == 1) {

                let question = QuestionArray[0]

                html = `

                    <div class="quiz-container flex column">
                        <div class="header">
                            SubhamOfficial
                        </div>

                        <div class="question flex align-center">
                            ${question.page}. ${question.question}
                        </div>

                        <div class="question-and-option flex column">

                            <div class="options flex align-center column js-options">
                                <div class="option" data-answer = "${question.options.a}">
                                    <button class="pointer">a) ${question.options.a}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.b}">
                                    <button class="pointer">b) ${question.options.b}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.c}">
                                    <button class="pointer">c) ${question.options.c}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.d}">
                                    <button class="pointer">d) ${question.options.d}</button>
                                </div>

                        </div>

                </div>

                        
                <div class="page-changer flex align-center">
                    <a href="../Page-2/quiz.html"><button class="next-button">NEXT</button>
                </div>

                `
            }
    
        else if (pageNumber == 2){

            let question = QuestionArray[1]
            html = `
                    <div class="quiz-container flex column">
                        <div class="header">
                            SubhamOfficial
                        </div>

                        <div class="question flex align-center">
                            ${question.page}. ${question.question}
                        </div>

                        <div class="question-and-option flex column">

                            <div class="options flex align-center column js-options">
                                <div class="option" data-answer = "${question.options.a}">
                                    <button class="pointer">a) ${question.options.a}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.b}">
                                    <button class="pointer">b) ${question.options.b}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.c}">
                                    <button class="pointer">c) ${question.options.c}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.d}">
                                    <button class="pointer">d) ${question.options.d}</button>
                                </div>

                            </div>

                    </div>

                        
                <div class="both-page-change flex align-center">
                    <a href="../Page-1/quiz.html"><button class="next-button">Previous</button></a>
                    <a href="../Page-3/quiz.html"><button class="next-button">NEXT</button></a>
                </div>


            
                `;
        }
        else if (pageNumber == 3){
            let question = QuestionArray[2]
            html = `
            
                    <div class="quiz-container flex column">
                        <div class="header">
                            SubhamOfficial
                        </div>

                        <div class="question flex align-center">
                            ${question.page}. ${question.question}
                        </div>

                        <div class="question-and-option flex column">

                            <div class="options flex align-center column js-options">
                                <div class="option" data-answer = "${question.options.a}">
                                    <button class="pointer">a) ${question.options.a}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.b}">
                                    <button class="pointer">b) ${question.options.b}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.c}">
                                    <button class="pointer">c) ${question.options.c}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.d}">
                                    <button class="pointer">d) ${question.options.d}</button>
                                </div>

                            </div>

                    </div>

                        
                <div class="both-page-change flex align-center">
                    <a href="../Page-2/quiz.html"><button class="next-button">Previous</button></a>
                    <a href="../Page-4/quiz.html"><button class="next-button">NEXT</button></a>
                </div>


            `;
        }
        else if(pageNumber == 4) {
            let question = QuestionArray[3]
            html = `
                                <div class="quiz-container flex column">
                        <div class="header">
                            SubhamOfficial
                        </div>

                        <div class="question flex align-center">
                            ${question.page}. ${question.question}
                        </div>

                        <div class="question-and-option flex column">

                            <div class="options flex align-center column js-options">
                                <div class="option" data-answer = "${question.options.a}">
                                    <button class="pointer">a) ${question.options.a}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.b}">
                                    <button class="pointer">b) ${question.options.b}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.c}">
                                    <button class="pointer">c) ${question.options.c}</button>
                                </div>
                                <div class="option" data-answer = "${question.options.d}">
                                    <button class="pointer">d) ${question.options.d}</button>
                                </div>

                            </div>

                    </div>

                        
                <div class="both-page-change flex align-center">
                    <a href="../Page-${Number(question.page) - 1}/quiz.html"><button class="next-button">Previous</button></a>
                    <a href="../Page-3/quiz.html"><button class="next-button">NEXT</button></a>
                </div>

            `;
        } 
    

    document.querySelector(`.page-${pageNumber}`)
        .innerHTML = html;
        buttonClick();
}


