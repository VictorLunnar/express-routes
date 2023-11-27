const express = require('express')

const app = express();

app.use(express.json())

let cursos = ["Curso 1", "Curso 2", "Curso 3"]
const tables = [
    [1,"A","aaa111"],
    [2,"B","bbb222"],
    [3,"C","ccc333"],
    [4,"D","ddd444"],
    [5,"E","eee555"],
]

app.get("/tables", (req, response) => {
    return response.json(tables)
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