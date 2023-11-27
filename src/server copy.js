const express = require('express')

const app = express();

app.use(express.json())

let cursos = ["Curso 1", "Curso 2", "Curso 3"]


app.get("/courses", (req, response) => {
    return response.json(cursos)
});
app.post("/courses/:id", (req, response) => {
    console.log(req.body)
    console.log("req.body")
    return response.json([...cursos, "Curso 4"])
});

app.put("/courses/:id", (req, response) => {
    Object.keys(req).map(key => {
        console.log("key:",key)
    })
    console.log("req.params:",req.params)
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
});

app.patch("/courses/:id", (req, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
});

app.delete("/courses/:id", (req, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 4"])
});

app.listen(3000)