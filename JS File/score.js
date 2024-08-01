import { marks } from "./functions.js";

export let totalMarks = 0;

marks.forEach((marks) => {
    totalMarks += marks;
})

document.querySelector(".score")
    .innerText =  totalMarks;

document.querySelector(".retry-button")
    .addEventListener("click", () => {
        localStorage.clear()
    })