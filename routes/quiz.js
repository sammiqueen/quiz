import express from "express"
const router = express.Router()

import questions from "./questions.json" with { type: "json"};

router.get("/", (request, response) => {
    response.render("quiz.njk", {
        title: "hi",
        header: "Quiz"
    })
})

router.get("/question", (request, response) => {

    response.render("question.njk", {
        title: "hi",
        questions,
    })
})

router.post("/result", (request, response) => {
    const answers = request.body
    console.log(answers)

    /* questions.forEach(question => {
        const answer = answers[question.id]
        if (answer == question.correctAnswer) {
            console.log ("Du har svarat rätt på fråga ", question.id)
        } */

    const results = questions.map(question => {
        const answer = answers[question.id]
        return {
            question: question.text,
            answer,
            correct: answer == question.correctAnswer
        }
    })

    const correctAmount = results.filter(result => result.correct)
/*     console.log (correctAmount.length) */

    response.render("result.njk", {
        header: "Resultat",
        results,
        correctAmount
    })
})

export default router