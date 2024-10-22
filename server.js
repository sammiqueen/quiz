import express, {application, request, response} from "express"
import nunjucks from "nunjucks"
import bodyparser from "body-parser"

import quizRouter from "./routes/quiz.js"

const app = express()

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//app.use ("/", indexRouter)
app.use ("/quiz", quizRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})